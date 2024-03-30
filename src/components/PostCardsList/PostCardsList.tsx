import { Deal } from "@/types/deals.type";
import PostCard from "../PostCard";

interface PostCardsListProps {
  deals: Deal[];
}

function PostCardsList({ deals }: PostCardsListProps) {
  console.log(deals);
  return (
    <ul className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-x-8 gap-y-12">
      {deals?.map((deal) => (
        <li key={deal.id}>
          <PostCard deal={deal} />
        </li>
      ))}
    </ul>
  );
}

export default PostCardsList;
