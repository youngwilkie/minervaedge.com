import React, { useState, useEffect } from "react";
import { LanguageData } from "./featuresData";

const LanguageFlipper = () => {
    const [currentIndex, setCurrentIndex] = useState<number>(0);
    const [intervalTime, setIntervalTime] = useState<number>(500);
    const [intervalId, setIntervalId] = useState<number>(0);

    let id;
    useEffect(() => {
        if (currentIndex === LanguageData.length - 1) {
            clearInterval(intervalId);
        } else {
            id = setInterval(() => {
                setCurrentIndex((prevIndex) => prevIndex + 1);
                setIntervalTime((prevInterval) => prevInterval * 0.95); // Increase speed
            }, intervalTime);
            setIntervalId(id);
            return () => clearInterval(id);
        }
    }, [currentIndex, intervalTime, LanguageData.length]);

    const opacity = currentIndex / (LanguageData.length - 1);

    return (
        <>
            <div className="mx-auto">
                285 Languages Available:
            </div>
            <div
                className={"transition-colors duration-500 ease-in mx-auto"}
                style={{ color: `rgba(94, 219, 128, ${1 - opacity})` }}
            >
                {LanguageData[currentIndex].language}
            </div>
        </>
    );
};

export default LanguageFlipper;