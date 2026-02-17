
import { prisma } from '@/lib/prisma'
import "../../../globals.css"
import Header from "@/components/content/Header";
import Detail from "@/components/content/Detail";
import Question from "@/components/content/Question";



const page = async ({ params }: { params: Promise<{ id: string, level: string }> }) => {
    const { id, level } = await params
    // console.log(id);

    const story = await prisma.story.findUnique({
        where: {
            id: Number(id)
        },
        select: {
            id: true,
            level: true,
            name: true,
            category: true,
            created_at: true,
            storydetails: {
                select: {
                    detail: true,
                    shortdesc: true,
                    vocabulary: true,
                    questions: {
                        select: {
                            question: true,
                            explanation: true,
                            choices: {
                                select:{
                                    text:true,
                                    isCorrect:true,
                                }
                            }
                        }
                    }
                }
            }
        }
    })
    console.log(story.storydetails[0].questions);

    return (
        <div className="bg-gray-200 p-5">
            {/* headder */}
            <Header storyProp={story!} />
            {/* <Header storyProp={story?.storydetails?.[0]?.detail ?? ""} /> */}
            <Detail storyProp={story!} />
            <Question storyProp={story!} />
        </div>
    )
}



export default page
