import CardHero from "@/components/content/card/Card-Hero";
import CarouselHead from "@/components/content/carousel/Carousel-Head";
import OurServices from "@/components/content/sections/Our-Services";

export default function Home() {
  return (
    <div>
      <CarouselHead />

      {/* Card Hero Smart-thing */}
      <div className="w-full my-10 flex justify-center">
        <CardHero img="https://via.placeholder.com/600/24f355" text="Smart home" />
        <CardHero img="https://via.placeholder.com/600/d32776" text="Smart building" />
        <CardHero img="https://via.placeholder.com/600/f66b97" text="Smart hotel" />
        <CardHero img="https://via.placeholder.com/600/56a8c2" text="Smart marine" />
      </div>

      {/* Section Our-Services */}
      <OurServices />
    </div>
  );
}
