

import { stories } from "@/components/main/dataStory";
import "../../../globals.css"
import { translate } from "@/app/api/translate";
import Header from "@/components/content/Header";
import Detail from "@/components/content/Detail";
import Question from "@/components/content/Question";




const page = async ({ params }: { params: Promise<{ id: string, level: string }> }) => {
    const { id, level } = await params
    const story = stories.find(item => item.id === parseInt(id));
    //console.log(story);
    
    //---- translate api -----
    //translate("room");
    return (
        <div className="bg-gray-200 p-5">
            {/* headder */}
            <Header storyProp={story!} />
            <Detail storyProp={story!} />
            <Question  />
        </div>
    )
}





export default page
