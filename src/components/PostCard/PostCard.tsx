import { Deal } from "@/types/deals.type";
import formatPrice from "@/utils/formatPrice.util";
import Link from "next/link";

interface PostCardProps {
  deal: Deal;
}

function PostCard({ deal }: PostCardProps) {
  return (
    <Link href="/">
      <div className="w-72 h-72 bg-blue-200"></div>
      <div>
        <h6 className="pt-4 text-lg">{deal.title}</h6>
        <p className="text-xl font-bold pb-2">{formatPrice(deal.price)}</p>
        <p>{deal.location}</p>
      </div>
    </Link>
  );
}

export default PostCard;
