import NewStrory from "@/components/home/NewStrory";
import PopularStory from "@/components/home/PopularStory";

export default function Home() {
  return (
    <div className="mt-5  min-h-screen">
      {/* New Story*/} 
      <NewStrory />
      {/* Popular Stroty || All*/} 
      <PopularStory />
      {/* Comming Soon */} 
    </div>
  );
}
