

import { stories } from "@/components/main/dataStory";
import "../../../globals.css"
import { translate } from "@/app/api/translate";
import Header from "@/components/content/Header";
import Detail from "@/components/content/Detail";




const page = async ({ params }: { params: Promise<{ id: string, level: string }> }) => {
    const { id, level } = await params
    const story = stories.find(item => item.id === parseInt(id));
    //console.log(story);
    
    //---- translate api -----
    //translate("room");
    return (
        <div className="bg">
            {/* headder */}
            <Header storyProp={story!} />
            <Detail storyProp={story!} />
        </div>
    )
}





export default page
