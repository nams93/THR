import Image from "next/image"
import { Button } from "@/components/ui/button"
import Navbar from "@/components/navbar"
import ProductCard from "@/components/product-card"
import Footer from "@/components/footer"

export default function Home() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />

      {/* Hero Section */}
      <section className="relative h-screen">
        <Image
          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/thr1.jpg-r3DfJXId4RLYjsf8T2Uq3EL5R0ZXKY.jpeg"
          alt="THR Collection"
          fill
          className="object-cover object-center brightness-75"
          priority
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-4 bg-black/40">
          <h1 className="text-5xl md:text-7xl font-bold mb-4">THR</h1>
          <p className="text-xl md:text-2xl max-w-2xl mb-8">
            La nouvelle collection urbaine qui définit le style contemporain
          </p>
          <Button className="bg-red-600 hover:bg-red-700 text-white px-8 py-6 text-lg">DÉCOUVRIR</Button>
        </div>
      </section>

      {/* Featured Collection */}
      <section className="py-16 px-4 md:px-8 max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">COLLECTION EXCLUSIVE</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <ProductCard
            name="T-Shirt THR Noir"
            price={49.99}
            image="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/thr1.jpg-r3DfJXId4RLYjsf8T2Uq3EL5R0ZXKY.jpeg"
          />
          <ProductCard
            name="T-Shirt THR Blanc"
            price={49.99}
            image="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/thr3.jpg-ocR3CBRCZbusNPPQqny6EhX9d9D5Fn.jpeg"
          />
          <ProductCard
            name="Sweat THR Noir"
            price={89.99}
            image="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/thr2.jpg-XbuBHWK1lK1OwAlcdkjqyePxzBcJbw.jpeg"
          />
        </div>

        <div className="mt-12 text-center">
          <Button className="bg-white text-black hover:bg-gray-200 px-8 py-6 text-lg">VOIR TOUTE LA COLLECTION</Button>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 px-4 md:px-8 bg-zinc-900">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">NOTRE HISTOIRE</h2>
            <p className="text-lg mb-6">
              THR est né de la passion pour le style urbain et l'expression personnelle. Notre marque représente
              l'authenticité et l'audace, avec des designs qui se démarquent par leur simplicité et leur impact visuel.
            </p>
            <p className="text-lg">
              Chaque pièce est conçue avec soin, en utilisant des matériaux de qualité supérieure pour garantir confort
              et durabilité.
            </p>
          </div>
          <div className="relative h-[500px]">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/thr3.jpg-ocR3CBRCZbusNPPQqny6EhX9d9D5Fn.jpeg"
              alt="THR Story"
              fill
              className="object-cover rounded-lg"
            />
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}

