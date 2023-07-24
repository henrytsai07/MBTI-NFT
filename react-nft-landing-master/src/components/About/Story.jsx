import React from "react";
import home from "../../assets/question_rabbit.png";
// import animate from "../assets/bunny_gif.gif"
import story1 from "../../assets/New Space Themed/story1.png"
import story2 from "../../assets/New Space Themed/story2.png"
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


export default function Home() {
  return (
    <div class="story">
      <div class="container">
        <div class="row">
          <div class="col-md-4">
            <div class="left_pic">
              <img className="left_pic" src={story1} />
            </div>
          </div>
          <div class="col-md-4">
            <div class="content">
              <div className="content">
                {/* <p className="sub-title">Launching Soon</p> */}
                <h1 className="title">Story</h1>
                <p className="description">
                  Don't miss out on the release of our new NFT. Sign up below to
                  recieve updates when we go live.
                </p>
              </div>
            </div>
          </div>
          <div class="col-md-4">
            <div class="right_pic">
              <img className="right_pic" src={story2} />
            </div>
          </div>
        </div>
      </div>
    </div>


  );
}

// <Container>
//         <Row>
//           <Col><img className="left_pic" src={story1} /></Col>
//           <Col><div className="content">
//             {/* <p className="sub-title">Launching Soon</p> */}
//             <h1 className="title">Story</h1>
//             <p className="description">
//               Don't miss out on the release of our new NFT. Sign up below to
//               recieve updates when we go live.
//             </p>
//           </div></Col>
//           <Col>
//           </Col>


//         </Row>
//       </Container>