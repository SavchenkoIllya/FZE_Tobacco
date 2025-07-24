export const ProductCardSkeleton = () => {
  return (
    <div
      className={
        "text-left flex flex-col p-2 rounded-3xl transition-all bg-zinc-100 animate-pulse"
      }
    >
      <div className={"space-y-2 m-1"}>
        <div className={"h-40 rounded-2xl bg-zinc-50"}></div>
        <div className={"space-y-2"}>
          <div className={"h-4 rounded-2xl bg-zinc-200"}></div>
          <div className={"h-3 rounded-2xl bg-zinc-200"}></div>
        </div>
      </div>
      <div className={"mt-2 m-1 space-y-2"}>
        <div className={"h-2 rounded-2xl bg-zinc-200"}></div>
        <div className={"h-2 rounded-2xl bg-zinc-200"}></div>
        <div className={"h-2 rounded-2xl bg-zinc-200"}></div>
      </div>
    </div>
  );
};
