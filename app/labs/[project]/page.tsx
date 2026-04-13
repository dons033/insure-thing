import { notFound } from "next/navigation";

export function generateStaticParams(): { project: string }[] {
  return [];
}

export default async function LabProjectPage({
  params,
}: {
  params: Promise<{ project: string }>;
}) {
  await params;
  notFound();
}
