import { SharedPillar } from "@/app/types";
import { InfoCard } from "@/app/ui";

interface InfoGridProps {
  pillars_list: SharedPillar[];
}

export const InfoGrid = ({ pillars_list }: InfoGridProps) => {
  const cards = pillars_list?.map((pillar) => (
    <div
      key={pillar.id}
      className={`
        w-[200px]
        border-accent border-b-2 border-r-1
        xl:[&:not(:nth-child(4n))]:border-r-1
        xl:[&:nth-child(4n)]:border-r-0
        xl:[&:not(:nth-child(4n+1))]:border-l-1
        [&:nth-last-child(-n+2)]:border-b-0
        xl:[&:nth-last-child(-n+4)]:border-b-0
        even:border-r-0 xl:even:border-r-1
      `}
    >
      <InfoCard text={pillar.label} title={pillar.title} />
    </div>
  ));

  return (
    <div className="grid grid-cols-2 xl:grid-cols-4 gap-0 border-accent mt-20">
      {cards}
    </div>
  );
};
