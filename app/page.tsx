import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { Services } from "@/components/services"
import { FAQ } from "@/components/faq"
import { NeedHelp } from "@/components/need-help"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main
      className="min-h-screen bg-white bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: "url('/images/bg-photo.png')" }}
    >
      <Header />
      <Hero />
      <Services />
      <FAQ />
      <NeedHelp />
      <Footer />
    </main>
  )
}
