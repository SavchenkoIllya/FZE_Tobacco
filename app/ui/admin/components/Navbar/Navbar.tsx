import { NavbarIcon } from "@/app/ui/admin";

export const NAVBAR_WIDTH = "64px";

export const Navbar = () => {
  return (
    <div
      style={{
        width: NAVBAR_WIDTH,
      }}
      className={"fixed bg-blue-500 h-full flex flex-col items-center p-8"}
    >
      <NavbarIcon />
    </div>
  );
};
