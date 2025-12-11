import { Story } from "../main/dataStory";

const Header = ({ storyProp }: { storyProp: Story }) => {
    //console.log(storyProp);

    return (
        < div className=" p-3 bg-white  rounded-b-3xl shadow-2xl " >
            <div className="p-3 md:flex justify-center gap-4 ">
                <div className=" md:w-fit  flex justify-center items-center">
                    <img src="/story/test1.jpg" alt="logo" className="border-0 max-w-3xs rounded-md h-auto " />
                </div>
                <div className=" p-3 w-auto max-w-2xl flex flex-col justify-between items-left gap-6">
                    <div>
                        <p className=" text-xl">NAME : <span className="text-xl font-semibold">{storyProp?.name}</span></p>
                        <p className=" text-xl">Category : <span className="text-xl font-semibold">{storyProp?.category}</span></p>
                        <p className=" text-xl">abstract : <span className="text-xl font-semibold">{storyProp?.shot}</span></p>
                        <p className=" text-xl">Level : <span className="text-xl font-semibold">{storyProp?.level}</span></p>
                    </div>
                    <div className="flex gap-2 text-gray-700">
                        <p>date: {storyProp?.date.toLocaleDateString("en-GB", {
                            day: "2-digit",
                            month: "2-digit",
                            year: "numeric",
                        })}</p>
                        <p>คนอ่าน  11K</p>
                    </div>
                </div>
            </div>
        </div >
    )
}

export default Header
