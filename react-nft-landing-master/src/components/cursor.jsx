import { MotionConfig } from "framer-motion";
import { useEffect } from "react";
import { useState } from "react";
import {motion} from "framer-motion"
import carrot from "../assets/carrot.png";


export default function Cursor() {
    
    const [mousePosition, setMousePosition] = useState({
        x: 0,
        y:0
    });
    const [cursorVariant, setCursorVariant] = useState("default");
    const links = document.querySelectorAll("nav ul li a");
    links.forEach(link => {
        link.addEventListener("mouseenter", () => {
            setCursorVariant("text")
        })
    })
    links.forEach(link => {
        link.addEventListener("mouseleave", () => {
            setCursorVariant("default");
        })
    })
    useEffect(() => {
        const mouseMove = e => {
            setMousePosition({
                x: e.clientX,
                y: e.clientY
            })


        }
        window.addEventListener("mousemove", mouseMove);

        return () => {
            window.removeEventListener("mousemove", mouseMove)
        }
    }, []);
    const variants = {
        default: {
            x:mousePosition.x,
            y:mousePosition.y
        },
        text: {
            x:mousePosition.x-75,
            y:mousePosition.y-75,
            height: 150,
            width: 150,
            
        }
    }
    return (
        <motion.div className="cursor" variants={variants} animate={cursorVariant}>
            <img className="carrot_cursor"src={carrot} alt="carrot"/>
        </motion.div>

    );
}