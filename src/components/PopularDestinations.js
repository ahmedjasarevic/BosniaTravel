import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { getDatabase, ref, onValue } from "firebase/database";
import { firebaseConfig } from "./firebaseConfig.js";
import { initializeApp } from "firebase/app";

initializeApp(firebaseConfig);

const PopularDestinations = () => {
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

  const getRandomTours = (numTours) => {
    if (tourData.length <= numTours) {
      return tourData;
    }

    const shuffledTours = tourData.sort(() => 0.5 - Math.random());
    return shuffledTours.slice(0, numTours);
  };

  const randomTours = getRandomTours(3);
  return (
    <section className="section tour container">
      <h3 className="section-title">Popular Tours</h3>

      <div className="tour__container">
        {randomTours.map((tour) => (
          <div className="tour__card" key={tour.title}>
            <div className="tour__overlay"></div> {/* Overlay element */}
            <img src={tour.image} alt="" className="tour__card-img" />
            <div className="tour__data">
              <h5 className="tour__data-title">{tour.title}</h5>
              <span className="tour__data-subtitle">{tour.subtitle}</span>
            </div>
            <Link
              to={`/destinations/${tour.title}`}
              className="tour__link"
            ></Link>
          </div>
        ))}
      </div>
    </section>
  );
};

export default PopularDestinations;
