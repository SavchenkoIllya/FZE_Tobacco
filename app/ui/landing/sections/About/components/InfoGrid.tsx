import { SharedPillar } from "@/app/types";
import { chunkArray, cn, InfoCard } from "@/app/ui";

interface InfoGridProps {
  pillars_list: SharedPillar[];
}

export const InfoGrid = ({ pillars_list }: InfoGridProps) => {
  const mobileRows = chunkArray(pillars_list, 2);
  const xlRows = chunkArray(pillars_list, 4);

  return (
    <>
      <div className="block xl:hidden w-full">
        {mobileRows.map((row, rowIdx) => (
          <div
            key={`mobile-row-${row[0].id}-${rowIdx}`}
            className={cn(
              "flex",
              rowIdx !== mobileRows.length - 1 && "border-b border-accent",
            )}
          >
            {row.map((pillar, colIdx) => (
              <div
                key={pillar.id}
                className={cn(
                  "w-1/2",
                  colIdx !== row.length - 1 && "border-r border-accent",
                )}
              >
                <InfoCard text={pillar.label} title={pillar.title} />
              </div>
            ))}
          </div>
        ))}
      </div>

      <div className="hidden xl:block w-full">
        {xlRows.map((row, rowIdx) => (
          <div
            key={`xl-row-${row[0].id}-${rowIdx}`}
            className={cn(
              "flex",
              rowIdx !== xlRows.length - 1 && "border-b border-accent",
            )}
          >
            {row.map((pillar, colIdx) => (
              <div
                key={pillar.id}
                className={cn(
                  "w-1/4",
                  colIdx !== row.length - 1 && "border-r border-accent",
                )}
              >
                <InfoCard text={pillar.label} title={pillar.title} />
              </div>
            ))}
          </div>
        ))}
      </div>
    </>
  );
};
