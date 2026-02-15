import Link from 'next/link';
import category from '../../utill/category';
import { usePathname } from 'next/navigation';


const wrap_cat = `flex items-center gap-3 p-2 rounded-full bg-white/60 backdrop-blur-xl shadow-xl border border-white/40`;
const bg_gardient = `absolute inset-0 rounded-full bg-gradient-to-r from-purple-700 via-pink-600 to-orange-500 shadow-lg` ;
const bg_gardient_glow = `absolute -inset-1 rounded-full blur-md opacity-40 bg-gradient-to-r from-purple-700 via-pink-600 to-orange-500` ;

const Catagory = () => {
    const pathname = usePathname();
    // console.log(pathname);
    return (
        <>
            <div className="flex justify-center">
                <div className={wrap_cat}>
                    {category.map((item) => {
                        const isActive = item.path === pathname;
                        return (
                            <Link
                                href={item.path}
                                key={item.id}
                                className={`relative px-6 py-2 rounded-full font-semibold transition-all duration-300
                                ${isActive
                                        ? "text-white"
                                        : "text-gray-700 hover:text-purple-700"}
                                `}
                            > 
                                {/* Active background */}
                                {isActive && (
                                    <>
                                        <div className={bg_gardient}></div>
                                        {/* glow */}
                                        <div className={bg_gardient_glow}></div>
                                    </>
                                )}

                                {/* Text */}
                                <span className="relative z-10">
                                    {item.name}
                                </span>
                            </Link>
                        );
                    })}
                </div>
            </div>

        </>
    );
};

export default Catagory;
