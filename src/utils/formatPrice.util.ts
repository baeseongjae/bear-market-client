export default function formatPrice(price: string): string {
  const formattedPrice = new Intl.NumberFormat("ko-KR").format(Number(price));

  return `${formattedPrice}원`;
}
