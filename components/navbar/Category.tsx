import category from './category'

const Catagory = () => {
    // console.log(category);
    return (
        <>
            <div className="text-center text-gray-700 flex  justify-center gap-6 items-center bo"  >
                {category.map((item) => {
                    return (
                        <a key={item.id} href={item.path} className="relative border-b-4 border-amber-500 h-full flex items-center font-bold p-4">{item.name} <span className=" absolute right-0 h-fit">|</span></a>
                    )
                })}
            </div>
            {/* <div className="text-center  flex flex-col justify-center items-center  "  >
                df
            </div> */}
        </>
    );
};

export default Catagory;
