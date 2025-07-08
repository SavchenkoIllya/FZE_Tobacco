export const getMediaUrl = (url: string) => {
  return process.env.NODE_ENV === "development"
    ? `${process.env.NEXT_PUBLIC_BASE_URL}:${process.env.NEXT_PUBLIC_STRAPI_PORT}${url}`
    : url;
};
