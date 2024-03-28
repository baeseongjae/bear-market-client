import axios from "axios";
import HealthAPI from "./health/health.api";

const coreClient = axios.create({
  baseURL: "http://localhost:5050",
});

class API {
  static health = new HealthAPI(coreClient);
}

export default API;
