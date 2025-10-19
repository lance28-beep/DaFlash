import Link from "next/link"
import { Store, ShoppingCart, Truck, Package, Bike } from "lucide-react"

const services = [
  {
    icon: Store,
    title: "Stores",
    description:
      "Shop from your favorite local stores without leaving home. We handle the shopping, you enjoy the convenience.",
    href: "/stores",
    color: "text-[#ffde59]",
  },
  {
    icon: ShoppingCart,
    title: "Papalit",
    description: "Need something specific? Tell us what you need and we'll find it for you at the best prices.",
    href: "/papalit",
    color: "text-[#0ea4f9]",
  },
  {
    icon: Truck,
    title: "Pick Up/Deliver",
    description: "Send or receive packages anywhere in Naga City with real-time tracking and secure handling.",
    href: "/pickup-deliver",
    color: "text-[#021348]",
  },
  {
    icon: Package,
    title: "Custom Orders",
    description: "Have unique needs? We specialize in custom deliveries and special requests for any occasion.",
    href: "/custom-orders",
    color: "text-[#ffde59]",
  },
  {
    icon: Bike,
    title: "Angkas",
    description: "Fast motorcycle delivery for urgent shipments. Get your items delivered in minutes, not hours.",
    href: "/angkas",
    color: "text-[#0ea4f9]",
  },
]

export function Services() {
  return (
    <section className="py-20 md:py-28 px-4 bg-gradient-to-b from-white to-[#ffde59]/5">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-[#021348] mb-4">Our Services</h2>
          <p className="text-lg text-[#021348]/80 max-w-2xl mx-auto">
            Choose the service that fits your needs and get started in minutes
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
          {services.map((service) => {
            const Icon = service.icon
            return (
              <Link key={service.title} href={service.href}>
                <div className="bg-white border border-gray-200 rounded-xl p-8 text-center hover:shadow-xl hover:border-[#0ea4f9]/30 hover:shadow-[#0ea4f9]/10 transition-all cursor-pointer h-full group">
                  <div className="flex justify-center mb-4">
                    <div className="w-20 h-20 bg-[#ffde59]/10 rounded-lg flex items-center justify-center group-hover:bg-[#ffde59]/20 transition-colors">
                      <Icon size={40} className={service.color} />
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-[#021348] mb-2">{service.title}</h3>
                  <p className="text-[#021348]/70 text-sm leading-relaxed">{service.description}</p>
                </div>
              </Link>
            )
          })}
        </div>
      </div>
    </section>
  )
}
