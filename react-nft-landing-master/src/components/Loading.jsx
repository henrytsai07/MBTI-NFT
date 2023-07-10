import React from "react";
import ReactLoading from "react-loading";
import carrot from "../assets/carrot.png";
import { motion } from "framer-motion"
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


export default function Loading() {
  return (
    <Container>
      <Row>
        <Col>
          <motion.div className="loading" initial={{ opacity: 0 }} animate={{ opacity: 1 }}  >
            <ReactLoading
              className="circle"
              type="spin"
              color="orange"
              width="20vw"
            />
            <motion.img className="carrot" src={carrot} alt="carrot" />

          </motion.div>
        </Col>
      </Row>
    </Container>

  );
}
