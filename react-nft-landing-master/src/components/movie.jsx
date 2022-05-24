import { motion } from "framer-motion";
function Movie({ movie }) {
    return (
        <motion.div layout animate={{ opacity: 1, scale: 1 }} initial={{ opacity: 0, scale: 0 }} exit={{ opacity: 0, sacle: 0 }}>
            <div className="picture-card">
            <h2>{movie.name}</h2>
                <img className="filter_image" src={"https://gateway.pinata.cloud/ipfs" + movie.image.substring(6)} alt= "image loading error" />
                </div>
        </motion.div>
    )
}
export default Movie;