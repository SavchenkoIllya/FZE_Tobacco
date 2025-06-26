export const InfoCard = () => {
  return (
    <div
      className={`relative overflow-hidden flex flex-col items-center justify-center px-4 py-4 group`}
    >
      <div className="absolute inset-0 bg-gradient-to-tl from-accent to-secondary opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-in-out"></div>

      <div className="relative flex flex-col gap-1 items-center justify-center text-center">
        <h3 className="h2">~100$ billions</h3>
        <p className="text-primary text-justify max-w-[250px]">
          cumulative trading volume to date
        </p>
      </div>
    </div>
  );
};
