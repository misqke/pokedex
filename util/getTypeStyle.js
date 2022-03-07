const getTypeStyle = (type) => {
  switch (type) {
    case "Bug":
      return {
        backgroundColor: "#729f3f",
      };
    case "Dragon":
      return {
        background: "linear-gradient(180deg, #53a4cf 50%, #f16e57 50%)",
      };
    case "Fairy":
      return {
        background: "#fdb9e9",
      };
    case "Fire":
      return {
        background: "#fd7d24",
      };
    case "Ghost":
      return {
        background: "#7b62a3",
      };
    case "Ground":
      return {
        background: "linear-gradient(180deg, #f7de3f 50%, #ab9842 50%)",
      };
    case "Normal":
      return {
        background: "#a4acaf",
      };
    case "Psychic":
      return {
        background: "#f366b9",
      };
    case "Steel":
      return {
        background: "#9eb7b8",
      };
    case "Dark":
      return {
        background: "#707070",
      };
    case "Electric":
      return {
        background: "#eed535",
      };
    case "Fighting":
      return {
        background: "#d56723",
      };
    case "Flying":
      return {
        background: "linear-gradient(180deg, #3dc7ef 50%, #bdb9b8 50%)",
      };
    case "Grass":
      return {
        background: "#9bcc50",
      };
    case "Ice":
      return {
        background: "#51c4e7",
      };
    case "Poison":
      return {
        background: "#b97fc9",
      };
    case "Rock":
      return {
        background: "#a38c21",
      };
    case "Water":
      return {
        backgroundColor: "#4592c4",
      };
    default:
      return {
        background: "#fff",
      };
  }
};

export default getTypeStyle;
