type Story = {
    id: number,
    name: string,
    shot: string,
    detail: string,
    date: Date
}
const stories: Story[] = [
    {
        id: 1,
        name: "dog and cat",
        shot: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis, vero?",
        detail: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Commodi repellat similique, harum ipsam aliquam voluptatem eius mollitia ipsum reiciendis architecto rem dolorum aut sed, sit laborum corporis, accusantium velit provident.",
        date: new Date("2025-12-07")
    },
    {
        id: 2,
        name: "fox and rat",
        shot: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis, vero?",
        detail: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Commodi repellat similique, harum ipsam aliquam voluptatem eius mollitia ipsum reiciendis architecto rem dolorum aut sed, sit laborum corporis, accusantium velit provident.",
        date: new Date("2025-08-12")
    },
    {
        id: 3,
        name: "fox and rat",
        shot: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis, vero?",
        detail: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Commodi repellat similique, harum ipsam aliquam voluptatem eius mollitia ipsum reiciendis architecto rem dolorum aut sed, sit laborum corporis, accusantium velit provident.",
        date: new Date("2025-08-12")
    },
    {
        id: 4,
        name: "fox and rat",
        shot: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis, vero?",
        detail: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Commodi repellat similique, harum ipsam aliquam voluptatem eius mollitia ipsum reiciendis architecto rem dolorum aut sed, sit laborum corporis, accusantium velit provident.",
        date: new Date("2025-08-12")
    },
    {
        id: 5,
        name: "fox and rat",
        shot: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis, vero?",
        detail: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Commodi repellat similique, harum ipsam aliquam voluptatem eius mollitia ipsum reiciendis architecto rem dolorum aut sed, sit laborum corporis, accusantium velit provident.",
        date: new Date("2025-08-12")
    },
    {
        id: 6,
        name: "fox and rat",
        shot: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis, vero?",
        detail: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Commodi repellat similique, harum ipsam aliquam voluptatem eius mollitia ipsum reiciendis architecto rem dolorum aut sed, sit laborum corporis, accusantium velit provident.",
        date: new Date("2025-08-12")
    },


]

const NewStrory = () => {
    //console.log(stories);


    return (
        <>
            <div className=" text-3xl mb-3">New Story มาใหม่</div>
            <div className=" sm:grid sm:grid-cols-1 md:grid md:grid-cols-2  xl:grid xl:grid-cols-4 gap-3   ">
                {stories.map((item) => {
                return (
                    <div className="border-2 w-2xs h-fit p-3 " key={item.id}>
                        <img src="../img/logo1.png" alt="" width={50} className="border-2" />
                        <p>name : {item.name}</p>
                        <p>short :{item.shot}</p>
                        <p>date : {item.date.toLocaleDateString("en-GB", {
                            day: "2-digit",
                            month: "2-digit",
                            year: "numeric",
                        })}</p>
                    </div>
                )
            })}
            </div>
        </>
    )
};

export default NewStrory;
