import NewStrory from "@/components/main/NewStrory";
import PopularStory from "@/components/main/PopularStory";

export default function Home() {
  return (
    <div className="">
      {/* New Story*/} 
      <NewStrory />
      {/* Popular Stroty || All*/} 
      <PopularStory />
      {/* Comming Soon */} 
    </div>
  );
}
