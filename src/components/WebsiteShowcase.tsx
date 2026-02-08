export default function WebsiteShowcase() {
  return (
    <section className="w-full bg-[#1C1A23] py-20 px-4">
      <div className="max-w-5xl mx-auto text-center text-white">

        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Unlock a beautiful, professional,<br />
          and customizable podcast website
        </h2>

        {/* Subtext */}
        <p className="text-sm md:text-base text-gray-300 max-w-3xl mx-auto mb-10">
          Every Podbean podcast hosting account comes with a free podcast website. 
          This beautifully designed, mobile responsive template lets podcasters 
          showcase their podcast. Featuring cutting-edge design and robust features 
          so you can easily customize the perfect website to show off your podcast.
        </p>

        {/* Image */}
        <div className="flex justify-center">
          <img
            src="/images/phone-mockup.png"
            alt="Podcast website preview"
            className="w-[300px] md:w-[380px] rounded-xl shadow-lg"
          />
        </div>

      </div>
    </section>
  );
}
