import useAuthStore from "../store/authStore";
import useShowToast from "./useShowToast";
import useUserProfileStore from "../store/userProfileStore";
import { arrayRemove, arrayUnion, doc, updateDoc } from "firebase/firestore";
import { firestore } from "../firebase/firebase";
import { useEffect, useState } from "react";

const useFollowUser = (userID) => {
  const [isUpdating, setIsUpdating] = useState(false);
  const [isFollowing, setIsFollowing] = useState(false);

  const authUser = useAuthStore((state) => state.user);
  const setAuthUser = useAuthStore((state) => state.setUser);

  const { userProfile, setUserProfile } = useUserProfileStore();
  const showToast = useShowToast();

  const handleFollowUser = async () => {
    setIsUpdating(true);

    try {
      const currentUserRef = doc(firestore, "users", authUser.uid);
      const userToFollowOrUnfollow = doc(firestore, "users", userID);

      await updateDoc(currentUserRef, {
        following: isFollowing ? arrayRemove(userID) : arrayUnion(userID),
      });

      await updateDoc(userToFollowOrUnfollow, {
        followers: isFollowing
          ? arrayRemove(authUser.uid)
          : arrayUnion(authUser.uid),
      });

      if (isFollowing) {
        // unfollow
        setAuthUser({
          ...authUser,
          following: authUser.following.filter((uid) => uid !== userID),
        });

        setUserProfile({
          ...userProfile,
          followers: userProfile.followers.filter(
            (uid) => uid !== authUser.uid
          ),
        });

        localStorage.setItem(
          "user-info",
          JSON.stringify({
            ...authUser,
            following: authUser.following.filter((uid) => uid !== userID),
          })
        );

        setIsFollowing(false);
      } else {
        // follow
        setAuthUser({
          ...authUser,
          following: [...authUser.following, userID],
        });

        setUserProfile({
          ...userProfile,
          followers: [...userProfile.followers, authUser.uid],
        });

        localStorage.setItem(
          "user-info",
          JSON.stringify({
            ...authUser,
            following: [...authUser.following, userID],
          })
        );

        setIsFollowing(true);
      }
    } catch (error) {
      showToast("Error", error.message, "error");
    } finally {
      setIsUpdating(false);
    }
  };

  /* updates following state by checking if the current user's following array 
  has the uid of the user they want to follow */
  useEffect(() => {
    if (authUser) {
      const isFollowing = authUser.following.includes(userID);
      setIsFollowing(isFollowing);
    }
  }, [authUser, userID]);

  return { isUpdating, isFollowing, handleFollowUser };
};

export default useFollowUser;
