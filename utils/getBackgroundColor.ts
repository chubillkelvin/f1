export const getBackgroundColor = (rank: string) => {
  switch (rank) {
    case "1":
      return "gold";
    case "2":
      return "gainsboro";
    case "3":
      return "#E7CFAE";
    default:
      return undefined;
  }
};
