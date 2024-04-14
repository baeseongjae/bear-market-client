import { Deal } from "@/types/Deal.type";
import formatPrice from "@/utils/formatPrice.util";
import Image from "next/image";
import Link from "next/link";
import InterestHeart from "../InterestHeart/InterestHeart";

interface DealCardProps {
  deal: Deal;
}

function DealCard({ deal }: DealCardProps) {
  return (
    <Link href={`/deals/${deal.id}`}>
      <div className="w-72 h-72 bg-blue-200 rounded-3xl">
        {deal.imgSrc && (
          <Image
            src={`http://localhost:5050${deal.imgSrc}`}
            width={300}
            height={300}
            alt={deal.title}
            className="w-full"
          />
        )}
      </div>
      <div>
        <h6 className="pt-4 text-lg">{deal.title}</h6>
        <p className="text-xl font-bold pb-2">{formatPrice(deal.price)}</p>
        <p>{deal.location}</p>
        <div className="flex gap-x-1 items-center">
          <span>관심 {deal.interest}</span>
          <span>∙</span>
          <span>조회 {deal.views}</span>
          <InterestHeart dealId={deal.id} />
        </div>
      </div>
    </Link>
  );
}

export default DealCard;
