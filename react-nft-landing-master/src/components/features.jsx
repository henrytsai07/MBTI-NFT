import React from "react";
import { useEffect, useState } from "react";
import Movie from "../components/movie";
import Filter from "../functions/Filter";
import { motion, AnimatePresence } from "framer-motion";
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import StartFirebase, { firebase } from "../functions/initFirebase";
import { ref, onValue } from "firebase/database";
import Select from "react-select";

const db = StartFirebase();
const facial_options = [
  { value: "", label: "All" },
  { value: "Judging", label: "Judging" },
  { value: "Shy", label: "Shy" },
  { value: "Excited", label: "Excited" },
  { value: "Please", label: "Please Emoji" },
  { value: "Comic", label: "Comic Eyes" },
  { value: "Motivated", label: "Motivated Face" },
  { value: "Thinking", label: "Thinking Face" }, 
  { value: "Apathetic ", label: "Apathetic" }
];
const accessories_options = [
  { value: "", label: "All" },
  { value: "Headphone", label: "Headphone" },
  { value: "Reversed", label: "Reversed Cap" },
  { value: "Regular", label: "Regular shape hairclip" },
  { value: "Irregular", label: "Irregular shape hairclip" },
  { value: "Glasses", label: "Glasses" },
  { value: "Scarf", label: "Scarf" },
  { value: "Watch", label: "Watch" },
  { value: "Paintbrush", label: "Paintbrush" },
];

const item_options = [
  { value: "", label: "All" },
  { value: "Book", label: "Book" },
  { value: "Beer_Cup", label: "Beer Cup" },
  { value: "Magnifying", label: "Magnifying Glass" },
  { value: "Binocular", label: "Binocular" },
  { value: "Rubik", label: "Rubik's Cube" },
  { value: "Teddy", label: "Teddy Bear" },
  { value: "Check", label: "Checklist/Planning Items" },
  { value: "Camera", label: "Camera" },
];
const clothing_options = [
  { value: "", label: "All" },
  { value: "Pajama", label: "Pajama" },
  { value: "Tropical", label: "Tropical Shirt" },
  { value: "Flannel", label: "Flannel Shirt" },
  { value: "Astro", label: "Astronaut Suit" },
  { value: "Lab", label: "White Labortory Cloth" },
  { value: "Love", label: "I Love MBTI" },
  { value: "Button", label: "White Button-down Shirt" },
  { value: "Dot", label: "Dot Shirt" },
];
export class Features extends React.Component {
  //   const [popular, setPopular] = useState([]);
  //   const [filtered, setFiltered] = useState([]);
  //   const [activeGenre, setActiveGenre] = useState(0);

  constructor() {
    super();
    this.state = {
      popular: [],
      filter: [],
      activeGenre: ['','','',''],
      value: "",
    };
  }
  handleChange = () => {
    console.log(this.state.activeGenre);
    this.state.filter = this.state.popular;


    //initialization
    var empty = true;
    for(var x = 0; x < this.state.activeGenre.length; x++){
      if (this.state.activeGenre[x] !== ""){
        empty = false;
      }
    }
    if (empty === true) {
      this.setState({ filter: this.state.popular });
      return;
    }
    if(this.state.activeGenre[0]!== ""){
      const filtered = this.state.popular.filter(
        (movie) => movie.data.Facial === this.state.activeGenre[0]
      );
      this.setState({ filter: filtered});
    }
    if(this.state.activeGenre[1]!== ""){
      const filtered = this.state.filter.filter(
        (movie) => movie.data.Accessories === this.state.activeGenre[1]
      );
      this.setState({ filter: filtered});
    }
    if(this.state.activeGenre[2]!== ""){
      const filtered = this.state.filter.filter(
        (movie) => movie.data.Item === this.state.activeGenre[2]
      );
      this.setState({ filter: filtered});
    }
    if(this.state.activeGenre[3]!== ""){
      const filtered = this.state.filter.filter(
        (movie) => movie.data.Cloth== this.state.activeGenre[3]
      );
      this.setState({ filter: filtered});
    }
    

    //this.setState({ value: options.value });
  };

  componentDidMount() {
    //fetchPopular();
    const dbRef = ref(db, "Collection");
    onValue(dbRef, (snapshot) => {
      let records = [];
      snapshot.forEach((childSnapshot) => {
        let keyName = childSnapshot.key;
        let data = childSnapshot.val();
        records.push({ key: keyName, data: data });
      });
      this.state.popular = records;
      this.state.filter = records;
      //initialization
      console.log(this.state.popular)
      var empty = true;
      for(var x = 0; x < this.state.activeGenre.length; x++){
        if (this.state.activeGenre[x] !== ""){
          empty = false;
        }
      }
      if (empty === true) {
        this.setState({ filter: this.state.popular });
        return;
      }
      // setFiltered(popular);
    });
  }

  render() {
    const Facial_List = () => (
      <Select
        options={facial_options}
        value={this.state.value}
        onChange={(facial_options) => (
          this.state.activeGenre[0] = facial_options.value,
          this.handleChange())
          }
        
      />
    );
    const Accessories_List = () => (
      <Select
        options={accessories_options}
        value={this.state.value}
        onChange={(accessories_options) => (
          this.state.activeGenre[1] = accessories_options.value,
          this.handleChange())}
        
      />
    );
    const Items_List = () => (
      <Select
        options={item_options}
        value={this.state.value}
        onChange={(item_options) => (
          this.state.activeGenre[2] = item_options.value,
          this.handleChange())}
      />
    );
    const Clothings_List = () => (
      <Select
        options={clothing_options}
        value={this.state.value}
        onChange={(clothing_options) => (
          this.state.activeGenre[3] = clothing_options.value,
          this.handleChange())}
        
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
              return <Movie key={bunny.data.Name} movie={bunny}></Movie>;
            })}
          </AnimatePresence>
        </motion.div>
      </>
    );
  }
}
