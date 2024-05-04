import Image from "next/image";
import Link from "next/link";
import WhatsappIcon from "../../../public/WhatsappIcon.png";
export default function Whatsapp() {
  return (
    <div className="fixed bottom-4 md:right-7 right-2 z-50">
      <Link href="https://wa.me/+923009398857" target="blank">
        <Image
          className="relative"
          alt="whatsapp"
          width={50}
          height={50}
          src={WhatsappIcon}
        />
      </Link>
    </div>
  );
}
