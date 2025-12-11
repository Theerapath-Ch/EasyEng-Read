export async function translate(word : string) {
    const res = await fetch("http://localhost:8000/translate", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        text: word,
        to: "th",
      }),
    });

    const data = await res.json();

    // console.log(data.translatedText);
    return  data.translatedText;
}
