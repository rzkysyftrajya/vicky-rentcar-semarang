"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Star } from "lucide-react"
import { useState, useEffect } from "react"

export default function TestimoniPage() {
  // Tambahkan state untuk carousel
  const [currentTestimonial, setCurrentTestimonial] = useState(0)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)

    // Auto carousel untuk featured testimonials
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % 5) // 5 testimonial featured
    }, 4000)

    return () => clearInterval(interval)
  }, [])

  // Generate testimonial data
  const testimonials = Array.from({ length: 20 }, (_, i) => ({
    id: i + 1,
    rating: Math.floor(Math.random() * 2) + 4, // 4 or 5 stars
    image: `/testimoni/${(i % 20) + 1}.webp`,
    review: [
      "Pelayanan sangat memuaskan, mobil bersih dan terawat dengan baik!",
      "Driver sangat ramah dan mengenal rute dengan baik. Recommended!",
      "Harga terjangkau dengan kualitas pelayanan yang excellent.",
      "Sudah beberapa kali sewa di PT VRN, selalu puas dengan pelayanannya.",
      "Mobil kondisi prima, driver profesional. Pasti akan sewa lagi!",
      "Pelayanan 24/7 sangat membantu untuk perjalanan mendadak.",
      "Armada lengkap dan modern, cocok untuk perjalanan keluarga.",
      "Proses booking mudah via WhatsApp, pelayanan cepat dan responsif.",
      "Perjalanan ke Pulau Samalona sangat menyenangkan dengan driver yang berpengalaman.",
      "Harga transparan tanpa biaya tersembunyi. Sangat recommended!",
    ][Math.floor(Math.random() * 10)],
  }))

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star key={i} className={`w-4 h-4 ${i < rating ? "fill-yellow-400 text-yellow-400" : "text-gray-600"}`} />
    ))
  }

  return (
    <div className="min-h-screen pt-20 pb-16">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="orbitron text-4xl md:text-6xl font-bold mb-6 gradient-text">Testimoni Pelanggan</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Kepuasan pelanggan adalah prioritas utama kami. Berikut adalah testimoni dari pelanggan yang telah
            mempercayai layanan PT VRN RentCar
          </p>
        </div>

        {/* Trust Statistics */}
        <div className="glass-dark rounded-2xl p-8 mb-16">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            {[
              { number: "4.9/5", label: "Rating Rata-rata", icon: "⭐" },
              { number: "1000+", label: "Pelanggan Puas", icon: "😊" },
              { number: "95%", label: "Repeat Customer", icon: "🔄" },
              { number: "24/7", label: "Customer Support", icon: "📞" },
            ].map((stat, index) => (
              <div key={index}>
                <div className="text-4xl mb-4">{stat.icon}</div>
                <div className="orbitron text-3xl font-bold text-emerald-600 mb-2">{stat.number}</div>
                <div className="text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {testimonials.map((testimonial, index) => (
            <Card
              key={testimonial.id}
              className={`glass-effect border-emerald-500/30 hover:border-emerald-400/50 transition-all car-card transform ${
                isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
              }`}
              style={{
                transitionDelay: `${index * 75}ms`,
                transitionDuration: "700ms",
              }}
            >
              <CardContent className="p-6 text-center">
                {/* Customer Image */}
                <div className="relative mb-4">
                  <img
                    src={testimonial.image || "/placeholder.svg"}
                    alt={`Pelanggan ${testimonial.id}`}
                    className="w-16 h-16 rounded-full mx-auto object-cover border-2 border-emerald-500/50"
                  />
                </div>

                {/* Rating Stars */}
                <div className="flex justify-center space-x-1 mb-4">{renderStars(testimonial.rating)}</div>

                {/* Review Text */}
                <p className="text-gray-600 text-sm leading-relaxed mb-4">"{testimonial.review}"</p>

                {/* Customer Label */}
                <div className="text-xs text-emerald-600 font-semibold">Pelanggan PT VRN RentCar</div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Call to Action */}
        <div className="mt-16 glass-dark rounded-2xl p-8 text-center">
          <h2 className="orbitron text-3xl font-bold mb-4 gradient-text">Bergabunglah dengan Ribuan Pelanggan Puas</h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Rasakan sendiri pengalaman rental mobil terbaik di Makassar. Hubungi kami sekarang dan jadilah bagian dari
            keluarga besar PT VRN RentCar!
          </p>

          {/* Review Categories */}
          <div className="grid md:grid-cols-3 gap-6 mt-12">
            {[
              {
                title: "Kualitas Armada",
                description: "Mobil selalu dalam kondisi prima dan terawat",
                rating: "4.9/5",
              },
              {
                title: "Pelayanan Driver",
                description: "Driver profesional, ramah, dan berpengalaman",
                rating: "4.8/5",
              },
              {
                title: "Customer Service",
                description: "Respon cepat dan pelayanan 24/7",
                rating: "4.9/5",
              },
            ].map((category, index) => (
              <div key={index} className="glass-effect rounded-lg p-6 border border-emerald-500/30">
                <h3 className="font-bold text-emerald-600 mb-2">{category.title}</h3>
                <p className="text-gray-600 text-sm mb-3">{category.description}</p>
                <div className="flex items-center justify-center space-x-2">
                  <div className="flex space-x-1">{renderStars(5)}</div>
                  <span className="text-yellow-400 font-semibold">{category.rating}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
