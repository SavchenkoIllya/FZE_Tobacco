export const getMediaUrl = (url: string) => {
  return `${process.env.NEXT_PUBLIC_STRAPI_API_URL}:${process.env.NEXT_PUBLIC_STRAPI_PORT}${url}`;
};
