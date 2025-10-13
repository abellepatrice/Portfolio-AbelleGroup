"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { ChevronLeft, ChevronRight } from "lucide-react"

type CarouselProps = {
  images: { src: string; alt: string }[]
  interval?: number
}

export default function Carousel({ images, interval = 3000 }: CarouselProps) {
  const [current, setCurrent] = useState(0)

  // auto slide
  useEffect(() => {
    const timer = setInterval(() => {
      nextSlide()
    }, interval)
    return () => clearInterval(timer)
  }, [images.length, interval])

  const prevSlide = () => {
    setCurrent((prev) => (prev === 0 ? images.length - 1 : prev - 1))
  }

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % images.length)
  }

  return (
    <div className="relative w-full max-w-6xl mx-auto overflow-hidden">
      <div
        className="flex transition-transform ease-in-out duration-500"
        style={{
          transform: `translateX(-${current * (100 / 4)}%)`, // assumes 4 visible
          width: `${(images.length * 100) / 4}%`,
        }}
      >
        {images.map((img, i) => (
          <div
            key={i}
            className="flex-shrink-0"
            style={{ width: "25%" }} // 4 per view
          >
            <Image
              src={img.src}
              alt={img.alt}
              width={500}
              height={300}
              className="w-full h-48 object-contain"
            />
          </div>
        ))}
      </div>

      {/* Arrows */}
      <button
        onClick={prevSlide}
        className="absolute top-1/2 left-2 -translate-y-1/2 bg-black/40 hover:bg-black/70 text-white p-2 rounded-full"
      >
        <ChevronLeft size={20} />
      </button>
      <button
        onClick={nextSlide}
        className="absolute top-1/2 right-2 -translate-y-1/2 bg-black/40 hover:bg-black/70 text-white p-2 rounded-full"
      >
        <ChevronRight size={20} />
      </button>
    </div>
  )
}

// "use client"

// import { useState, useEffect } from "react"
// import Image from "next/image"
// import { ChevronLeft, ChevronRight } from "lucide-react"

// type CarouselProps = {
//   images: { src: string; alt: string }[]
//   interval?: number
// }

// export default function Carousel({ images, interval = 3000 }: CarouselProps) {
//   const [current, setCurrent] = useState(0)

//   // Auto slide
//   useEffect(() => {
//     const timer = setInterval(() => {
//       nextSlide()
//     }, interval)
//     return () => clearInterval(timer)
//   }, [images.length, interval])

//   const prevSlide = () => {
//     setCurrent((prev) => (prev === 0 ? images.length - 1 : prev - 1))
//   }

//   const nextSlide = () => {
//     setCurrent((prev) => (prev + 1) % images.length)
//   }

//   // how many images visible depending on screen size
//   const getVisibleCount = () => {
//     if (typeof window !== "undefined") {
//       if (window.innerWidth < 640) return 1 // mobile
//       if (window.innerWidth < 1024) return 2 // tablet
//       if (window.innerWidth < 1280) return 3 // laptop
//     }
//     return 4 // desktop
//   }

//   const visible = getVisibleCount()

//   return (
//     <div className="relative w-full max-w-6xl mx-auto overflow-hidden">
//       {/* Slides wrapper */}
//       <div
//         className="flex transition-transform ease-in-out duration-500"
//         style={{
//           transform: `translateX(-${(current * 100) / visible}%)`,
//           width: `${(images.length * 100) / visible}%`,
//         }}
//       >
//         {images.map((img, i) => (
//           <div
//             key={i}
//             className="w-full flex-shrink-0 p-2"
//             style={{ width: `${100 / images.length}%` }}
//           >
//             <div className="bg-white rounded-xl shadow-md p-4 flex items-center justify-center h-40">
//               <Image
//                 src={img.src}
//                 alt={img.alt}
//                 width={120}
//                 height={120}
//                 className="object-contain"
//               />
//             </div>
//           </div>
//         ))}
//       </div>

//       {/* Arrows */}
//       <button
//         onClick={prevSlide}
//         className="absolute top-1/2 left-2 -translate-y-1/2 bg-black/40 hover:bg-black/70 text-white p-2 rounded-full"
//       >
//         <ChevronLeft size={20} />
//       </button>
//       <button
//         onClick={nextSlide}
//         className="absolute top-1/2 right-2 -translate-y-1/2 bg-black/40 hover:bg-black/70 text-white p-2 rounded-full"
//       >
//         <ChevronRight size={20} />
//       </button>
//     </div>
//   )
// }

// "use client"

// import { useState, useEffect } from "react"
// import Image from "next/image"
// import { ChevronLeft, ChevronRight } from "lucide-react"

// type CarouselProps = {
//   images: { src: string; alt: string }[]
//   interval?: number
// }

// export default function Carousel({ images, interval = 3000 }: CarouselProps) {
//   const [current, setCurrent] = useState(0)

//   // Auto slide
//   useEffect(() => {
//     const timer = setInterval(() => {
//       setCurrent((prev) => (prev + 1) % images.length)
//     }, interval)
//     return () => clearInterval(timer)
//   }, [images.length, interval])

//   const prevSlide = () => {
//     setCurrent((prev) => (prev === 0 ? images.length - 1 : prev - 1))
//   }

//   const nextSlide = () => {
//     setCurrent((prev) => (prev + 1) % images.length)
//   }

//   return (
//     <div className="relative w-full max-w-4xl mx-auto overflow-hidden rounded-2xl shadow-lg">
//       {/* Images */}
//       <div
//         className="flex transition-transform ease-in-out duration-500"
//         style={{ transform: `translateX(-${current * 100}%)` }}
//       >
//         {images.map((img, i) => (
//           <div key={i} className="w-full flex-shrink-0">
//             <Image
//               src={img.src}
//               alt={img.alt}
//               width={800}
//               height={400}
//               className="w-full h-64 object-contain bg-white p-6"
//             />
//           </div>
//         ))}
//       </div>

//       {/* Arrows */}
//       <button
//         onClick={prevSlide}
//         className="absolute top-1/2 left-3 -translate-y-1/2 bg-black/40 hover:bg-black/70 text-white p-2 rounded-full"
//       >
//         <ChevronLeft size={20} />
//       </button>
//       <button
//         onClick={nextSlide}
//         className="absolute top-1/2 right-3 -translate-y-1/2 bg-black/40 hover:bg-black/70 text-white p-2 rounded-full"
//       >
//         <ChevronRight size={20} />
//       </button>

//       {/* Dots */}
//       <div className="absolute bottom-3 w-full flex justify-center gap-2">
//         {images.map((_, i) => (
//           <button
//             key={i}
//             onClick={() => setCurrent(i)}
//             className={`w-3 h-3 rounded-full ${
//               i === current ? "bg-white" : "bg-white/50"
//             }`}
//           />
//         ))}
//       </div>
//     </div>
//   )
// }
