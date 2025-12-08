import stories from "@/components/main/dataStory";

const page = async ({ params }: { params: Promise<{ id: string, level: string }> }) => {
    const { id, level } = await params

    const story = stories.find(item => item.id === parseInt(id));
    //console.log(story);

    return (
        <>
            <div className="border-2 p-3 bg-orange-200 rounded-b-3xl ">
                <div className="p-3 md:flex justify-center ">
                    <div className=" md:w-fit  flex justify-center items-center">
                        <img src="/story/test1.jpg" alt="logo" width={200} className="border-0 rounded-md h-auto " />
                    </div>
                    <div className="border-2 p-3 w-auto max-w-2xl flex flex-col justify-between items-left gap-2">
                        <div>
                            <p className=" text-xl">NAME : <span className="text-xl font-semibold">{story?.name}</span></p>
                            <p className=" text-xl">Category : <span className="text-xl font-semibold">{story?.category}</span></p>
                            <p className=" text-xl">abstract : <span className="text-xl font-semibold">{story?.detail}</span></p>
                        </div>
                        <div className="flex gap-2 text-gray-700">
                            <p>date: {story?.date.toLocaleDateString("en-GB", {
                                day: "2-digit",
                                month: "2-digit",
                                year: "numeric",
                            })}</p>
                            <p>คนอ่าน  11K</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default page
