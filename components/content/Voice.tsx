import { useRef, useState } from "react";
import { story } from "@prisma/client";



const Voice = ({propVoice}:{propVoice : story }) => {
    // const text = `There was a little blue bird. Her name was Luna. Luna lived in a big green tree near a small village.
    // Every morning, Luna woke up early. She opened her wings and looked at the bright sky. Then she sang a happy song, and all the animals liked her song.
    // `;
    const text = propVoice;
    const utterRef = useRef<SpeechSynthesisUtterance | null>(null);
    const timerRef = useRef<NodeJS.Timeout | null>(null);

    const [time, setTime] = useState(0);

    // ▶ START TIMER
    const startTimer = () => {
        // console.log(timerRef.current);

        if (timerRef.current) return; // กันซ้อน  

        timerRef.current = setInterval(() => {
            setTime((t) => t + 1);
        }, 1000);
    };

    // ⏸ PAUSE TIMER
    const pauseTimer = () => {
        // console.log(timerRef.current);
        if (timerRef.current) {
            clearInterval(timerRef.current);
            timerRef.current = null;
        }
    };

    // ⏹ RESET TIMER
    const resetTimer = () => {
        pauseTimer();
        setTime(0);
    };

    // ▶ PLAY
    const play = () => {
        const utter = new SpeechSynthesisUtterance(text);
        utter.lang = "en-US";

        // resume จาก pause
        if (speechSynthesis.speaking) {
            if (speechSynthesis.paused) {
                speechSynthesis.resume();
                startTimer();
            }
            return;
        }

        // ยังไม่เคยเล่น
        if (!utterRef.current) {
            utter.onend = () => {
                utterRef.current = null;
                resetTimer(); // auto reset เมื่อพูดจบ
            };

            utterRef.current = utter;
            speechSynthesis.speak(utter);
            startTimer();
        }
    };

    // ⏸ PAUSE
    const pause = () => {
        if (speechSynthesis.speaking && !speechSynthesis.paused) {
            speechSynthesis.pause();
            pauseTimer();
        }
    };

    // ⏹ STOP
    const stop = () => {
        speechSynthesis.cancel();
        utterRef.current = null;
        resetTimer();
    };

    // format mm:ss
    const formatTime = () => {
        const m = String(Math.floor(time / 60)).padStart(2, "0");
        const s = String(time % 60).padStart(2, "0");
        return `${m}:${s}`;
    };

    return (
        <div className="flex items-center gap-3 p-2 rounded-2xl w-fit">
            <button
                onClick={play}
                className="px-4 py-1 rounded-xl bg-green-500 hover:bg-green-400 
               text-white font-semibold shadow-md hover:scale-105 
               active:scale-95 transition"
            >
                ▶ Play
            </button>

            <button
                onClick={pause}
                className="px-4 py-1 rounded-xl bg-yellow-500 hover:bg-yellow-400 
               text-white font-semibold shadow-md hover:scale-105 
               active:scale-95 transition"
            >
                ⏸ Pause
            </button>

            <button
                onClick={stop}
                className="px-4 py-1 rounded-xl bg-red-500 hover:bg-red-400 
               text-white font-semibold shadow-md hover:scale-105 
               active:scale-95 transition"
            >
                ⏹ Stop
            </button>
            <div className="text-xl font-bold">{formatTime()}</div>

        </div>

    );
};

export default Voice



const testT = `There was a little blue bird. Her name was Luna. Luna lived in a big green tree near a small village.

Every morning, Luna woke up early. She opened her wings and looked at the bright sky. Then she sang a happy song, and all the animals liked her song.

Luna liked many things. She liked the warm sun, the soft wind, and the blue sky. And she liked to help others.

One sunny day, Luna flew to the village. She saw a small cat near the road. The cat looked very sad.

Luna asked, “Hello. Are you okay?” The cat said, “I am lost. I cannot find my home. I am alone.”

Luna wanted to help. She said, “Don’t worry. I will help you.” The cat smiled a little.

Luna flew up high. She looked left, right, behind the trees, and near the river.

Then Luna saw a small red house. A woman was standing outside. She was calling, “Kitty! Kitty! Where are you?”

Luna knew this must be the cat’s home. She flew back to the cat and said, “I found your home! Come with me.”

The cat followed Luna. They walked through the village, passed a blue door and a tall fence, and soon reached the small red house.

The woman saw the cat. She ran to him and hugged him. She was very happy. “Thank you, little bird!” she said. “You are very kind.”

Luna felt warm and proud. She was happy to help. She sang her happy song again while the cat sat and listened and the woman smiled. It was a beautiful morning.

The next day, the cat visited Luna’s tree. He said, “Hello, Luna! Thank you again.” Luna said, “You’re welcome. We are friends now.”

From that day, Luna and the cat played together. They walked in the village, sat by the river, and watched the sunset.

Luna was happy. She liked the sun. She liked the sky. But most of all, she liked her new friend.

The end. `;
