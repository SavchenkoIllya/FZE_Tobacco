interface InfoCardProps {
  showBorderTop?: boolean;
  showBorderRight?: boolean;
  showBorderBottom?: boolean;
  showBorderLeft?: boolean;
}

export const InfoCard = ({
  showBorderTop = false,
  showBorderRight = true,
  showBorderBottom = true,
  showBorderLeft = false,
}: InfoCardProps) => {
  const borderClasses = [
    showBorderTop ? "border-t-2" : "",
    showBorderRight ? "border-r-2" : "",
    showBorderBottom ? "border-b-2" : "",
    showBorderLeft ? "border-l-2" : "",
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <div
      className={`relative overflow-hidden flex flex-col items-center justify-center px-4 py-4 group cursor-pointer`}
    >
      <div className="absolute inset-0 bg-gradient-to-tl from-[#B08951] to-[#000000] opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-in-out"></div>

      <div className="relative flex flex-col gap-1 items-center justify-center">
        <h3 className="h2">~100$ billions</h3>
        <p className="text-white text-justify max-w-[250px]">
          cumulative trading volume to date
        </p>
      </div>
    </div>
  );
};
