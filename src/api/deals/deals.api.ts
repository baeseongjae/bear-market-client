import { AxiosInstance } from "axios";
import { createDealDto } from "./deals.dto";

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

  getDeal = async (dealId: number) => {
    const response = await this.coreClient.get(`/deals/${dealId}`);
    const data = response.data;

    return data;
  };

  getMyDeals = async () => {
    const response = await this.coreClient.get("/my/deals");
    const data = response.data;

    return data;
  };

  createDeal = async (createDealDto: createDealDto) => {
    const response = await this.coreClient.post("/deals/create", createDealDto);
    const data = response.data;

    return data;
  };
}

export default DealsAPI;
