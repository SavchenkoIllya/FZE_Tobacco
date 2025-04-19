import { H1, InfoCard, PrimaryButton } from "@/app/ui/components";
import { CatalogueSection } from "@/app/ui/components/CatalogueSection";

export default function Home() {
    return (
        <main className={"relative overflow-hidden"}>
          {/*Left gradient*/}
          <div className="-z-1 absolute w-[500px] h-[1800px] bg-gradient-to-br from-accent to-black opacity-30 rounded-full blur-3xl -top-20 -left-90  animate-pulse [animation-duration:5s]"/>
          {/*Top gradient*/}
          <div className="-z-1 absolute w-[1250px] h-[500px] bg-gradient-to-br from-accent to-black opacity-30 rounded-full blur-3xl -top-70 -right-150 animate-pulse [animation-duration:5s]"/>

          <header className={"fixed top-0 w-[100dvw]"}>
            <div className={"flex items-center justify-between mx-8 my-4"}>
              <div>
                <img src="/logo.svg" alt="Tobacco & cigarettes trading logo" />
              </div>

              <div>
                <nav className={"text-white uppercase"}>
                  <ul className={"flex gap-4"}>
                    <li>
                      About us
                    </li>
                    <li>
                      Brands
                    </li>
                    <li>
                      Contacts
                    </li>
                  </ul>
                </nav>
              </div>

              <div className={"flex gap-4"}>
                <a>
                  <img src="/icons/whatsapp.svg" alt="Whatsapp icon"/>
                </a>
                <a>
                  <img src="/icons/mail.svg" alt="Email icon"/>
                </a>
                <a>
                  <img src="/icons/phone.svg" alt="Phone icon"/>
                </a>
                <a>
                  <img src="/icons/chat.svg" alt="Chat icon"/>
                </a>
              </div>


            </div>
          </header>


          <section className="w-[100dvw] h-[80dvh] grid grid-cols-12 place-items-center bg-[url(/images/earth.png)] bg-center bg-contain bg-no-repeat">
            <div className="grid col-start-2 col-span-3 gap-10 m-4">
              <div className="max-w-[450px]">
                <h1 className={"h1"}>Certificated in Europe, Asia & Africa</h1>
              </div>
              <PrimaryButton text="Welcome to our business" />
            </div>
          </section>


          <section className="grid grid-cols-12 gap-4 place-items-center px-4">
            <div className="col-start-4 col-span-6 flex justify-center">
              <h2 className={"h1"}>About us</h2>
            </div>

            {/*TODO: make reusable*/}
            <div className="col-start-3 col-span-8 flex justify-center">
              <p className="text-white text-justify max-w-3xl">
                “VK Tobacco” procures, manufactures and distributes its own brands namely TITO, BACIO, PASSAGE and PULL, UT, URTA, BRUT. Our manufacturing facility is located in UAE with state of the art machinery. We are ISO certificated and produce world class products that cater to various consumers with different style and taste preferences. Authenticity is our core philosophy and we believe in developing genuine products which are passed on to generations to continue our formidable legacy.
              </p>
            </div>

            <div className="col-start-3 col-span-8 flex justify-center mt-20">

              <InfoCard/>
              <InfoCard/>
              <InfoCard/>

            </div>


          </section>

          <CatalogueSection/>

        </main>
    );
}