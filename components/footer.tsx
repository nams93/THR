import Link from "next/link"
import { Instagram, Facebook, Twitter } from "lucide-react"
import TheLogo from "./the-logo"

export default function Footer() {
  return (
    <footer className="bg-zinc-950 text-zinc-400">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <TheLogo className="h-10 w-auto" />
            <p className="text-sm">
              THR représente l'expression urbaine et l'authenticité. Notre marque est synonyme de qualité et de style
              distinctif.
            </p>
            <div className="flex space-x-4">
              <Link href="#" className="text-zinc-400 hover:text-red-500">
                <Instagram className="h-5 w-5" />
                <span className="sr-only">Instagram</span>
              </Link>
              <Link href="#" className="text-zinc-400 hover:text-red-500">
                <Facebook className="h-5 w-5" />
                <span className="sr-only">Facebook</span>
              </Link>
              <Link href="#" className="text-zinc-400 hover:text-red-500">
                <Twitter className="h-5 w-5" />
                <span className="sr-only">Twitter</span>
              </Link>
            </div>
          </div>

          <div>
            <h3 className="text-white font-medium mb-4">BOUTIQUE</h3>
            <ul className="space-y-2">
              <li>
                <Link href="#" className="hover:text-red-500">
                  Nouveautés
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-red-500">
                  Meilleures ventes
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-red-500">
                  T-shirts
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-red-500">
                  Sweats
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-red-500">
                  Accessoires
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-medium mb-4">INFORMATIONS</h3>
            <ul className="space-y-2">
              <li>
                <Link href="#" className="hover:text-red-500">
                  À propos
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-red-500">
                  Nous contacter
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-red-500">
                  Livraison
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-red-500">
                  Retours
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-red-500">
                  FAQ
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-medium mb-4">NEWSLETTER</h3>
            <p className="text-sm mb-4">Inscrivez-vous pour recevoir nos dernières actualités et offres exclusives.</p>
            <form className="space-y-2">
              <input
                type="email"
                placeholder="Votre email"
                className="w-full px-3 py-2 bg-zinc-800 border border-zinc-700 rounded-md focus:outline-none focus:ring-1 focus:ring-red-500"
                required
              />
              <button
                type="submit"
                className="w-full bg-red-600 hover:bg-red-700 text-white py-2 rounded-md transition-colors"
              >
                S'INSCRIRE
              </button>
            </form>
          </div>
        </div>

        <div className="border-t border-zinc-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm">&copy; {new Date().getFullYear()} THR. Tous droits réservés.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link href="#" className="text-sm hover:text-red-500">
              Conditions générales
            </Link>
            <Link href="#" className="text-sm hover:text-red-500">
              Politique de confidentialité
            </Link>
            <Link href="#" className="text-sm hover:text-red-500">
              Mentions légales
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

