import Logo from "@/components/logo";
import { Facebook, Instagram } from "lucide-react";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-white py-12 border-t">
      <div>
        <div className="flex flex-col lg:flex-row justify-between gap-8">
          {/* Logo and About */}
          <Logo />

          {/* Middle section with description */}
          <div className="md:max-w-md lg:max-w-lg">
            <p className="text-sm leading-relaxed">
              Khalifa Group propose des solutions d'éclairage complètes et clés
              en main pour les villas privées, alliant esthétique et innovation.
            </p>
            <div className="mt-4 space-y-1">
              <p className="text-sm">
                <Link
                  href="mailto:info@khalifagroup.com"
                  className="hover:underline"
                >
                  info@khalifagroup.com
                </Link>
              </p>
              <p className="text-sm font-medium">
                <Link href="tel:+212661907635" className="hover:underline">
                  +212661907635
                </Link>
              </p>
            </div>
          </div>

          {/* Right section with address and social icons */}
          <div className="flex flex-col items-end">
            <div className="flex gap-4 mb-4">
              <Link href="https://facebook.com" className="text-black">
                <Facebook size={24} />
              </Link>
              <Link href="https://instagram.com" className="text-black">
                <Instagram size={24} />
              </Link>
            </div>
            <div className="text-sm text-right">
              <p>Sidi Ghanm Quartier</p>
              <p>industriel, Marrakech 40000</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
