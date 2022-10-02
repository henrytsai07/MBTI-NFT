import planet from "../assets/planet.png";

export default function Roadmap() {
    return (
        <div class="roadmap">
            <div class="planet_container">
                <img src={planet} alt="Avatar" class="main_planet" />
                <img src={planet} alt="Avatar" class="second_planet" />
                <img src={planet} alt="Avatar" class="third_planet" />
                <img src={planet} alt="Avatar" class="four_planet" />
                <img src={planet} alt="Avatar" class="fifth_planet" />



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