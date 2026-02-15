import { useRef } from "react";


const Voice = () => {
    const text = `There was a little blue bird. Her name was Luna. Luna lived in a big green tree near a small village.
    Every morning, Luna woke up early. She opened her wings and looked at the bright sky. Then she sang a happy song, and all the animals liked her song.
    `;
    const utterRef = useRef<SpeechSynthesisUtterance | null>(null);

    const play = () => {
        const utter = new SpeechSynthesisUtterance(text);
        utter.lang = "en-US";
        
        if (speechSynthesis.speaking) {
            if (speechSynthesis.paused) {
                speechSynthesis.resume();
            }
            return;
        }
        // ⭐ ถ้ายังไม่เคยสร้างเสียง
        if (!utterRef.current) {
            utter.onend = () => {
                utterRef.current = null; // reset หลังพูดจบ
            };

            utterRef.current = utter;
            speechSynthesis.speak(utter);
        }
    };

    const pause = () => {
        if (speechSynthesis.speaking && !speechSynthesis.paused) {
            speechSynthesis.pause();
        }
    };

    const stop = () => {
        speechSynthesis.cancel();
        utterRef.current = null; // reset
    };

    return (
        <div style={{ display: "flex", gap: 10 }}>
            <button onClick={play}>▶ Play</button>
            <button onClick={pause}>⏸ Pause</button>
            <button onClick={stop}>⏹ Stop</button>
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
