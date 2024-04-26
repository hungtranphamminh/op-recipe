import { create } from 'zustand';

type State = {
  userId: string;
  username: string;
  avatar?: string;
};

type Actions = {
  updateUsername: (username: string) => void;
  updateUserId: (id: string) => void;
  updateAvatar: (avatar: string) => void;

};


const useUserStore = create<State & Actions>((set) => ({
  userId: '',
  username: '',
  updateUsername: (username) => set((state) => ({ ...state, username })),
  updateUserId: (userId) => set((state) => ({ ...state, userId })),
  updateAvatar: (avatar) => set((state) => ({ ...state, avatar })),
}));

export default useUserStore;

export const useUserInfo = () => {
  const state = useUserStore((state) => ({
    username: state.username,
    userId: state.userId,
    avatar: state.avatar,
  }));

  const updateUsername = useUserStore((state) => state.updateUsername);
  const updateUserId = useUserStore((state) => state.updateUserId);
  const updateAvatar = useUserStore((state) => state.updateAvatar);

  return { ...state, updateUsername, updateUserId, updateAvatar };
};