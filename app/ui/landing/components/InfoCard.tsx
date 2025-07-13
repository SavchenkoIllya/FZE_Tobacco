export const InfoCard = ({ title, text }: { title: string; text: string }) => {
  return (
    <div className={"relative p-4 text-center"}>
      <div className="absolute inset-0 bg-gradient-to-tl from-accent to-secondary opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-in-out" />
      <div>
        <h3 className="h2 truncate">{title}</h3>
        <p className="text-primary max-w-[250px]">{text}</p>
      </div>
    </div>
  );
};
