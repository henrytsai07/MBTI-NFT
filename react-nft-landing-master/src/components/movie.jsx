import { motion } from "framer-motion";
function Movie({ movie }) {
    return (
        <motion.div layout animate={{ opacity: 1, scale: 1 }} initial={{ opacity: 0, scale: 0 }} exit={{opacity: 0, sacle: 0 }}>
            <h2>{movie.title}</h2>
            <img className="filter_image" src={'https://image.tmdb.org/t/p/w500' + movie.backdrop_path} alt="" />
        </motion.div>
    )
}
export default Movie;