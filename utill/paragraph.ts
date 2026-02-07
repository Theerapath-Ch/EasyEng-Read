export function normalizeStoryText(text) {
    if (typeof text !== "string") return "";
    return text
        // เติมช่องว่างหลังจุด ถ้าไม่มี
        .replace(/\.([A-Za-z])/g, ". $1")
        // ลบ newline ที่มั่ว ๆ ให้เป็น space
        .replace(/\n+/g, " ")
        // ลบ space ซ้อน
        .replace(/\s+/g, " ")
        // ตัดหัวท้าย
        .trim();
}

export function splitToParagraphs(text) {
    return text
        .split(/(?<=\.)\s+/) // ตัดทุกประโยค
        .reduce((acc, sentence, index) => {
            const groupIndex = Math.floor(index / 3); // 3 ประโยค = 1 ย่อหน้า
            if (!acc[groupIndex]) acc[groupIndex] = [];
            acc[groupIndex].push(sentence);
            return acc;
        }, [])
        .map(group => group.join(" "));
}