import { getMediaUrl } from "@/app/actions";
import { UploadItem } from "@/app/types";

export const FooterDocuments = ({
  uploads,
  title,
}: {
  uploads?: UploadItem[] | null;
  title?: string;
}) => {
  if (!uploads || uploads.length === 0) return null;

  return (
    <div
      className={
        "flex max-md:flex-col max-md:gap-4 justify-center md:divide-x-2 divide-accent"
      }
    >
      <h5 className={"md:hidden text-primary font-bold"}>{title}</h5>
      {uploads.map(
        (upload) =>
          upload.document?.url && (
            <div key={upload.id} className={"md:px-8"}>
              <a
                href={getMediaUrl(upload.document.url)}
                className={"text-primary flex md:justify-center gap-2"}
                target="_blank"
                rel="noopener noreferrer"
              >
                {upload?.icon?.url && (
                  <img
                    alt={upload.title}
                    src={getMediaUrl(upload.icon.url)}
                    className={"invert"}
                  />
                )}
                <span>{upload.title}</span>
              </a>
            </div>
          ),
      )}
    </div>
  );
};
