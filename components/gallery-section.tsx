"use client"

const images = [
  "/gallery/1.jpeg",
  "/gallery/2.jpg",
  "/gallery/3.jpg",
  "/gallery/4.jpg",
  "/gallery/5.jpeg",
  "/gallery/6.jpeg",
  "/gallery/7.jpg",
  "/gallery/8.jpg",
  "/gallery/9.jpg",
  "/gallery/10.jpg",
  "/gallery/11.jpg",
  "/gallery/12.jpg",
  "/gallery/13.jpeg",
  "/gallery/14.jpg",
  "/gallery/15.jpg",
  "/gallery/16.jpg",
  "/gallery/17.jpg",
  "/gallery/18.jpg",
  "/gallery/19.jpg",
  "/gallery/20.jpg",
  "/gallery/21.jpg",
]

function getAlternateExtension(src: string): string {
  if (src.endsWith('.jpg')) return src.replace('.jpg', '.jpeg')
  if (src.endsWith('.jpeg')) return src.replace('.jpeg', '.jpg')
  return src
}

export function GallerySection() {
  return (
    <section id="gallery" className="py-16 lg:py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10 lg:mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-balance mb-4">Gallery</h2>
          <p className="text-lg text-muted-foreground text-pretty max-w-2xl mx-auto">
            A glimpse into our facilities, services and patient-first environment.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
          {images.map((src, index) => (
            <div key={index} className="group relative overflow-hidden rounded-xl shadow-sm bg-card">
              <img
                src={encodeURI(src)}
                alt="Hospital gallery image"
                className="h-56 sm:h-60 md:h-64 w-full object-cover transition-transform duration-500 group-hover:scale-105"
                onError={(e) => {
                  const el = e.currentTarget as HTMLImageElement
                  if (el.dataset.triedAlt === '1') return
                  el.dataset.triedAlt = '1'
                  el.src = encodeURI(getAlternateExtension(src))
                }}
              />
              <div className="pointer-events-none absolute inset-0 ring-1 ring-border/60" />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}


