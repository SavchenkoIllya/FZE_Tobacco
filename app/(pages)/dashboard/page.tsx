import { LoginForm } from "@/app/ui/components/forms/Login";

export default function Dashboard() {
  return (
    <main className={"bg-white h-[100dvh] w-[100dvw]"}>
      <div className={"w-full h-full flex justify-center items-center"}>
        <LoginForm />
      </div>
    </main>
  );
}
