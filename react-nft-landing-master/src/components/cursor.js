
export default function Cursor() {
    var mutex = false;
    var x, y;
    var px, py;
    px = py = 0;
      
    // Image of cursor
    var cursor = document.getElementById("cursor"); 
        

    // const cursor = document.querySelector(".cursor")
    const links = document.querySelectorAll(".nav ul li a .button")
    document.addEventListener("mousemove", (e)=> {
    var tmp = document.elementFromPoint(x + px, y + py); 
    mutex = true;
    tmp.click();
    cursor.style.left = (px + x) + "px";
    cursor.style.top = (py + y) + "px";
    

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