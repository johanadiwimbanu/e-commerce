import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from '@/components/ui/carousel';
import Autoplay from 'embla-carousel-autoplay';
import useEmblaCarousel from 'embla-carousel-react';
import { useEffect, useState } from 'react';

interface Gradient {
    from: string;
    to: string;
}

interface Campaign {
    name: string;
    image: string;
    gradient: Gradient;
    description: string;
}

interface CampaignsProps {
    campaigns: Campaign[];
}

const Campaigns = ({ campaigns }: CampaignsProps) => {
    const [currentSlide, setCurrentSlide] = useState(0);

    // Inisialisasi Embla Carousel dengan loop dan autoplay
    const [emblaRef, emblaApi] = useEmblaCarousel(
        { loop: true }, // Aktifkan loop
        [Autoplay({ delay: 3000, stopOnInteraction: false })], // Autoplay tetap berjalan
    );

    // Mengupdate slide yang sedang aktif
    useEffect(() => {
        if (emblaApi) {
            emblaApi.on('select', () => {
                setCurrentSlide(emblaApi.selectedScrollSnap());
            });
        }
        console.log(currentSlide);
    }, [emblaApi]);

    return (
        <Carousel
            ref={emblaRef}
            plugins={[Autoplay({ delay: 5000, stopOnInteraction: false })]}
            opts={{ loop: true }}
            className="group relative w-full"
        >
            <CarouselContent className="h-screen">
                {campaigns.map((campaign, index) => (
                    <CarouselItem
                        key={index}
                        className={`relative inset-0 flex h-full items-center justify-between bg-gradient-to-r ${campaign.gradient.from} from-35% ${campaign.gradient.to}`}
                    >
                        <div className="flex-1 px-16 py-8">
                            <div className="max-w-2xl">
                                <h2 className="text-6xl font-bold leading-tight text-white">
                                    {campaign.name}
                                </h2>
                                <p className="mt-6 text-xl leading-relaxed text-white/80">
                                    {campaign.description}
                                </p>
                                <button className="mt-8 rounded-full bg-yellow-200 px-8 py-3 font-semibold text-black transition-colors hover:bg-yellow-300">
                                    Shop Now
                                </button>
                            </div>
                        </div>
                        <div className="h-full w-1/2 overflow-hidden">
                            <img
                                alt={campaign.name}
                                src={campaign.image}
                                className="h-full w-full object-cover transition-transform duration-300 hover:scale-105"
                            />
                        </div>
                    </CarouselItem>
                ))}
            </CarouselContent>

            <div className="absolute bottom-8 left-1/2 flex -translate-x-1/2 gap-2">
                {campaigns.map((_, index) => (
                    <button
                        key={index}
                        onClick={() => emblaApi?.scrollTo(index)} // Use optional chaining to handle null
                        className={`h-2 w-2 rounded-full transition-all ${
                            currentSlide === index
                                ? 'w-6 bg-white' // dot active is bigger and solid white
                                : 'bg-white/50 hover:bg-white/75'
                        }`}
                        aria-label={`Go to slide ${index + 1}`}
                    />
                ))}
            </div>

            <CarouselPrevious className="absolute left-4 top-1/2 h-12 w-12 -translate-y-1/2 rounded-full bg-black/50 text-white opacity-0 transition-opacity hover:bg-black/70 group-hover:opacity-100" />
            <CarouselNext className="absolute right-4 top-1/2 h-12 w-12 -translate-y-1/2 rounded-full bg-black/50 text-white opacity-0 transition-opacity hover:bg-black/70 group-hover:opacity-100" />
        </Carousel>
    );
};

export default Campaigns;
