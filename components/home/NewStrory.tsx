
import Link from 'next/link';
import { stories } from '../../utill/dataStory'
import { CardContent } from "@/components/ui/card"
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"
import { Story } from '../../utill/dataStory';
import { 
    textHead,
    lineBottom ,
    carousel,
    carouselContent,
    wrapCardContent,
    card,
    Gradient_line,
    img,
    bgPic,
    levelOnpic,
    textName,
    glow
} from './homeStyle';



const NewStrory = ({ data }: { data: Story[] }) => {
    //console.log("data", data);

    return (
        <div className='p-4 flex flex-col justify-center  items-center '>
            <div className="w-full max-w-7xl mx-auto mb-4 md:mb-6 px-2 md:px-0">
                <div className="flex items-center gap-3">
                    <h2 className={textHead}>
                        ⚡ New Story
                    </h2>
                </div>

                <div className={lineBottom}></div>
            </div>
            <Carousel className={carousel}>
                <CarouselContent className={carouselContent}>
                    {stories.map((item) => (
                        <CarouselItem
                            key={item.id}
                            className={wrapCardContent} >
                            <CardContent className="p-0">
                                <Link href={`/story/${item.level}/${item.id}`}>
                                    <div className={card}>

                                        {/* Gradient line */}
                                        <div className={Gradient_line}></div>

                                        {/* Image */}
                                        <div className="relative overflow-hidden h-40 sm:h-44 md:h-52">
                                            <img
                                                src={item.img}
                                                alt={item.name}
                                                className={img}
                                            />

                                            <div className={bgPic}></div>

                                            <span className={levelOnpic}>   
                                                Level {item.level}
                                            </span>
                                        </div>                              

                                        {/* Text */}
                                        <div className="p-3 md:p-4 space-y-1">
                                            <p className={textName}>
                                                {item.name}
                                            </p>

                                            <p className="text-xs md:text-sm text-gray-600 line-clamp-1">
                                                {item.category}
                                            </p>
                                        </div>

                                        {/* Glow */}
                                        <div className={glow}></div>
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
