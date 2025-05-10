import { getProductFields } from "@/app/actions";

export default async function MainAdmin() {
  await getProductFields();

  return (
    <div>
      <div>123</div>
    </div>
  );
}
