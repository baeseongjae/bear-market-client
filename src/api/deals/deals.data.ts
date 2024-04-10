import { Deal } from "@/types/Deal.type";
import { Interest } from "@/types/Interest.type";

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
export type DeleteDealData = GetDealData;
export type ToggleInterestData = GetDealData;

export type GetMyInterestsData = {
  myInterests: Interest[];
};

export type GetMyInterestedDealsData = {
  myInterestedDeals: Deal[];
};
