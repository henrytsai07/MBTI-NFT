import { motion } from "framer-motion";
function Movie({ movie }) {
  return (
    <motion.div
      animate={{ opacity: 1, scale: 1 }}
      initial={{ opacity: 0, scale: 0 }}
      exit={{ opacity: 0, scale: 0 }}
    >
      <div className="container">
        <div className="cardd">
          <div className="picture-card">
            <h2>{movie[0].name}</h2>
            <img className="filter_image" src={movie[1]} alt="loading error" />
          </div>
          <div className="back-card">
            <h3>{movie[0].type}</h3>
            <h3>{movie[0].attributes[2].value}</h3>
            <h3>{movie[0].attributes[3].value}</h3>
            <h3>{movie[0].attributes[0].value}</h3>
            <h3>{movie[0].attributes[1].value}</h3>
            <button>OpenSea</button>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
export default Movie;
