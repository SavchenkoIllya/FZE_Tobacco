import { ContactsList, Navigation, SliderMenu } from "@/app/ui/components";

export const Header = () => {
  return (
    <header className={"fixed top-0 w-[100dvw]"}>
      <div className={"container m-auto"}>
        <div className={"flex items-center justify-between mx-8 my-4"}>
          <SliderMenu />
          <div>
            <img src="/logo.svg" alt="Tobacco & cigarettes trading logo" />
          </div>

          <div className={"hidden md:block"}>
            <Navigation />
          </div>

          <ContactsList wrapperClasses={"hidden md:flex gap-4"} />
        </div>
      </div>
    </header>
  );
};
