import {
  differenceInHours,
  differenceInMinutes,
  formatDistanceToNow,
  parseISO,
} from "date-fns";

export function useTimeDiff(createdAt: string): string {
  const date = parseISO(createdAt);
  const now = new Date();
  const diffMinutes = differenceInMinutes(now, date);

  if (diffMinutes < 1) {
    return `방금 전`;
  }

  if (diffMinutes < 60) {
    return `${diffMinutes}분 전`;
  }

  const diffHours = differenceInHours(now, date);
  if (diffHours < 24) {
    return `${diffHours}시간 전`;
  }

  return formatDistanceToNow(date, { addSuffix: true });
}
