import CountUp from "./CountUp"

export function Hero() {
  return (
    <section className="relative py-12 sm:py-16 md:py-24 px-4 sm:px-6">
      <div className="absolute inset-0 bg-white/70 backdrop-blur-[1px]" />
      <div className="relative max-w-7xl mx-auto text-center">
        <div className="mb-4 sm:mb-6">
          <span className="inline-block bg-gradient-to-r from-[#ffde59] to-[#ffc107] text-[#021348] px-3 sm:px-4 py-2 rounded-full text-xs sm:text-sm font-semibold mb-3 sm:mb-4 shadow-md">
            ✓ DAPLASH Delivery – Naga
          </span>
        </div>
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-[#021348] mb-4 sm:mb-6 leading-tight">
          Your Reliable Delivery Partner in Naga City
        </h2>
        <p className="text-base sm:text-lg md:text-xl text-[#021348]/80 max-w-3xl mx-auto mb-6 sm:mb-8 leading-relaxed">
          From shopping at your favorite stores to sending packages across the city, we've got you covered. Fast,
          reliable, and affordable delivery services tailored to your needs. Experience the difference with DAPLASH.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 lg:gap-10 justify-center">
          <div className="text-center">
            <div className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#021348] mb-1">
              <CountUp from={0} to={500} duration={1.2} separator="," className="align-middle" />+
            </div>
            <p className="text-sm sm:text-base text-[#021348]/80 font-medium">Happy Customers</p>
          </div>
          <div className="text-center">
            <div className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#021348] mb-1">
              <CountUp from={0} to={1000} duration={1.2} separator="," className="align-middle" />+
            </div>
            <p className="text-sm sm:text-base text-[#021348]/80 font-medium">Deliveries Completed</p>
          </div>
          <div className="text-center">
            <div className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#021348] mb-1">24/7</div>
            <p className="text-sm sm:text-base text-[#021348]/80 font-medium">Available Service</p>
          </div>
        </div>
      </div>
    </section>
  )
}
