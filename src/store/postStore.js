import { create } from "zustand";

const usePostStore = create((set) => ({
  posts: [],
  createPost: (post) =>
    set((state) => ({
      posts: [post, ...state.posts],
    })),
  setPost: (posts) => set({ posts }),
  //TODO: delete post, add comment
}));

export default usePostStore;
