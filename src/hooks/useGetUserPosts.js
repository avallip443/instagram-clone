import usePostStore from "../store/postStore";
import useShowToast from "./useShowToast";
import useUserProfileStore from "../store/userProfileStore";
import { collection, getDocs, query, where } from "firebase/firestore";
import { firestore } from "../firebase/firebase";
import { useEffect, useState } from "react";

const useGetUserPosts = () => {
  const [isLoading, setIsLoading] = useState(true);
  const { posts, setPost } = usePostStore();
  const userProfile = useUserProfileStore((state) => state.userProfile);
  const showToast = useShowToast();

  useEffect(() => {
    const getPosts = async () => {
      if (!userProfile) return;

      setIsLoading(true);
      setPost([]);

      try {
        const q = query(
          collection(firestore, "posts"),
          where("createdBy", "==", userProfile.uid)
        );

        const querySnapshot = await getDocs(q);
        const posts = [];

        querySnapshot.forEach((doc) => {
          posts.push({ ...doc.data(), id: doc.id });
        });

        posts.sort((a, b) => b.createdAt - a.createdAt); // newest first
        setPost(posts);
      } catch (error) {
        showToast("Error", error.message, "error");
        setPost([]);
      } finally {
        setIsLoading(false);
      }
    };
    getPosts();
  }, [setPost, userProfile, showToast]);
  return { isLoading, posts };
};

export default useGetUserPosts;