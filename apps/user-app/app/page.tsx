import { PrismaClient } from "@repo/db/client";
const client = new PrismaClient()

export default function Home() {
  return (
    <div className="text-blue-400">
      hi from page
    </div>
  );
}
