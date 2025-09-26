import Image from "next/image";
import { Geist, Geist_Mono } from "next/font/google";


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function Home() {
  return (
    <div
      className="min-h-screen bg-blue-500 flex flex-col items-center
justify-center"
    >
      <h1 className="text-6xl font-bold text-white">Hello! </h1>{" "}
    </div>
  );
}
