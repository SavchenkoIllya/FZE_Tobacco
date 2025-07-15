import { Contact, FooterSection } from "@/app/types";
import { BackgroundImage } from "@/app/ui";
import {
  FooterContacts,
  FooterDocuments,
} from "@/app/ui/landing/sections/Footer/components";

export const Footer = ({
  contacts,
  footerData,
}: {
  contacts?: Contact[];
  footerData?: FooterSection;
}) => {
  return (
    <section className={"container mx-auto bg-transparent my-8"}>
      <div className={"max-lg:hidden"}>
        <BackgroundImage
          imageUrl={"/images/Pattern_left.png"}
          size={{ width: "500px", height: "3600px" }}
          position={{ left: "0", bottom: "-50px" }}
        />
      </div>

      <div className={"max-lg:hidden"}>
        <BackgroundImage
          imageUrl={"/images/Pattern_right.png"}
          size={{ width: "500px", height: "3500px" }}
          position={{ bottom: "-1000px", right: "-250px" }}
        />
      </div>

      <div
        className={
          "p-4 md:mb-8 w-full container rounded-2xl bg-secondary space-y-8"
        }
      >
        <div className={"max-md:space-y-8 space-y-4"}>
          <div className={"space-y-2"}>
            <FooterContacts contacts={contacts} />
          </div>
          <div className={"space-y-2"}>
            <FooterDocuments uploads={footerData?.upload_items} />
          </div>
        </div>
        <h5 className={"h1 uppercase !text-sm md:text-center !leading-5"}>
          {footerData?.copyrights}
        </h5>
      </div>
    </section>
  );
};
