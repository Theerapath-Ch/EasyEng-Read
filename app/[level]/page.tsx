import { prisma } from '@/lib/prisma'
import { StoryLevel } from '@prisma/client';

const page = async ({params}:{params:Promise<{level: string}>})=> {
    const {level} = await params
    // console.log(level);
    
    
    const story = await prisma.story.findMany({
        select: {
            id: true,
            name: true,
            category: true,
            level: true,
            status: true
        },
        where: {
            level: level.toUpperCase() as keyof typeof StoryLevel,
            status: "E"
        }
    })
    // console.log(storyA1.length);
    return (
        <div className="mt-10 p-10">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {story.map((item) => (
                    <div
                        key={item.id}
                        className="
        group rounded-2xl overflow-hidden
        bg-white/70 backdrop-blur-xl
        border border-white/40
        shadow-lg hover:shadow-2xl
        transition-all duration-300 hover:-translate-y-2
        "
                    >
                        {/* 🖼 Image */}
                        <div className="relative h-40 overflow-hidden">
                            <img
                                // src={item.image || "/placeholder.jpg"}
                                src={`/story/${level}/${item.id}.jpg`}
                                alt={item.name}
                                className="w-full h-full object-cover group-hover:scale-110 transition duration-500"
                            />

                            {/* Gradient overlay */}
                            <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>

                            {/* Level badge */}
                            <div className="absolute top-3 right-3 bg-white/90 text-xs px-2 py-1 rounded-full font-semibold shadow">
                                {item.level}
                            </div>
                        </div>

                        {/* 📦 Content */}
                        <div className="p-4 flex flex-col justify-between h-44">
                            <div>
                                <h3 className="text-lg font-bold text-gray-800 line-clamp-2">
                                    {item.name}
                                </h3>
                                <p className="text-xs text-gray-400 mt-1">
                                    category: {item.category}
                                </p>

                                <p className="text-xs text-gray-400 mt-1">
                                    Story ID: {item.id}
                                </p>
                            </div>

                            {/* Bottom */}
                            <div className="flex justify-between items-center mt-4">
                                <span
                                    className={`text-xs px-2 py-1 rounded-full font-semibold ${item.status === "ACTIVE"
                                        ? "bg-green-100 text-green-600"
                                        : "bg-gray-200 text-gray-600"
                                        }`}
                                >
                                    {item.status}
                                </span>

                                <button className="text-sm font-semibold text-purple-600 hover:text-purple-800 transition">
                                    อ่านต่อ →
                                </button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>

    )
}

export default page
