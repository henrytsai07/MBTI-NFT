import React from 'react'
import { useEffect, useState } from "react";
import Movie from '../components/movie';
import Filter from '../functions/Filter';
import { motion, AnimatePresence } from "framer-motion";
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDNKSynRj4goadMl-4sxR6bm4X57NkCxk8",
  authDomain: "mbti-bunny.firebaseapp.com",
  databaseURL: "https://mbti-bunny-default-rtdb.firebaseio.com",
  projectId: "mbti-bunny",
  storageBucket: "mbti-bunny.appspot.com",
  messagingSenderId: "319584350690",
  appId: "1:319584350690:web:5ed06e6ba3c179f81d09bb",
  measurementId: "G-4QH551KWXG"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export default function Features() {
    const [popular, setPopular] = useState([]);
    const [filtered, setFiltered] = useState([]);
    const [activeGenre, setActiveGenre] = useState(0);
    useEffect(() => {
        fetchPopular();
    }, []);
    const fetchPopular = async () => {
        const data = await fetch("https://api.themoviedb.org/3/movie/popular?api_key=5849c82e3c534a827e98b35ba6af8b17&language=en-US&page=1");
        
        const movies = await data.json();
        setPopular(movies.results);
        setFiltered(movies.results);
};

  return (
      <div className='features'>
          <Filter popular={popular} setFiltered={setFiltered} activeGenre={activeGenre} setActiveGenre={setActiveGenre}/>
          <motion.div layout className='popular-movie'>
              <AnimatePresence>
              {filtered.map(movie => {
                  return <Movie key={movie.id} movie={movie} />;
              })}
                </AnimatePresence>
          </motion.div>
    </div>
  )
}

