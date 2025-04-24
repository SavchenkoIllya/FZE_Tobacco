import { InfoCard } from "@/app/ui";

interface InfoGridProps {
  cardsCount: number;
}

export const InfoGrid = ({ cardsCount }: InfoGridProps) => {
  const cards = Array.from({ length: cardsCount }, (_, index) => {
    return (
      <div
        key={index}
        className={`
        border-[#B08951] border-b-2 border-r-2
        sm:[&:not(:nth-child(4n))]:border-r-2
        sm:[&:nth-child(4n)]:border-r-0
        sm:[&:not(:nth-child(4n+1))]:border-l-2
        [&:nth-last-child(-n+2)]:border-b-0
        sm:[&:nth-last-child(-n+4)]:border-b-0
        even:border-r-0 sm:even:border-r-2
      `}
      >
        <InfoCard key={index} />
      </div>
    );
  });

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-0 border-[#B08951] mt-20">
      {cards}
    </div>
  );
};
