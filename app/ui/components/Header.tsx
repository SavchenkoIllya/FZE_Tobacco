import { ContactsList } from "@/app/ui/components/index";

export const Header = () => {
  return (
    <header className={"fixed top-0 w-[100dvw]"}>
      <div className={"flex items-center justify-between mx-8 my-4"}>
        <div>
          <img src="/logo.svg" alt="Tobacco & cigarettes trading logo" />
        </div>

        <div>
          <nav className={"text-white uppercase"}>
            <ul className={"flex gap-4"}>
              <li>About us</li>
              <li>Brands</li>
              <li>Contacts</li>
            </ul>
          </nav>
        </div>

        <ContactsList />
      </div>
    </header>
  );
};
