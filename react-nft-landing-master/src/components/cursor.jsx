
export default function Cursor() {
    const cursor = document.querySelector(".cursor")
    const links = document.querySelectorAll("nav ul li a button")
    document.addEventListener("mousemove", (e)=> {
        let leftPosition = e.pageX + 4;
        let topPosition = e.pageY + 4;
        cursor.style.left = leftPosition + "px";
        cursor.style.top = topPosition + "px";
        console.log(cursor.style)

    })
    links.forEach(link => {
        link.addEventListener("mouseenter", () => {
            cursor.classList.add("large");
        })
    })
    links.forEach(link => {
        link.addEventListener("mouseleave", () => {
            cursor.classList.remove("large");
        })
    })
    return (
        <div className="cursor"/>

    );
}