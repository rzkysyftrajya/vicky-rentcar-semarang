"use client"

export function Testimonials() {
  const images = [
    '/testimoni/testi-1.webp',
    '/testimoni/testi-2.webp',
    '/testimoni/testi-3.webp',
    '/testimoni/testi-4.webp',
    '/testimoni/testi-5.webp',
    '/testimoni/testi-6.webp',
    '/testimoni/testi-7.webp',
    '/testimoni/testi-8.webp',
    '/testimoni/testi-9.webp',
    '/testimoni/testi-10.webp',
    '/testimoni/testi-11.webp',
    '/testimoni/testi-12.webp',
    '/testimoni/testi-13.webp',
    '/testimoni/testi-14.webp',
    '/testimoni/testi-15.webp',
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">
            Beberapa testimoni kita dari Makassar
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Testimoni asli pelanggan rental mobil PT VICKY RentCar Makassar
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {images.map((src, index) => (
            <div key={index} className="group">
              <div className="relative overflow-hidden rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 group-hover:scale-105 h-64 bg-gradient-to-br from-lime-50 to-emerald-50">
                <img
                  src={src}
                  alt="Testimoni Pelanggan"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}