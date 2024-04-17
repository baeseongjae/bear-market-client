import {
  differenceInDays,
  differenceInHours,
  differenceInMinutes,
  differenceInMonths,
  differenceInWeeks,
  differenceInYears,
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

  const diffDays = differenceInDays(now, date);
  if (diffDays < 7) {
    return `${diffDays}일 전`;
  }

  const diffWeeks = differenceInWeeks(now, date);
  if (diffWeeks < 5) {
    return `${diffWeeks}주 전`;
  }

  const diffMonths = differenceInMonths(now, date);
  if (diffMonths < 12) {
    return `${diffMonths}달 전`;
  }

  const diffYears = differenceInYears(now, date);
  return `${diffYears}년 전`;
}
