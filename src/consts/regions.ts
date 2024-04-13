export const REGIONS: Record<string, { name: string; element: string }> = {
  Mon: {
    name: "Mondstadt",
    element: "Anemo",
  },
  Ly: {
    name: "Liyue",
    element: "Geo",
  },
  Ina: {
    name: "Inazuma",
    element: "Electro",
  },
  Sum: {
    name: "Sumeru",
    element: "Dendro",
  },
  Fon: {
    name: "Fontaine",
    element: "Hydro",
  },
  Nat: {
    name: "Natlan",
    element: "Pyro",
  },
  Sne: {
    name: "Snezhnaya",
    element: "Cryo",
  },
} as const;
