import { create } from "zustand";

interface Stats {
  theme: string;
  border: boolean;
  lifetime: boolean;
  prv: boolean;
}

interface Socials {
  discord: string;
  instagram: string;
  linkedin: string;
  medium: string;
  quora: string;
  reddit: string;
  x: string;
  youtube: string;
}

interface VisitCount {
  color: number;
  icon: number;
}

interface TopRepo {
  toprepotheme: string;
}

interface Checkbox {
  trophychk: boolean;
  visitorschk: boolean;
  gtcechk: boolean;
}

interface StoreData {
  username: string;
  aboutme: string;
  stats: Stats;
  socials: Socials;
  tech: string[];
  badge_theme: string;
  trophy: {
    theme: string;
    border: boolean;
    background: boolean;
  };
  visitcount: VisitCount;
  toprepo: TopRepo;
  checkbox: Checkbox;
  finalData: string;
}

interface Store {
  data: StoreData;
  editData: (id: keyof StoreData, value: any) => void;
}

export const useStore = create<Store>((set) => ({
  data: {
    username: "",
    aboutme: "",
    stats: {
      theme: "dark",
      border: true,
      lifetime: false,
      prv: false,
    },
    socials: {
      discord: "",
      instagram: "",
      linkedin: "",
      medium: "",
      quora: "",
      reddit: "",
      x: "",
      youtube: "",
    },
    tech: [],
    badge_theme: "for-the-badge",
    trophy: {
      theme: "radical",
      border: true,
      background: false,
    },
    visitcount: {
      color: 0,
      icon: 0,
    },
    toprepo: {
      toprepotheme: "dark",
    },
    checkbox: {
      trophychk: false,
      visitorschk: true,
      quotechk: false,
      memechk: false,
      gtcechk: true,
    },
    finalData: "",
  },
  
  editData: (id, value) =>
    set((state) => ({
      data: {
        ...state.data,
        [id]: value,
      },
    })),
}));
