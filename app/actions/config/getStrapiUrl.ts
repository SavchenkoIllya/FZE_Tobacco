export function getStrapiURL() {
  const baseURL = process.env.NEXT_PUBLIC_STRAPI_API_URL ?? "http://localhost";
  const port = process.env.NEXT_PUBLIC_STRAPI_PORT
    ? `:${process.env.NEXT_PUBLIC_STRAPI_PORT}`
    : "";
  return `${baseURL}${port}`;
}
