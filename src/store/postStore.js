import { create } from "zustand";

const usePostStore = create((set) => ({
  posts: [],
  createPost: (post) =>
    set((state) => ({
      posts: [post, ...state.posts],
    })),
  setPost: (posts) => set({ posts }),
  deletePost: (id) =>
    set((state) => ({ posts: state.posts.filter((post) => post.id !== id) })),
  addComment: (postID, comment) =>
    set((state) => ({
      posts: state.posts.map((post) => {
        if (post.id === postID) {
          return {
            ...post,
            comments: [...post.comments, comment], // adds comment to the end
          };
        }
        return post;
      }),
    })),
}));

export default usePostStore;
