import Link from 'next/link';
import category from '../../utill/category';
import { usePathname } from 'next/navigation';

const Catagory = () => {
    const pathname = usePathname();
    //console.log(pathname);
    return (
        <>
            <div className="flex justify-center">
                <div className="flex items-center gap-3 p-2 rounded-full
                  bg-white/60 backdrop-blur-xl shadow-xl border border-white/40">

                    {category.map((item) => {
                        const isActive = item.path === pathname;

                        return (
                            <Link
                                href={item.path}
                                key={item.id}
                                className={`
            relative px-6 py-2 rounded-full font-semibold transition-all duration-300
            ${isActive
                                        ? "text-white"
                                        : "text-gray-700 hover:text-purple-700"}
            `}
                            >
                                {/* Active background */}
                                {isActive && (
                                    <>
                                        <div className="absolute inset-0 rounded-full
                              bg-gradient-to-r from-purple-700 via-pink-600 to-orange-500
                              shadow-lg"></div>

                                        {/* glow */}
                                        <div className="absolute -inset-1 rounded-full blur-md opacity-40
                              bg-gradient-to-r from-purple-700 via-pink-600 to-orange-500"></div>
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
