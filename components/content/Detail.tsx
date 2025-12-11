'use client'
import React, { useState } from "react";
import { Story } from "../main/dataStory"
import { translate } from "@/app/api/translate";
import { Row, Col, Card, Popover, Spin, Carousel } from "antd";

const Detail = ({ storyProp }: { storyProp: Story }) => {
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
            <div className=" border-2 p-10 flex justify-center items-center  md:text-lg text-wrap leading-9 break-all tracking-wider whitespace-pre-wrap w-full ">
                <div className="w-full">
                    {words.map((word, index) => (
                        <React.Fragment key={index}>
                            <Popover
                                content={
                                    isLoading ? (
                                        <Spin />
                                    ) : (
                                        <p>{translated}</p>
                                    )
                                }
                                trigger="click"
                            >
                                <span
                                    className="px-1 cursor-pointer hover:bg-yellow-200 rounded"
                                    onClick={() => handleTranslate(word)}
                                >
                                    {word}
                                </span>
                            </Popover>
                        </React.Fragment>
                    ))}
                </div>
            </div>
        </>
    )
}

export default Detail
