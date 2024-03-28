import { AxiosInstance } from "axios";

class HealthAPI {
  private coreClient: AxiosInstance;

  constructor(coreClient: AxiosInstance) {
    this.coreClient = coreClient;
  }

  healthCheck = async () => {
    const url = "/health-check";
    const response = await this.coreClient.get(url);
    const data = response.data;

    return data;
  };
}

export default HealthAPI;
