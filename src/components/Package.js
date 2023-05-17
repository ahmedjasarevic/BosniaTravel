import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { getDatabase, ref, onValue } from "firebase/database";
import { firebaseConfig } from "./firebaseConfig.js";
import { initializeApp } from "firebase/app";

initializeApp(firebaseConfig);

const Package = () => {
  const [tourData, setTourData] = useState([]);

  useEffect(() => {
    const fetchTourData = async () => {
      try {
        const db = getDatabase();
        const toursRef = ref(db, "cityData");

        onValue(toursRef, (snapshot) => {
          const data = snapshot.val();
          const tours = data ? Object.values(data) : [];
          setTourData(tours);
        });
      } catch (error) {
        console.error("Error fetching tour data:", error);
      }
    };

    fetchTourData();
  }, []);

  return (
    <main className="main" id="main">
      <section
        className="section about-hero"
        style={{ backgroundImage: "url(/media/bg-about.jpg)" }}
        id="hero"
      >
        <h1 className="hero__title">Destinations</h1>
      </section>

      <section className="section tour container">
        <div className="tour__container">
          {tourData.map((tour) => (
            <div className="tour__card" key={tour.title}>
              <img src={tour.image} alt="" className="tour__card-img" />
              <div className="tour__data">
                <h5 className="tour__data-title">{tour.title}</h5>
                <span className="tour__data-subtitle">{tour.title}</span>
              </div>
              <Link
                to={`/destinations/${tour.title}`}
                className="tour__link"
              ></Link>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
};

export default Package;
