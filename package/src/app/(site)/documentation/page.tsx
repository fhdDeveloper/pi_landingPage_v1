import { Documentation } from "@/components/Documentation/Documentation";
import { Metadata } from "next";
export const metadata: Metadata = {
  title: "Featurs | pi",
};

export default function Page() {
  return (
    <>
      <Documentation />
    </>
  );
}
