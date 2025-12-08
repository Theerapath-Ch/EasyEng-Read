import Link from 'next/link';
import stories from './dataStory'



const NewStrory = () => {
    //console.log(stories);
    return (
        <div className='p-4 flex flex-col justify-center  items-center '>
            <div className=" text-4xl font-bold mb-5 w-full">New Story ⚡ <hr /></div>
            <div className=" sm:grid sm:grid-cols-1 md:grid md:grid-cols-2  lg:grid lg:grid-cols-3 xl:grid xl:grid-cols-4 2xl:grid 2xl:grid-cols-5  gap-6   ">
                {stories.map((item) => {
                    return (
                        <Link href={`/story/${item.level}/${item.id}`} key={item.id}>
                            <div className="w-3xs h-auto  flex justify-center flex-col " >
                            <div className='mb-3 border-2 rounded-2xl  overflow-hidden'>
                                <img src={item.img} alt="banner" className=" transition-transform duration-300  hover:scale-108" />
                            </div>
                            <p className=' text-xl font-bold'>Name : {item.name}</p>
                            <p>{item.category}</p>
                            {/* <p>short :{item.shot}</p> */}
                            {/* <p>date : {item.date.toLocaleDateString("en-GB", {
                            day: "2-digit",
                            month: "2-digit",
                            year: "numeric",
                        })}</p> */}
                        </div>
                        </Link>
                    )
                })}
            </div>
        </div>
    )
};

export default NewStrory;
