export function getStrapiURL() {
  return (
    process.env.STRAPI_API_URL ??
    `http://localhost:${process.env.NEXT_PUBLIC_STRAPI_PORT}`
  );
}
