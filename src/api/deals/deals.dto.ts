import { DealForm } from "@/types/DealForm.type";

export type CreateDealDto = DealForm;

export type UpdateDealDto = DealForm;

export type GetMyInterestedDealsDto = {
  dealIds: number[];
};
