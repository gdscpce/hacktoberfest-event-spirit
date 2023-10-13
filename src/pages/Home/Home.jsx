import React from "react";
import "./Home.css";
import Card from "../../Components/Card/Card";

const Home = () => {
  return (
    <>
      <section className="home">
        <h1 className="home__heading">
          <span style={{ color: "#5e5e6b" }}>Booo!</span> Welcome to the{" "}
          <span style={{ color: "coral" }}>event</span> Spirit.
        </h1>
        <p className="home__desc">
          Event Spirit is a place where you can find all the events happening
          around you.
        </p>
        <div className="home__buttons">
          <button>Explore</button>
          <button>Host Event</button>
        </div>
      </section>
      <section className="new__events"> 
          <h1 className="events__heading"><span style={{ color: "coral" }}>Events</span>  Happening near you</h1>
          <div className="event__cards">
          <Card eventName={"HacktoberFest"} eventDate={"15th October 2023"} organizer={"GDSC PCE"}/>
          <Card eventName={"Android Camp"} eventDate={"15th November 2023"} organizer={"GDSC PCE"}/>
          </div>
      </section>
    </>
  );
};

export default Home;
