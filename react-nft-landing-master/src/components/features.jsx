import React from "react";
import Movie from "../components/movie";
import { motion, AnimatePresence } from "framer-motion";
// Import the functions you need from the SDKs you need
import StartFirebase, { firebase } from "../functions/initFirebase";
import Select from "react-select";

const db = StartFirebase();
const facial_options = [
  { value: "", label: "All" },
  { value: 'JP&Judging', label: "Judging" },
  { value: "Shy", label: "Shy" },
  { value: "E*Laughing", label: "Laughing" },
  { value: "F*Please", label: "Please Emoji" },
  { value: "N*Anime", label: "Comic Eyes" },
  { value: "Motivated", label: "Motivated Face" },
  { value: 'T*Thinking', label: "Thinking Face" },
  { value: "S*Numb", label: "Hwaiting Face" },
];
const accessories_options = [
  { value: "", label: "All" },
  { value: "I*Headphone", label: "Headphone" },
  { value: "E*Reversed Cap", label: "Reversed Cap" },
  { value: "S*Ordinary Hairclip", label: "Regular shape hairclip" },
  { value: "SN&S Hairclip", label: "Irregular shape hairclip" },
  { value: "T*Glass", label: "Glasses" },
  { value: "F*Scarf", label: "Scarf" },
  { value: "J*Watch", label: "Watch" },
  { value: "P*Paint Brush", label: "Paintbrush" },
];

const item_options = [
  { value: "", label: "All" },
  { value: "Book", label: "Book" },
  { value: "E*Beer Cup", label: "Beer Cup" },
  { value: "Magnifying", label: "Magnifying Glass" },
  { value: "N*Binocular", label: "Binocular" },
  { value: "T*Rubic Cube", label: "Rubik's Cube" },
  { value: "F*Teddy Bear", label: "Teddy Bear" },
  { value: "J*Checklist", label: "Checklist/Planning Items" },
  { value: "P*Camera", label: "Camera" },
];
const clothing_options = [
  { value: "", label: "All" },
  { value: "I*Pajama", label: "Pajama" },
  { value: "E*Tropical Shirt", label: "Tropical Shirt" },
  { value: "Flannel", label: "Flannel Shirt" },
  { value: "Astro", label: "Astronaut Suit" },
  { value: "T*Lab Coat", label: "White Labortory Cloth" },
  { value: "F*I Love NFT Shirt", label: "I Love MBTI" },
  { value: "J*White Shirt", label: "White Button-down Shirt" },
  { value: "P*Pattern Shirt", label: "Dot Shirt" },
];
export class Features extends React.Component {
  //   const [popular, setPopular] = useState([]);
  //   const [filtered, setFiltered] = useState([]);
  //   const [activeGenre, setActiveGenre] = useState(0);

  constructor() {
    super();
    this.state = {
      extract: [],
      popular: [],
      filter: [],
      activeGenre: ["", "", "", ""],
      facial_value: "All",
      access_value: "All",
      item_value: "All",
      clothing_value: "All",
    };
  }

  handleChange = () => {
    
    this.state.filter = this.state.popular;
    this.setState({ filter: this.state.popular });
    

    console.log(this.state.filter)


    //initialization
    var empty = true;
    for (var x = 0; x < this.state.activeGenre.length; x++) {
      if (this.state.activeGenre[x] !== "") {
        empty = false;
      }
    }
    if (empty === true) {
      this.setState({ filter: this.state.popular });
      this.setState({facial_value:"All"})
      return;
    }
    //Facials
    if (this.state.activeGenre[0] !== "") {
      const filtered = this.state.popular.filter(
        (movie) => (movie[0].attributes[1].value === this.state.activeGenre[0])
      );
      this.state.filter = filtered
      this.setState({ filter: filtered });
      console.log(filtered)
      console.log(this.state.filter)


    }
    //Accessories
    if (this.state.activeGenre[1] !== "") {
      const filtered = this.state.filter.filter(
        (movie) => movie[0].attributes[3].value == this.state.activeGenre[1]
      );

      this.state.filter = filtered
      this.setState({ filter: filtered });
      console.log(this.state.filter)

    }
    //Items
    if (this.state.activeGenre[2] !== "") {
      const filtered = this.state.filter.filter(
        (movie) => movie[0].attributes[2].value === this.state.activeGenre[2]
      );

      this.state.filter = filtered
      this.setState({ filter: filtered });
      console.log(this.state.filter)

    }
    //Clothings
    if (this.state.activeGenre[3] !== "") {
      const filtered = this.state.filter.filter(
        (movie) => movie[0].attributes[0].value == this.state.activeGenre[3]
      );

      this.state.filter = filtered
      this.setState({ filter: filtered });



    }



    


    //this.setState({ value: options.value });
  };

