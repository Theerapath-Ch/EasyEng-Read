import NewStrory from "@/components/main/NewStrory";


const page = async () => {
    // console.log("🔥 PAGE EXECUTED")
    // return <div>HELLO STORY</div>
    console.log("STEP 1")

    const res = await fetch("http://localhost:3000/api/story", {
        cache: "no-store",
    });
    // console.log("res:" ,res);


    const data = await res.json();
    // console.log("test",data);


    return (
        <div className="">
            <NewStrory data={data} />
        </div>
    )
}
export default page