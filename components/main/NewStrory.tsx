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

const NewStrory = () => {
    //console.log(stories);
    return (
        <div className='p-4 flex flex-col justify-center  items-center '>
            <div className=" text-4xl font-bold mb-5 w-full"> ⚡New Story <hr className='mt-3' /></div>
            <Carousel className="w-full max-w-7xl mx-auto  ">
                <CarouselContent className="gap-1">
                    {stories.map((item) => (
                        <CarouselItem
                            key={item.id}
                            className="md:basis-1/2 lg:basis-1/3 xl:basis-1/4  p-2"
                        >
                            <CardContent>
                                <Link href={`/story/${item.level}/${item.id}`}>
                                    <div className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-shadow duration-300 p-4">

                                        {/* Image */}
                                        <div className="overflow-hidden rounded-xl mb-4">
                                            <img
                                                src={item.img}
                                                alt={item.name}
                                                className="w-full  object-cover rounded-xl transition-transform duration-500 hover:scale-105 "
                                            />
                                        </div>

                                        {/* Text */}
                                        <div className="space-y-1">
                                            <p className="text-lg font-bold text-orange-500 uppercase tracking-wide">
                                                {item.name}
                                            </p>

                                            <p className="text-sm text-gray-600">{item.category}</p>

                                            <span className="inline-block mt-1 px-3 py-1 bg-orange-50 text-orange-400 
                                    text-xs font-semibold rounded-full">
                                                Level: {item.level}
                                            </span>
                                        </div>

                                    </div>
                                </Link>
                            </CardContent>
                        </CarouselItem>
                    ))}
                </CarouselContent>

                <CarouselPrevious className="border-none shadow-md hover:shadow-lg bg-white/80 backdrop-blur" />
                <CarouselNext className="border-none shadow-md hover:shadow-lg bg-white/80 backdrop-blur" />
            </Carousel>
        </div>

    )
};

export default NewStrory;
