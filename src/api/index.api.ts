import axios from "axios";
import AuthAPI from "./auth/auth.api";
import DealsAPI from "./deals/deals.api";
import HealthAPI from "./health/health.api";

// const accessToken =
//   typeof window !== "undefined" ? localStorage.getItem("accessToken") : null;

const coreClient = axios.create({
  baseURL: "http://localhost:5050",
  // headers: {
  //   Authorization: accessToken ? `Bearer ${accessToken}` : undefined,
  // },
});

class API {
  static health = new HealthAPI(coreClient);
  static deals = new DealsAPI(coreClient);
  static auth = new AuthAPI(coreClient);
}

export default API;
