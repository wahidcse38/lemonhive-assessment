import Image from "next/image";
import { Inter } from "next/font/google";
import Confarences from "@/components/confarences/Confarences";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div className="container">
      <Confarences />
    </div>
  );
}
