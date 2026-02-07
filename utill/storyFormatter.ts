export function formatStoryToArray(text: unknown): string[][] {
    if (typeof text !== "string") return [];

    const clean = text
        .replace(/\.([A-Za-z])/g, ". $1") // เติม space หลังจุด
        .replace(/\n+/g, " ")
        .replace(/\s+/g, " ")
        .trim();

    // แยกเป็นประโยค
    const sentences = clean.split(/(?<=\.)\s+/);

    // รวม 3 ประโยค = 1 paragraph
    const paragraphs: string[][] = [];
    for (let i = 0; i < sentences.length; i += 3) {
        const para = sentences
            .slice(i, i + 3)
            .join(" ")
            .split(" "); // แยกเป็นคำ

        paragraphs.push(para);
    }

    return paragraphs;
}
