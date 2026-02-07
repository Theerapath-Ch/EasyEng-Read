'use client'
import React, { useState } from "react";

type Choice = {
    text: string;
    correct: boolean;
};

type QuestionType = {
    question: string;
    choices: Choice[];
    explanation: string;
};

const questions: QuestionType[] = [
    {
        question: "Where did Luna live?",
        choices: [
            { text: "In a small red house", correct: false },
            { text: "In a big green tree", correct: true },
            { text: "Near the river", correct: false },
        ],
        explanation: "Luna lived in a big green tree near a small village.",
    },
    {
        question: "Why was the cat sad?",
        choices: [
            { text: "He was hungry", correct: false },
            { text: "He was lost", correct: true },
            { text: "He was sick", correct: false },
        ],
        explanation: "The cat said he was lost and could not find his home.",
    },
    {
        question: "What did Luna do to help the cat?",
        choices: [
            { text: "She sang a song", correct: false },
            { text: "She looked for the cat’s home from the sky", correct: true },
            { text: "She called other animals", correct: false },
        ],
        explanation: "Luna flew high and searched until she found the red house.",
    },
];

const Question = () => {
    const [selected, setSelected] = useState<number | null>(null);
    const [current, setCurrent] = useState(0);
    const [score, setScore] = useState(0);
    const [showExplanation, setShowExplanation] = useState(false);

    const handleSelect = (index: number, correct: boolean) => {
        if (selected !== null) return;
        setSelected(index);
        if (correct) setScore((s) => s + 1);
        setShowExplanation(true);
    };

    const nextQuestion = () => {
        setSelected(null);
        setShowExplanation(false);
        setCurrent((c) => c + 1);
    };

    if (current >= questions.length) {
        return (
            <div className="mt-10 mx-4 md:mx-10 p-10 rounded-3xl bg-white/70 backdrop-blur-xl shadow-2xl text-center">
                <h2 className="text-4xl font-bold mb-4">🎉 Quiz Completed</h2>
                <p className="text-xl">
                    Your score: <span className="font-bold">{score}</span> /{" "}
                    {questions.length}
                </p>
            </div>
            
        );
    }

    const q = questions[current];

    return (
        <div className="mt-10 mx-4 md:mx-10 p-6 md:p-10 rounded-3xl bg-white/70 backdrop-blur-xl shadow-2xl">
            <h2 className="text-2xl md:text-3xl font-bold mb-6">
                Question {current + 1} of {questions.length}
            </h2>

            <p className="text-lg md:text-xl font-semibold mb-6">{q.question}</p>

            <div className="flex flex-col gap-4">
                {q.choices.map((choice, index) => {
                    const isSelected = selected === index;
                    const correct = choice.correct;

                    return (
                        <button
                            key={index}
                            onClick={() => handleSelect(index, correct)}
                            className={`p-4 rounded-xl border text-left transition-all duration-300
                ${isSelected
                                    ? correct
                                        ? "bg-green-100 border-green-400"
                                        : "bg-red-100 border-red-400"
                                    : "bg-white hover:bg-gray-50"
                                }`}
                        >
                            {choice.text}
                        </button>
                    );
                })}
                <div className="h-[3px] w-full bg-gradient-to-r from-purple-600 via-pink-500 to-orange-400"></div>
            </div>

            {showExplanation && (
                <div className="mt-6 p-4 bg-gray-100 rounded-xl text-gray-700">
                    💡 {q.explanation}
                </div>
            )}

            {showExplanation && (
                <button
                    onClick={nextQuestion}
                    className="mt-6 px-6 py-3 bg-purple-600 text-white rounded-xl shadow hover:scale-105 transition"
                >
                    Next Question →
                </button>
            )}
            
        </div>
    );
};

export default Question;
