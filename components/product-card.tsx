import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ShoppingCart } from "lucide-react"

interface ProductCardProps {
  name: string
  price: number
  image: string
}

export default function ProductCard({ name, price, image }: ProductCardProps) {
  return (
    <div className="group">
      <div className="relative aspect-square overflow-hidden rounded-lg bg-zinc-900">
        <Image
          src={image || "/placeholder.svg"}
          alt={name}
          fill
          className="object-cover object-center transition-transform duration-300 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
          <Button className="bg-red-600 hover:bg-red-700">
            <ShoppingCart className="h-5 w-5 mr-2" />
            Ajouter au panier
          </Button>
        </div>
      </div>
      <div className="mt-4">
        <h3 className="text-lg font-medium">
          <Link href="#" className="hover:text-red-500">
            {name}
          </Link>
        </h3>
        <p className="mt-1 text-red-500 font-bold">{price.toFixed(2)} €</p>
      </div>
    </div>
  )
}

