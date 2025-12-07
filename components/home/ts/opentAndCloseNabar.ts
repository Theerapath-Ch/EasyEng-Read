export const opentAndCloseNabar = (idNanme: string) => {
    //console.log("test func");
    const navbar = document.getElementById(idNanme);
    if (!navbar) {
        alert("id ไม่ส่งมา");
        return;
    }
    navbar?.classList.toggle("close");
};
    