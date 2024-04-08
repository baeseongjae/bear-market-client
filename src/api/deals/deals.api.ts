import { Response } from "@/types/Response.type";
import { AxiosInstance } from "axios";
import {
  CreateDealData,
  DeleteDealData,
  GetDealData,
  GetDealsData,
  GetMyDealsData,
  UpdateDealData,
} from "./deals.data";
import { CreateDealDto, UpdateDealDto } from "./deals.dto";

class DealsAPI {
  private coreClient: AxiosInstance;

  constructor(coreClient: AxiosInstance) {
    this.coreClient = coreClient;
  }

  getDeals = async () => {
    const response = await this.coreClient.get<Response<GetDealsData>>(
      "/deals"
    );
    const data = response.data;
    if (!data.success) throw new Error(data.error.message);

    const { deals } = data.result;

    return deals;
  };

  getDeal = async (dealId: number) => {
    const response = await this.coreClient.get<Response<GetDealData>>(
      `/deals/${dealId}`
    );
    const data = response.data;
    if (!data.success) throw new Error(data.error.message);

    const { deal } = data.result;

    return deal;
  };

  getMyDeals = async () => {
    const response = await this.coreClient.get<Response<GetMyDealsData>>(
      "/my/deals"
    );
    const data = response.data;
    if (!data.success) throw new Error(data.error.message);

    const { myDeals } = data.result;

    return myDeals;
  };

  createDeal = async (createDealDto: CreateDealDto) => {
    const response = await this.coreClient.post<Response<CreateDealData>>(
      "/deals/create",
      createDealDto
    );
    const data = response.data;
    if (!data.success) throw new Error(data.error.message);

    const { deal } = data.result;

    return deal;
  };

  updateDeal = async (updateDealDto: UpdateDealDto, dealId: number) => {
    const response = await this.coreClient.patch<Response<UpdateDealData>>(
      `/deals/${dealId}/edit`,
      updateDealDto
    );
    const data = response.data;
    if (!data.success) throw new Error(data.error.message);

    const { deal } = data.result;

    return deal;
  };

  deleteDeal = async (dealId: number) => {
    const response = await this.coreClient.delete<Response<DeleteDealData>>(
      `/deals/${dealId}/delete`
    );
    const data = response.data;
    if (!data.success) throw new Error(data.error.message);

    const { deal } = data.result;

    return deal;
  };
}

export default DealsAPI;