  componentDidMount() {
    //fetchPopular();
    // const BunnyJson = getBunnyJson();
    // const BunnyArray = []
    // const Bunny_Extract = () => {
    //   BunnyJson.then((a) => {
    //     BunnyArray.push(a);
    //   });
    // }
    // Bunny_Extract();

    /////////////////////////////////////////////////////////////////////////////////////////////////
    async function getBunnyJson() {
      const map1 = new Map();

      for (var num = 1; num < 301; num++) {
        try {
          let name = await fetch(
            "https://mbtibunny.mypinata.cloud/ipfs/QmWFXAtS4Cm5M3f7wJXwXgmjL6z3dpDyDmxWQZ4414vb9C/" +
              num +
              ".json"
          );
          let image = await fetch(
            "https://mbtibunny.mypinata.cloud/ipfs/QmZ2TdWZa9vhDLc8XV1TTo3sBUY8Y625ibnRozt1oiCW98/" +
              num +
              ".png"
          );
          map1.set(await name.json(), URL.createObjectURL(await image.blob()))
          
          //responseJson.push(await response.json());
        } catch (error) {
          console.error(error);
        }
      }


      return map1;
    }
    

    var responseJson = getBunnyJson();

    Promise.all([responseJson]).then((res) => {

      this.setState({ popular: [...res[0]]});
      this.setState({ filter: [...res[0]] });
      var empty = true;
      for (var x = 0; x < this.state.activeGenre.length; x++) {
        if (this.state.activeGenre[x] !== "") {
          empty = false;
        }
      }

      if (empty === true) {
        this.setState({ filter: this.state.popular });
        return;
      }
    });

    /////////////////////////////////////////////////////////////////////////////////////////////////

    // const dbRef = ref(db, "Collection");
    // onValue(dbRef, (snapshot) => {
    //   let records = [];
    //   snapshot.forEach((childSnapshot) => {
    //     let keyName = childSnapshot.key;
    //     let data = childSnapshot.val();
    //     records.push({ key: keyName, data: data });
    //   });

    //initializations

    // setFiltered(popular);
  }
  

  render() {
    
    const Facial_List = () => (
      <Select
        options={facial_options}
        value={{ label: this.state.facial_value }}
        onChange={(facial_options) => (
          (this.state.activeGenre[0] = facial_options.value),
          this.handleChange(), this.setState({ facial_value: facial_options.label })
        )}
      />
    );
    const Accessories_List = () => (
      <Select
        options={accessories_options}
        value={{label: this.state.access_value}}
        onChange={(accessories_options) => (
          (this.state.activeGenre[1] = accessories_options.value),
          this.handleChange(),this.setState({ access_value: accessories_options.label })
        )}
      />
    );
    const Items_List = () => (
      <Select
        options={item_options}
        value={{ label: this.state.item_value }}
        onChange={(item_options) => (
          (this.state.activeGenre[2] = item_options.value), this.handleChange(), this.setState({ item_value: item_options.label })
        )}

      />
    );
    const Clothings_List = () => (
      <Select
        options={clothing_options}
        value={{ label: this.state.clothing_value }}
        onChange={(clothing_options) => (
          (this.state.activeGenre[3] = clothing_options.value),
          this.handleChange(),this.setState({ clothing_value: clothing_options.label })
        )}
      />
    );
    return (
      <>
        <div className="features">
          <div className="filter-box">
            <div className="dropdown-container">
              <h2>Facials</h2>
              <h2>Accessories</h2>
              <h2>Items</h2>
              <h2>Clothings</h2>
            </div>

            <div className="dropdown-container">
              <Facial_List />
              <Accessories_List />
              <Items_List />
              <Clothings_List />
            </div>
          </div>

          {/* <button
        className={this.state.activeGenre === "" ? "active" : ""}
        onClick={() => (
            this.setState({ activeGenre: "" }), this.change("")
        )}
    >
        All
    </button>
    <button
        className={this.state.activeGenre === "Angry" ? "active" : ""}
        onClick={() => (
            this.setState({ activeGenre: "Angry" }), this.change("Angry")
        )}
    >
        Angry
    </button>
    <button
        className={this.state.activeGenre === "Questioning" ? "active" : ""}
        onClick={() => (
            this.setState({ activeGenre: "Questioning" }),
            this.change("Questioning")
        )}
    >
        Questioning
    </button> */}
        </div>
        <motion.div layout className="popular-movie">
          <AnimatePresence>
            {this.state.filter.map((bunny) => {
              console.log(bunny)
              return <Movie key={bunny[0].name} movie={bunny}></Movie>;
            })}
          </AnimatePresence>
        </motion.div>
      </>
    );
  }
}
