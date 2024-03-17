import useAuthStore from "../store/authStore";
import usePostStore from "../store/postStore";
import useShowToast from "./useShowToast";
import useUserProfileStore from "../store/userProfileStore";
import { collection, getDocs, query, where } from "firebase/firestore";
import { firestore } from "../firebase/firebase";
import { useEffect, useState } from "react";

const useGetFeedPosts = () => {
  const [isLoading, setIsLoading] = useState(true);
  const authUser = useAuthStore((state) => state.user);
  const { posts, setPost } = usePostStore();
  const { setUserProfile } = useUserProfileStore();
  const showToast = useShowToast();

  useEffect(() => {
    const getFeedPosts = async () => {
      setIsLoading(true);

      if (authUser.following.length == 0) {
        setIsLoading(false);
        setPost([]);
        return;
      }

      const q = query(
        collection(firestore, "posts"),
        where("createdBy", "in", authUser.following)
      );

      try {
        const querySnapshot = await getDocs(q);
        const feedPosts = [];

        querySnapshot.forEach((doc) => {
          feedPosts.push({ id: doc.id, ...doc.data() });
        });

        feedPosts.sort((a, b) => b.createdAt - a.createdAt); // newest posts displayed first
        setPost(feedPosts);
      } catch (error) {
        showToast("Error", error.message, "error");
      } finally {
        setIsLoading(false);
      }
    };
    if (authUser) getFeedPosts();
  }, [authUser, showToast, setPost, setUserProfile]);

  return { isLoading, posts };
};

export default useGetFeedPosts;
