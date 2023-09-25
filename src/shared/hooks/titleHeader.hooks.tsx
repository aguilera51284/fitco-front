import { create } from 'zustand';

interface TitleHeader {
  title: string;
  changeTitle: (title: string) => void;
}

const useTitleHeader = create<TitleHeader>()((set) => ({
  title: 'Dashboard',
  changeTitle: (title: string) => set({ title }),
}));

export default useTitleHeader;
