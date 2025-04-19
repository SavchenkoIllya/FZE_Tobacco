import {
  CatalogueSection,
  ContactsSection,
  Header,
  Hero,
  InfoCard,
} from "@/app/ui";

export default function Home() {
  return (
    <main className={"relative overflow-hidden"}>
      {/*Left gradient*/}
      <div className="-z-1 absolute w-[500px] h-[1800px] bg-gradient-to-br from-accent to-black opacity-30 rounded-full blur-3xl -top-20 -left-90  animate-pulse [animation-duration:5s]" />
      {/*Top gradient*/}
      <div className="-z-1 absolute w-[1250px] h-[500px] bg-gradient-to-br from-accent to-black opacity-30 rounded-full blur-3xl -top-70 -right-150 animate-pulse [animation-duration:5s]" />

      <Header />

      <Hero />

      <section className="grid grid-cols-12 gap-4 place-items-center px-4">
        <div className="col-start-4 col-span-6 flex justify-center">
          <h2 className={"h1"}>About us</h2>
        </div>

        {/*TODO: make reusable*/}
        <div className="col-start-3 col-span-8 flex justify-center">
          <p className="text-white text-justify max-w-3xl">
            “VK Tobacco” procures, manufactures and distributes its own brands
            namely TITO, BACIO, PASSAGE and PULL, UT, URTA, BRUT. Our
            manufacturing facility is located in UAE with state of the art
            machinery. We are ISO certificated and produce world class products
            that cater to various consumers with different style and taste
            preferences. Authenticity is our core philosophy and we believe in
            developing genuine products which are passed on to generations to
            continue our formidable legacy.
          </p>
        </div>

        <div className="col-start-3 col-span-8 flex justify-center mt-20">
          <InfoCard />
          <InfoCard />
          <InfoCard />
        </div>
      </section>

      <CatalogueSection />

      {/* About factories section */}
      <section className="bg-white w-full h-screen grid grid-cols-3 items-center">
        <div>
          <img
            src="/images/Image1.png"
            alt="Левая Фото"
            className={"object-cover w-full h-full rounded-4xl"}
          />
        </div>

        <div className="flex flex-col items-center justify-center text-center p-8">
          <h1 className="h1 !text-black">Заголовок</h1>
          <p className="text-lg mb-6">
            Это текст описания или подзаголовок. Можно добавить сюда больше
            деталей.
          </p>
          <button className={"button !bg-black !text-white"}>Click me</button>
        </div>

        <div>
          <img
            src="/images/Image2.png"
            alt="Правая Фото"
            className={"object-cover w-full h-full rounded-4xl"}
          />
        </div>
      </section>

      <ContactsSection />
    </main>
  );
}
