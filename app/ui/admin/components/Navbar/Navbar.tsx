import { NAVBAR_WIDTH } from "@/app/lib";
import { NavbarIcon } from "@/app/ui/admin";

export default function Navbar() {
  return (
    <div
      style={{
        width: NAVBAR_WIDTH,
      }}
      className={
        "fixed bg-white border-r-1 border-zinc-200 h-full flex flex-col items-center p-8"
      }
    >
      <NavbarIcon />
    </div>
  );
}
