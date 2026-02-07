import NewStrory from "@/components/main/NewStrory";
import PopularStory from "@/components/main/PopularStory";

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
