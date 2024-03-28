import { AxiosInstance } from "axios";

class DealsAPI {
  private coreClient: AxiosInstance;

  constructor(coreClient: AxiosInstance) {
    this.coreClient = coreClient;
  }

  getDeals = async () => {
    const response = await this.coreClient.get("/deals");
    const data = response.data;

    return data;
  };
}

export default DealsAPI;
