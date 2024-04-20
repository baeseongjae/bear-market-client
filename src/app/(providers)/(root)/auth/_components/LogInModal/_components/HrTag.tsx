function HrTag({ className }: { className?: string }) {
  return (
    <div
      className={`flex items-center justify-center space-x-2 my-5 ${className}`}
    >
      <div className="flex-1 border-t border-neutral-40"></div>
      <span className="px-2 text-xs text-neutral-70 bg-white">또는</span>
      <div className="flex-1 border-t border-neutral-40"></div>
    </div>
  );
}

export default HrTag;
