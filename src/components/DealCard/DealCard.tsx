import { Deal } from "@/types/Deal.type";
import formatPrice from "@/utils/formatPrice.util";
import { useTimeDiff } from "@/utils/useTimeDiff";
import Image from "next/image";
import Link from "next/link";
import InterestHeartMemo from "../InterestHeart/InterestHeart";

interface DealCardProps {
  deal: Deal;
}

function DealCard({ deal }: DealCardProps) {
  const baseUrl = process.env.NEXT_PUBLIC_SERVER_URL || "";
  const imageUrl = `${baseUrl}${deal.imgSrc}`;

  return (
    <Link href={`/deals/${deal.id}`} className="relative">
      <div className="w-full h-72 relative bg-primary-100/80 rounded-3xl border border-neutral-300 shadow-xl overflow-hidden hover:scale-110 duration-500">
        {deal.imgSrc && (
          <Image src={imageUrl} fill objectFit="cover" alt={deal.title} />
        )}
      </div>
      <div>
        <h6 className="pt-4 text-lg font-bold truncate">{deal.title}</h6>
        <p className="text-xs text-neutral-400">
          {useTimeDiff(deal.createdAt)}
        </p>
        <p className="text-lg font-bold pb-2 text-primary-100">
          {formatPrice(deal.price)}
        </p>
        <p>{deal.location}</p>
        <div className="flex gap-x-1 items-center text-neutral-400 text-xs md:text-sm">
          <span>관심 {deal.interest}</span>
          <span>∙</span>
          <span>조회 {deal.views}</span>
          <InterestHeartMemo dealId={deal.id} />
        </div>
      </div>
    </Link>
  );
}

export default DealCard;
