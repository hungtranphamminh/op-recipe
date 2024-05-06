import { create } from 'zustand';

type State = {
  name: string;
  tags: string[];
  ingredients: string[];
  collections: string[];
  hasSearch: boolean;
};

type Actions = {
  updateName: (name: string) => void;
  updateTags: (tags: string[]) => void;
  updateSearch: (hasSearch: boolean) => void;
  updateIngredients: (ingredients: string[]) => void;
  updateCollections: (collections: string[]) => void;
};


const useRecipeStore = create<State & Actions>((set) => ({
  name: '',
  tags: ["Vegans", "Healthy", "Quick Meals"],
  ingredients: ["Rice", "Noodle", "Beef", "Beans", "Pork", "Pepper", "Salmon"],
  collections: ["Healthy Recipes", "Weekend Nights", "Spring Freshes"],
  hasSearch: false,
  updateName: (name) => set((state) => ({ ...state, name })),
  updateTags: (tags) => set((state) => ({ ...state, tags })),
  updateIngredients: (ingredients) => set((state) => ({ ...state, ingredients })),
  updateCollections: (collections) => set((state) => ({ ...state, collections })),
  updateSearch: (hasSearch) => set((state) => ({ ...state, hasSearch })),
}));

export default useRecipeStore;

export const useRecipeSearchParams = () => {
  const state = useRecipeStore((state) => ({
    name: state.name,
    tags: state.tags,
    hasSearch: state.hasSearch,
    ingredients: state.ingredients,
    collections: state.collections,
  }));

  const updateName = useRecipeStore((state) => state.updateName);
  const updateTags = useRecipeStore((state) => state.updateTags);
  const updateIngredients = useRecipeStore((state) => state.updateIngredients);
  const updateCollections = useRecipeStore((state) => state.updateCollections);
  const updateSearch = useRecipeStore((state) => state.updateSearch);

  return { ...state, updateName, updateTags, updateIngredients, updateCollections, updateSearch };
};