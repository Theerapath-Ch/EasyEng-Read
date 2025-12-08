import stories from "@/components/main/dataStory";

const page = async ({ params }: { params: Promise<{ id: string, level: string }> }) => {
    const { id, level } = await params

    const story = stories.find(item => item.id === parseInt(id));
    console.log(story);

    return (
        <>
            <div>
                
            </div>
        </>
    )
}

export default page
