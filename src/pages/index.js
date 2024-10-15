import Weather from "@/components/Wheater";
import Wheater from "@/components/Wheater";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <div className="flex justify-center items-center">
        <Weather />
      </div>
    </>
  );
}
