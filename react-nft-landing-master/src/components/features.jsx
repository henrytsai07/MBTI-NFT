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
const options = [
  { value: "", label: "All" },
  { value: "Questioning", label: "Questioning" },
  { value: "Angry", label: "Angry" },
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
  handleChange = (options) => {
    this.changeFacial(options.value);
    this.changeAccessories(options.value);

    this.setState({ value: options.value });
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
      console.log(this.state.activeGenre);


      if (this.state.activeGenre === []) {
        this.setState({ filter: this.state.popular });
        alert();

        return;
      }
      // setFiltered(popular);
    });
  }
  changeFacial(genre) {
    this.state.activeGenre[0] = genre;
    console.log(this.state.activeGenre);
    const filtered = this.state.popular.filter(
      (movie) => movie.data.Facial === this.state.activeGenre
    );

    console.log(filtered);
    if (this.state.activeGenre === ['']) {
      this.state.filter = this.state.popular;
      return;
    }
    this.state.filter = filtered;
  }
  changeAccessories(genre) {
    this.state.activeGenre[1] = genre;
    console.log(this.state.activeGenre);
    const filtered = this.state.popular.filter(
      (movie) => movie.data.Facial === this.state.activeGenre
    );

    console.log(filtered);
    if (this.state.activeGenre === ['']) {
      this.state.filter = this.state.popular;
      return;
    }
    this.state.filter = filtered;
  }
  changeItems(genre) {
    this.state.activeGenre[2] = genre;
    console.log(this.state.activeGenre);
    const filtered = this.state.popular.filter(
      (movie) => movie.data.Facial === this.state.activeGenre
    );

    console.log(filtered);
    if (this.state.activeGenre === ['']) {
      this.state.filter = this.state.popular;
      return;
    }
    this.state.filter = filtered;
  }
  changeClothing(genre) {
    this.state.activeGenre[3] = genre;
    console.log(this.state.activeGenre);
    const filtered = this.state.popular.filter(
      (movie) => movie.data.Facial === this.state.activeGenre
    );

    console.log(filtered);
    if (this.state.activeGenre === ['']) {
      this.state.filter = this.state.popular;
      return;
    }
    this.state.filter = filtered;
  }

  render() {
    const Facial_List = () => (
      <Select
        options={options}
        value={this.state.value}
        onChange={this.handleChange}
        onClick={() => (
          this.setState({ activeGenre: this.state.value }),
          this.changeFacial(this.state.value)
        )}
        
      />
    );
    const Accessories_List = () => (
      <Select
        options={options}
        value={this.state.value}
        onChange={this.handleChange}
        onClick={() => (
          this.setState({ activeGenre: this.state.value }),
          this.changeAccessories(this.state.value)
        )}
        
      />
    );
    const Items_List = () => (
      <Select
        options={options}
        value={this.state.value}
        onChange={this.changeItems(this.state.value)}
        onClick={() => (
          this.setState({ activeGenre: this.state.value })
          //this.changeItems(this.state.value)
        )}
        
      />
    );
    const Clothings_List = () => (
      <Select
        options={options}
        value={this.state.value}
        onChange={this.handleChange}
        onClick={() => (
          this.setState({ activeGenre: this.state.value }),
          this.changeClothing(this.state.value)
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
              return <Movie key={bunny.data.Name} movie={bunny}></Movie>;
            })}
          </AnimatePresence>
        </motion.div>
      </>
    );
  }
}
