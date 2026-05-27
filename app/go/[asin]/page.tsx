import { redirect } from "next/navigation";

export default async function GoPage({
  params,
}: {
  params: Promise<{ asin: string }>;
}) {
  const { asin } = await params;

  redirect(`https://www.amazon.com/dp/${asin}`);
}