import { CardOne, CardThree, CardTwo } from "../card";
import "./abt.css";

function About() {
  return (
    <div className="mainCont">
      <div className="abtContent">
        <h1 className="onlyHeadings">ABOUT US</h1>
        <span className="spntxt">
          Welcome to our travel recommendation website, your go-to destination
          for personalized travel insights and expert advice. Our mission is to
          inspire and guide travelers to explore the world with confidence and
          ease.<br></br>Our platform offers a seamless and user-friendly
          experience, making it easy for you to plan your next adventure. From
          hidden gems to popular attractions, we provide comprehensive
          information to help you make informed decisions.
        </span>
      </div>
      <div className="team">
        <div className="cardheadtxt">
          <h1 className="onlyHeadings">OUR TEAM</h1>
        </div>
        <div className="card-container">
          <CardOne />
          <CardTwo />
          <CardThree />
        </div>
      </div>
    </div>
  );
}

export default About;
