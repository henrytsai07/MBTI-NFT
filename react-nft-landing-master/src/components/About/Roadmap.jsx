import planet from "../../assets/New Space Themed/roadmap.png"
import planet1 from "../../assets/New Space Themed/roadmap_planet1.png"
import planet2 from "../../assets/New Space Themed/roadmap_planet2.png"
import planet3 from "../../assets/New Space Themed/roadmap_planet3.png"
import planet4 from "../../assets/New Space Themed/roadmap_planet4.png"
import planet5 from "../../assets/New Space Themed/roadmap_planet5.png"





export default function Roadmap() {
    return (
        <div class="roadmap">
            <div class="planet_container">
                <img src={planet} alt="Avatar" class="main_planet" />
                <img src={planet1} alt="Avatar" class="second_planet" />
                <img src={planet2} alt="Avatar" class="third_planet" />
                <img src={planet3} alt="Avatar" class="four_planet" />
                <img src={planet4} alt="Avatar" class="fifth_planet" />



                <div class="overlay plt1">
                    <div class="text">Hello World</div>
                </div>
                <div class="overlay plt2">
                    <div class="text">H</div>
                </div>
                <div class="overlay plt3">
                    <div class="text">Hello </div>
                </div>
                <div class="overlay plt4">
                    <div class="text"> World</div>
                </div>
            </div>

        </div>

    );
}