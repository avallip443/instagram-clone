import { create } from "zustand";

const useUserProfileStore = create((set) => ({
  userProfile: null,
  setUserProfile: (userProfile) => set({ userProfile }),
  // updates number of posts on profile page
  addPost: (post) =>
    set((state) => ({
      userProfile: {
        ...state.userProfile,
        posts: [post.id, ...state.userProfile.posts],
      },
    })),
  // TODO: delete post
}));

export default useUserProfileStore;
