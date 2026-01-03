import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us | ame of thewebsite ",
  description: "alot of key words ",

  keywords: "about ",
};

export default function About() {
  console.log("Hey is this in the serve or the client ");
  return <div>Aout page </div>;
}
