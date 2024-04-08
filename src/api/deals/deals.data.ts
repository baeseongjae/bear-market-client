import { Deal } from "@/types/Deal.type";

export type GetDealsData = {
  deals: Deal[];
};

export type GetDealData = {
  deal: Deal;
};

export type GetMyDealsData = {
  myDeals: Deal[];
};

export type CreateDealData = GetDealData;
export type UpdateDealData = GetDealData;
