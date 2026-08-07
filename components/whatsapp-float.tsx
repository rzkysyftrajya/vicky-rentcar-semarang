"use client"

import { MessageCircle } from "lucide-react"
import { Button } from "@/components/ui/button"

declare global {
  interface Window {
    gtag?: (...args: any[]) => void
  }
}

export function WhatsAppFloat() {
  const handleWhatsAppClick = () => {
    const message =
      "Halo VRN Makassar! Saya tertarik dengan layanan rental mobil Anda. Mohon informasi lebih lanjut."

    const whatsappUrl = `https://wa.me/6282363389893?text=${encodeURIComponent(message)}`

    // Google Ads Conversion Tracking
    if (typeof window !== "undefined" && typeof window.gtag === "function") {
      window.gtag("event", "conversion", {
        send_to: "AW-18095006448/ZE7MCKfrkp0cEPDFr7RD",
        event_callback: () => {
          window.open(whatsappUrl, "_blank")
        },
      })

      // Fallback jika callback tidak terpanggil
      setTimeout(() => {
        window.open(whatsappUrl, "_blank")
      }, 500)
    } else {
      window.open(whatsappUrl, "_blank")
    }
  }

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <Button
        onClick={handleWhatsAppClick}
        className="bg-green-600 hover:bg-green-700 text-white rounded-full w-16 h-16 shadow-2xl pulse-glow floating-animation"
        size="icon"
      >
        <MessageCircle className="w-8 h-8" />
      </Button>

      <div className="absolute -top-12 right-0 bg-green-600 text-white px-3 py-1 rounded-lg text-sm whitespace-nowrap opacity-90">
        Chat WhatsApp
      </div>
    </div>
  )
}
