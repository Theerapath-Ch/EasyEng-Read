import Link from 'next/link';
import category from './category'
import { usePathname } from 'next/navigation';

const Catagory = () => {
    const pathname = usePathname();
    //console.log(pathname);
    return (
        <>
            <div className="text-center text-gray-700 flex  justify-center gap-6 items-center bo"  >
                {category.map((item) => {
                    const isActive = item.path === pathname;
                    return (
                        <Link href={item.path} key={item.id} className={`relative h-full flex items-center font-bold p-4 ${isActive ? " border-b-4 border-amber-500" : " border-none"}`}>{item.name} <span className=" absolute right-0 h-fit">|</span></Link>
                    )
                })}
            </div>
            {/* <div className="text-center  flex flex-col justify-center items-center  "  >
                df
            </div> */}
        </>
    );
};

export default Catagory;
