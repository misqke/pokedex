const getTypeStyle = (type) => {
  switch (type) {
    case "Bug":
      return {
        backgroundColor: "#729f3f",
        color: "#fff",
      };
    case "Dragon":
      return {
        background: "linear-gradient(180deg, #53a4cf 50%, #f16e57 50%)",
        color: "#fff",
      };
    case "Fairy":
      return {
        background: "#fdb9e9",
        color: "#313131",
      };
    case "Fire":
      return {
        background: "#fd7d24",
        color: "#fff",
      };
    case "Ghost":
      return {
        background: "#7b62a3",
        color: "#fff",
      };
    case "Ground":
      return {
        background: "linear-gradient(180deg, #f7de3f 50%, #ab9842 50%)",
        color: "#313131",
      };
    case "Normal":
      return {
        background: "#a4acaf",
        color: "#313131",
      };
    case "Psychic":
      return {
        background: "#f366b9",
        color: "#fff",
      };
    case "Steel":
      return {
        background: "#9eb7b8",
        color: "#313131",
      };
    case "Dark":
      return {
        background: "#707070",
        color: "#fff",
      };
    case "Electric":
      return {
        background: "#eed535",
        color: "#313131",
      };
    case "Fighting":
      return {
        background: "#d56723",
        color: "#fff",
      };
    case "Flying":
      return {
        background: "linear-gradient(180deg, #3dc7ef 50%, #bdb9b8 50%)",
        color: "#313131",
      };
    case "Grass":
      return {
        background: "#9bcc50",
        color: "#313131",
      };
    case "Ice":
      return {
        background: "#51c4e7",
        color: "#313131",
      };
    case "Poison":
      return {
        background: "#b97fc9",
        color: "#fff",
      };
    case "Rock":
      return {
        background: "#a38c21",
        color: "#fff",
      };
    case "Water":
      return {
        backgroundColor: "#4592c4",
        color: "#fff",
      };
    default:
      return {
        background: "#fff",
      };
  }
};

export default getTypeStyle;
