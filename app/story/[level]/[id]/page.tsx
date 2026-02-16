

import { story } from "@prisma/client";
import { prisma } from '@/lib/prisma'
import "../../../globals.css"
import Header from "@/components/content/Header";
import Detail from "@/components/content/Detail";
import Question from "@/components/content/Question";

type Props = {
    storyProp: story;
};


const page = async ({ params }: { params: Promise<{ id: string, level: string }> }) => {
    const { id, level } = await params
    // console.log(id);
    
    const story = await prisma.story.findUnique({
        where: {
            id: parseInt(id)
        },
        select: {
            id:true,
            level:true,
            name:true,
            category:true,
        }
    })
    console.log(story);
    
    return (
        <div className="bg-gray-200 p-5">
            {/* headder */}
            <Header storyProp={story!} />
            <Detail storyProp={story!} />
            <Question storyProp={story!} />
        </div>
    )
}



export default page
