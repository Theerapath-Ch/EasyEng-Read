type Story = {
    id: number,
    name: string,
    shot: string,
    detail: string,
    category: string, 
    img:string ,
    date: Date,
    level:string
}
const stories: Story[] = [
    {
        id: 1,
        name: "dog and cat",
        shot: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis, vero?",
        detail: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Commodi repellat similique, harum ipsam aliquam voluptatem eius mollitia ipsum reiciendis architecto rem dolorum aut sed, sit laborum corporis, accusantium velit provident.",
        category: "animal",
        img: "../story/test1.jpg",
        date: new Date("2025-12-07"),
        level:"a1"
    },
    {
        id: 2,
        name: "fox and rat",
        shot: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis, vero?",
        detail: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Commodi repellat similique, harum ipsam aliquam voluptatem eius mollitia ipsum reiciendis architecto rem dolorum aut sed, sit laborum corporis, accusantium velit provident.",
        category: "animal",
        img: "../story/test1.jpg",
        date: new Date("2025-08-12"),
        level:"b2"
    },
    {
        id: 3,
        name: "fox and rat",
        shot: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis, vero?",
        detail: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Commodi repellat similique, harum ipsam aliquam voluptatem eius mollitia ipsum reiciendis architecto rem dolorum aut sed, sit laborum corporis, accusantium velit provident.",
        category: "animal",
        img: "../story/test1.jpg",
        date: new Date("2025-08-12"),
        level:"c1"
    },
    
]
export default stories ;