export const ScrollIndicatorTooltip = ({ label }: { label: string }) => {
  return (
    <div className="absolute right-6 top-1/2 -translate-y-1/2 whitespace-nowrap px-2 py-1 rounded text-sm bg-accent text-accent-foreground text-white font-bold">
      {label.charAt(0).toUpperCase() + label.slice(1).toLowerCase()}
    </div>
  );
};
