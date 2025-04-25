import { ContactsList, SliderNavigation } from "@/app/ui/components";

export const Header = () => {
  return (
    <header className={"fixed top-0 w-[100dvw] z-20"}>
      <div className={"container m-auto"}>
        <div className={"flex items-center justify-between mx-8 my-4"}>
          <SliderNavigation />
          <div>
            <img src="/logo.svg" alt="Tobacco & cigarettes trading logo" />
          </div>

          <ContactsList wrapperClasses={"hidden md:flex gap-4"} />
        </div>
      </div>
    </header>
  );
};
