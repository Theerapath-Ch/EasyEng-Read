import { Story } from "../../utill/dataStory";

const Header = ({ storyProp }: { storyProp: Story }) => {
    //console.log(storyProp);

    return (
        <div className="mt-6 mx-3 md:mx-6 rounded-3xl overflow-hidden
  backdrop-blur-xl bg-white/70 border border-white/30 shadow-2xl">

            <div className="p-5 md:p-10 flex flex-col lg:flex-row gap-8 lg:gap-12">

                {/* Image */}
                <div className="lg:w-[420px] w-full flex-shrink-0">
                    <img
                        src="/story/test1.jpg"
                        alt="story"
                        className="w-full h-full object-cover rounded-2xl shadow-lg"
                    />
                </div>

                {/* Content */}
                <div className="flex flex-col justify-between flex-1">

                    {/* Title + Abstract */}
                    <div className="space-y-4">
                        <h1 className="text-3xl md:text-5xl font-extrabold leading-tight
          bg-gradient-to-r from-purple-700 via-pink-600 to-orange-500 
          bg-clip-text text-transparent">
                            {storyProp?.name}
                        </h1>

                        <p className="text-gray-700 text-base md:text-lg leading-relaxed max-w-3xl">
                            {storyProp?.shot}
                        </p>
                    </div>

                    {/* ⭐ Rating + Reading Stats */}
                    <div className="mt-6 flex flex-wrap items-center gap-6 text-gray-600">
                        <div className="flex items-center gap-2 text-yellow-500 text-xl">
                            ★★★★★
                            <span className="text-gray-600 text-sm">(Beginner Friendly)</span>
                        </div>
                        <div className="text-sm">⏱️ 5 min read</div>
                        <div className="text-sm">📝 1,240 words</div>
                    </div>

                    {/* Meta Info Chips */}
                    <div className="mt-6 flex flex-wrap gap-3 text-sm md:text-base">
                        <div className="px-4 py-2 rounded-full bg-white shadow border border-gray-100">
                            <span className="text-gray-500">Category:</span>{" "}
                            <span className="font-semibold">{storyProp?.category}</span>
                        </div>

                        <div className="px-4 py-2 rounded-full bg-white shadow border border-gray-100">
                            <span className="text-gray-500">Level:</span>{" "}
                            <span className="font-semibold">{storyProp?.level}</span>
                        </div>

                        <div className="px-4 py-2 rounded-full bg-white shadow border border-gray-100">
                            <span className="text-gray-500">Date:</span>{" "}
                            <span className="font-semibold">
                                {storyProp?.date?.toLocaleDateString("en-GB", {
                                    day: "2-digit",
                                    month: "2-digit",
                                    year: "numeric",
                                })}
                            </span>
                        </div>

                        <div className="px-4 py-2 rounded-full bg-white shadow border border-gray-100">
                            <span className="text-gray-500">Readers:</span>{" "}
                            <span className="font-semibold">11K</span>
                        </div>
                    </div>

                    {/* 🎯 Action Buttons */}
                    <div className="flex gap-4 mt-8">
                        <button className="px-6 py-3 rounded-xl bg-purple-600 text-white font-semibold shadow-lg hover:scale-105 transition">
                            Start Reading
                        </button>
                        <button className="px-6 py-3 rounded-xl border border-gray-300 font-semibold hover:bg-gray-50">
                            Save Story
                        </button>
                    </div>

                    {/* 🧠 Keywords */}
                    <div className="mt-8">
                        <p className="text-gray-500 mb-2">Key Words</p>
                        <div className="flex flex-wrap gap-2">
                            {["village", "kind", "lost", "friendship"].map((tag) => (
                                <span
                                    key={tag}
                                    className="px-3 py-1 bg-purple-100 text-purple-700 rounded-full text-sm"
                                >
                                    {tag}
                                </span>
                            ))}
                        </div>
                    </div>

                    {/* 👤 Author */}
                    <div className="mt-8 flex items-center gap-3">
                        <div className="w-10 h-10 rounded-full bg-gray-300" />
                        <div>
                            <p className="font-semibold">Written by Luna Library</p>
                            <p className="text-sm text-gray-500">Story for English learners</p>
                        </div>
                    </div>

                </div>
            </div>

            <div className="h-[3px] w-full bg-gradient-to-r from-purple-600 via-pink-500 to-orange-400"></div>
        </div>

    )
}

export default Header
