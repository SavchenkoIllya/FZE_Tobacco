import { Button, Html } from "@react-email/components";

export function IncomingMessage({
  data,
}: Readonly<{ data: Record<string, unknown> }>) {
  return (
    <Html lang="en">
      <Button>Click me</Button>
    </Html>
  );
}

export default IncomingMessage;
