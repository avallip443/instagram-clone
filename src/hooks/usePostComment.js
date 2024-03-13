import useAuthStore from "../store/authStore";
import usePostStore from "../store/postStore";
import useShowToast from "./useShowToast";
import { arrayUnion, doc, updateDoc } from "firebase/firestore";
import { firestore } from "../firebase/firebase";
import { useState } from "react";

const usePostComment = () => {
  const [isCommenting, setIsCommenting] = useState(false);
  const authUser = useAuthStore((state) => state.user);
  const addComment = usePostStore((state) => state.addComment);
  const showToast = useShowToast();

  const handlePostComment = async (postID, comment) => {
    if (isCommenting) return;

    if (!authUser) {
      return showToast("Error", "You must be logged in to comment", "error");
    }

    setIsCommenting(true);

    const newComment = {
      comment,
      postID,
      createdBy: authUser.uid,
      createdAt: Date.now(),
    };

    try {
      await updateDoc(doc(firestore, "posts", postID), {
        comments: arrayUnion(newComment),
      });

      addComment(postID, newComment);
    } catch (error) {
      showToast("Error", error.message, "error");
    } finally {
      setIsCommenting(false);
    }
  };

  return { isCommenting, handlePostComment };
};

export default usePostComment;
