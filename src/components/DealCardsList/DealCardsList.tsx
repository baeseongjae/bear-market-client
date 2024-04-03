import { Deal } from "@/types/deals.type";
import DealCard from "../DealCard";

interface DealCardsListProps {
  deals: Deal[];
}

function DealCardsList({ deals }: DealCardsListProps) {
  return (
    <ul className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-x-8 gap-y-12">
      {deals?.map((deal) => (
        <li key={deal.id}>
          <DealCard deal={deal} />
        </li>
      ))}
    </ul>
  );
}

export default DealCardsList;
