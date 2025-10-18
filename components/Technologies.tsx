"use client"

import Slider from "react-slick"
import Image from "next/image"

const technologies = [
  { name: "JavaScript", img: "/tech/js.png" },
  { name: "TypeScript", img: "/tech/ts.png" },
  { name: "React", img: "/tech/react.png" },
  { name: "Next.js", img: "/tech/next.png" },
  { name: "Node.js", img: "/tech/node.png" },
  { name: "Express", img: "/tech/express.png" },
  { name: "Flask", img: "/tech/flask.png" },
  { name: "Laravel", img: "/tech/laravel.png" },
  { name: "Python", img: "/tech/python.png" },
  { name: "PHP", img: "/tech/php.png" },
  { name: "Kotlin", img: "/tech/kotlin.png" },
  { name: "Java", img: "/tech/java.png" },
  { name: "SQL", img: "/tech/mysql.png" },
  { name: "MongoDB", img: "/tech/mongodb.png" },
  { name: "Bootstrap", img: "/tech/bootstrap.png" },
  { name: "TailwindCSS", img: "/tech/tailwind.png" },
  { name: "Framer Motion", img: "/tech/framer.png" },
  { name: "GitHub", img: "/tech/github.png" },
  { name: "Android Studio", img: "/tech/androidstudio.png" },
  { name: "MPESA API", img: "/tech/mpesa.png" },
]

export default function Technologies() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 2,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 1024,
        settings: { slidesToShow: 4 },
      },
      {
        breakpoint: 768,
        settings: { slidesToShow: 2 },
      },
      {
        breakpoint: 480,
        settings: { slidesToShow: 1 },
      },
    ],
  }

  return (
    <section className="py-12 bg-gray-50">
      <h2 className="text-3xl font-bold text-center mb-8">Technologies I Use</h2>
      <div className="max-w-6xl mx-auto px-4">
        <Slider {...settings}>
          {technologies.map((tech, index) => (
            <div key={index} className="flex flex-col items-center">
              <Image
                src={tech.img}
                alt={tech.name}
                width={80}
                height={80}
                className="rounded-lg"
              />
              <p className="mt-2 text-sm font-medium">{tech.name}</p>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  )
}
