import { Deal } from "@/types/deals.type";
import Link from "next/link";

interface ProductCardsListProps {
  deals: Deal[];
}

function ProductCardsList({ deals }: ProductCardsListProps) {
  console.log(deals);
  return (
    <ul>
      {deals?.map((deal) => (
        <li key={deal.id}>
          <Link href="/">
            <div className="w-50 h-50 bg-yellow-400"></div>
            <div>
              <h6>{deal.title}</h6>
              <p>{deal.location}</p>
            </div>
          </Link>
        </li>
      ))}
    </ul>
  );
}

export default ProductCardsList;
