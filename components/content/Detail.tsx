'use client'
import React, { useState } from "react";
import { story } from "@prisma/client";
import { translate } from "@/app/api/translate";
import { Popover, Spin, } from "antd";



const Detail = ({ storyProp }: { storyProp: story }) => {


    const words = storyProp?.detail?.split(" ") || [];

    const [translated, setTranslated] = useState("");
    // const [clickWord, setClickWord] = useState("");
    const [isLoading, setIsLoading] = useState(false);

    // const [clickWord, setClickWord] = useState(null)

    const handleTranslate = async (word: string) => {

        try {
            setIsLoading(true);
            setTranslated("");
            const result = await translate(word);
            setTranslated(result);
        } catch (err) {
            console.log("การแปลภาษา มีข้อผิดพลาด:", err);
            setTranslated("เกิดข้อผิดพลาด");
        } finally {
            setIsLoading(false);
        }
    }

    return (
        <>
            <div className="w-full flex justify-center px-3 md:px-6 mt-10">
                <div className="w-full  rounded-3xl overflow-hidden
    backdrop-blur-xl bg-white/70 border border-white/30 shadow-2xl">


                    {/* Reading Area */}
                    <div className="
      p-6 md:p-10
      text-gray-800
      text-base md:text-lg
      leading-8 md:leading-10
    ">
                        {words.map((word, index) => (
                            <React.Fragment key={index}>
                                <Popover
                                    content={
                                        isLoading ? (
                                            <Spin />
                                        ) : (
                                            <p className="max-w-xs">{translated}</p>
                                        )
                                    }
                                    trigger="click"
                                >
                                    <span
                                        onClick={() => handleTranslate(word)}
                                        className="
                inline-block
                px-[3px] py-[2px]
                cursor-pointer
                rounded-md
                transition
                hover:bg-yellow-200/70
              "
                                    >
                                        {word}
                                    </span>
                                </Popover>{" "}
                            </React.Fragment>
                        ))}
                    </div>
                    {/* Gradient line */}
                    <div className="h-[3px] w-full bg-gradient-to-r from-purple-600 via-pink-500 to-orange-400"></div>

                </div>

                {/* <div className="h-[3px] w-full bg-gradient-to-r from-purple-600 via-pink-500 to-orange-400"></div> */}

            </div>
        </>



    )
}

export default Detail
