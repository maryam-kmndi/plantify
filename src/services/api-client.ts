import axios from "axios";
export default axios.create({
  baseURL: "https://perenual.com/api/species-list?key=[key]",
  params: {
    key: "sk-84X966a6761c5aa666364",
  },
});
