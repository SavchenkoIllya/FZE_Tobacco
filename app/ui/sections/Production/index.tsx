import { LandingSections } from "@/app/lib";

export const Production = () => {
  return (
    <section id={LandingSections.PRODUCTION} className="bg-white w-full py-10">
      <div className={"container mx-auto"}>
        <div className={"grid grid-cols-1 md:grid-cols-3 items-center"}>
          <div className={"hidden md:block"}>
            <img
              src="/images/Image1.png"
              alt="Левая Фото"
              className={"object-cover w-full h-full rounded-4xl"}
            />
          </div>

          <div className="flex flex-col items-center justify-center text-center p-8">
            <h1 className="h1 !text-black">Let&#39;s grow up together!</h1>
            <p className="text-lg mb-6">
              We are ISO certificaed and produce world class products that cater
              to various consumers with different style and taste preferences.
              Authenticity is our core philosophy and we believe in developing
              genuine products which are passed on to generations to continue
              our formidable legacy.
            </p>
            <button className={"button !bg-black !text-white"}>Click me</button>
          </div>

          <div className={"hidden md:block"}>
            <img
              src="/images/Image2.png"
              alt="Правая Фото"
              className={"object-cover w-full h-full rounded-4xl"}
            />
          </div>
        </div>
      </div>
    </section>
  );
};
