"use client"

import { useState, useEffect } from "react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { X, ZoomIn } from "lucide-react"

export default function GaleriPage() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null)
  const [selectedCategory, setSelectedCategory] = useState("all")
  // Tambahkan state untuk animasi
  const [isVisible, setIsVisible] = useState(false)
  const [imageLoaded, setImageLoaded] = useState<{ [key: string]: boolean }>({})

  useEffect(() => {
    setIsVisible(true)
  }, [])

  const categories = [
    { id: "all", name: "Semua Foto" },
    { id: "armada", name: "Armada" },
    { id: "pelanggan", name: "Pelanggan" },
    { id: "wisata", name: "Perjalanan Wisata" },
    { id: "behind", name: "Behind the Scenes" },
  ]

  // Generate gallery data
  const galleryData = [
    // Armada photos
    ...Array.from({ length: 12 }, (_, i) => ({
      id: `armada-${i + 1}`,
      category: "armada",
      title: `Armada Premium ${i + 1}`,
      description: "Kendaraan berkualitas tinggi dengan perawatan terbaik",
    })),
    // Customer photos
    ...Array.from({ length: 12 }, (_, i) => ({
      id: `pelanggan-${i + 1}`,
      category: "pelanggan",
      title: `Pelanggan Puas ${i + 1}`,
      description: "Testimoni kepuasan pelanggan PT VRN RentCar",
    })),
    // Travel photos
    ...Array.from({ length: 12 }, (_, i) => ({
      id: `wisata-${i + 1}`,
      category: "wisata",
      title: `Perjalanan Wisata ${i + 1}`,
      description: "Destinasi wisata indah di Sulawesi Selatan",
    })),
    // Behind the scenes
    ...Array.from({ length: 9 }, (_, i) => ({
      id: `behind-${i + 1}`,
      category: "behind",
      title: `Behind the Scenes ${i + 1}`,
      description: "Proses pelayanan dan perawatan kendaraan",
    })),
  ]

  const filteredGallery = galleryData.filter((item) => selectedCategory === "all" || item.category === selectedCategory)

  return (
    <div className="min-h-screen pt-20 pb-16">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="orbitron text-4xl md:text-6xl font-bold mb-6 gradient-text">Galeri PT VRN RentCar</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Dokumentasi perjalanan, armada premium, dan momen berharga bersama pelanggan kami
          </p>
        </div>

        {/* Category Filter */}
        <div className="glass-dark rounded-2xl p-6 mb-12">
          <h3 className="font-semibold mb-4 text-emerald-600 text-center">Filter Kategori</h3>
          <div className="flex flex-wrap justify-center gap-3">
            {categories.map((category) => (
              <Button
                key={category.id}
                variant={selectedCategory === category.id ? "default" : "outline"}
                size="sm"
                onClick={() => setSelectedCategory(category.id)}
                className={
                  selectedCategory === category.id
                    ? "bg-emerald-500 hover:bg-emerald-600"
                    : "border-emerald-500/50 text-emerald-600 hover:bg-emerald-500/20"
                }
              >
                {category.name}
              </Button>
            ))}
          </div>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredGallery.map((item, index) => (
            <Card
              key={item.id}
              className={`glass-effect border-emerald-500/30 hover:border-emerald-400/50 transition-all overflow-hidden group cursor-pointer car-card transform ${
                isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
              }`}
              style={{
                transitionDelay: `${index * 50}ms`,
                transitionDuration: "600ms",
              }}
              onClick={() => setSelectedImage(`/placeholder.svg?height=600&width=800&text=${item.title}`)}
            >
              <div className="relative">
                <img
                  src={`/placeholder.svg?height=300&width=400&text=${item.title}`}
                  alt={item.title}
                  className="w-full h-48 object-cover transition-transform group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <ZoomIn className="w-8 h-8 text-white" />
                </div>
                <Badge className="absolute top-2 left-2 bg-emerald-500/80">
                  {categories.find((cat) => cat.id === item.category)?.name}
                </Badge>
              </div>
              <div className="p-4">
                <h3 className="font-semibold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-gray-600 text-sm">{item.description}</p>
              </div>
            </Card>
          ))}
        </div>

        {/* Lightbox Modal */}
        {selectedImage && (
          <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4">
            <div className="relative max-w-4xl max-h-full">
              <Button
                variant="ghost"
                size="icon"
                className="absolute -top-12 right-0 text-white hover:bg-white/20"
                onClick={() => setSelectedImage(null)}
              >
                <X className="w-6 h-6" />
              </Button>
              <img
                src={selectedImage || "/placeholder.svg"}
                alt="Gallery Image"
                className="max-w-full max-h-[80vh] object-contain rounded-lg"
              />
            </div>
          </div>
        )}

        {/* Gallery Stats */}
        <div className="mt-16 glass-dark rounded-2xl p-8 text-center">
          <h2 className="orbitron text-3xl font-bold mb-8 gradient-text">Dokumentasi Perjalanan</h2>
          <div className="grid md:grid-cols-4 gap-6">
            {[
              { number: "500+", label: "Foto Armada", icon: "🚗" },
              { number: "1000+", label: "Momen Pelanggan", icon: "😊" },
              { number: "200+", label: "Destinasi Wisata", icon: "🏞️" },
              { number: "8+", label: "Tahun Dokumentasi", icon: "📸" },
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl mb-4">{stat.icon}</div>
                <div className="orbitron text-3xl font-bold text-emerald-600 mb-2">{stat.number}</div>
                <div className="text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
