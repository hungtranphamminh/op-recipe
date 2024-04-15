import { create } from 'zustand';

type State = {
  name: string;
  tags: string[];
  ingredients: string[];
  collections: string[];
};

type Actions = {
  updateName: (name: string) => void;
  updateTags: (tags: string[]) => void;
  updateIngredients: (ingredients: string[]) => void;
  updateCollections: (collections: string[]) => void;
};


const useStore = create<State & Actions>((set) => ({
  name: '',
  tags: [],
  ingredients: [],
  collections: [],
  updateName: (name) => set((state) => ({ ...state, name })),
  updateTags: (tags) => set((state) => ({ ...state, tags })),
  updateIngredients: (ingredients) => set((state) => ({ ...state, ingredients })),
  updateCollections: (collections) => set((state) => ({ ...state, collections })),
}));

export default useStore;
