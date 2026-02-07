
import Link from 'next/link';
import { stories } from './dataStory'
import { CardContent } from "@/components/ui/card"
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"
import { Story } from './dataStory';



const NewStrory = ({ data }: { data: Story[] }) => {
    console.log("data", data);

    return (
        <div className='p-4 flex flex-col justify-center  items-center '>
            <div className="w-full max-w-7xl mx-auto mb-4 md:mb-6 px-2 md:px-0">
                <div className="flex items-center gap-3">
                    <h2 className="text-2xl text-ellipsis sm:text-3xl md:text-4xl font-extrabold bg-clip-text">
                        ⚡ New Story
                    </h2>
                </div>

                <div className="mt-2 md:mt-3 h-[2px] w-full bg-gradient-to-r 
    from-purple-600/40 via-pink-500/40 to-orange-400/40 rounded-full"></div>
            </div>
            <Carousel className="w-full max-w-7xl mx-auto px-2 md:px-0 ">
                <CarouselContent className="-ml-2 md:-ml-4 p-2">
                    {stories.map((item) => (
                        <CarouselItem
                            key={item.id}
                            className="
    pl-2 md:pl-4
    basis-full
    sm:basis-1/2
    lg:basis-1/3
    xl:basis-1/4
  "
                        >
                            <CardContent className="p-0">
                                <Link href={`/story/${item.level}/${item.id}`}>
                                    <div className="group relative rounded-2xl overflow-hidden 
        backdrop-blur-xl bg-white/60 border border-white/30 
        shadow-md md:shadow-lg hover:shadow-2xl transition-all duration-500">

                                        {/* Gradient line */}
                                        <div className="h-[3px] w-full bg-gradient-to-r from-purple-600 via-pink-500 to-orange-400"></div>

                                        {/* Image */}
                                        <div className="
          relative overflow-hidden
          h-40 sm:h-44 md:h-52
        ">
                                            <img
                                                src={item.img}
                                                alt={item.name}
                                                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                            />

                                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent"></div>

                                            <span className="absolute top-2 right-2 md:top-3 md:right-3 
            px-2 md:px-3 py-1 text-[10px] md:text-xs font-semibold
            rounded-full bg-white/80 backdrop-blur text-orange-500 shadow">
                                                Level {item.level}
                                            </span>
                                        </div>

                                        {/* Text */}
                                        <div className="p-3 md:p-4 space-y-1">
                                            <p className="text-base md:text-lg font-extrabold tracking-wide 
            bg-gradient-to-r from-purple-700 via-pink-600 to-orange-500 
            bg-clip-text text-transparent line-clamp-1">
                                                {item.name}
                                            </p>

                                            <p className="text-xs md:text-sm text-gray-600 line-clamp-1">
                                                {item.category}
                                            </p>
                                        </div>

                                        {/* Glow */}
                                        <div className="absolute -inset-1 opacity-0 group-hover:opacity-30 
            blur-2xl bg-gradient-to-r from-purple-500 via-pink-500 to-orange-400 
            transition duration-500"></div>
                                    </div>
                                </Link>
                            </CardContent>
                        </CarouselItem>
                    ))}
                </CarouselContent>

                <CarouselPrevious className="hidden md:flex border-none shadow-md hover:shadow-lg bg-white/80 backdrop-blur" />
                <CarouselNext className="hidden md:flex border-none shadow-md hover:shadow-lg bg-white/80 backdrop-blur" />

            </Carousel>
        </div>

    )
};

export default NewStrory;
