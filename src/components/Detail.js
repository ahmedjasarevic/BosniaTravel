import { useState, useEffect } from "react";
import { getDatabase, ref, onValue } from "firebase/database";
import { firebaseConfig } from "./firebaseConfig.js";
import { initializeApp } from "firebase/app";
import { useParams } from "react-router-dom";

initializeApp(firebaseConfig);

const Detail = () => {
  const { title } = useParams();
  const [tourData, setTourData] = useState({});

  useEffect(() => {
    const fetchTourData = async () => {
      try {
        const db = getDatabase();
        const toursRef = ref(db, "cityData");

        onValue(toursRef, (snapshot) => {
          const data = snapshot.val();
          const tours = data ? Object.values(data) : [];
          const tour = tours.find((tour) => tour.title === title);
          setTourData(tour || {});
        });
      } catch (error) {
        console.error("Error fetching tour data:", error);
      }
    };

    fetchTourData();
  }, [title]);

  return (
    <main className="main" id="main">
      <section
        className="section tour-details"
        style={{ backgroundImage: `url(${tourData.image})` }}
      >
        <div className="tour-details__overlay">
          <h1
            className="tour-details__title hero__title"
            style={{ textTransform: "uppercase" }}
          >
            {tourData.title}
          </h1>
        </div>
      </section>

      <section className="section tour-details-content">
        <div className="tour-details-content__container">
          <h2 className="tour-details-content__title">{tourData.subtitle}</h2>
          <p className="tour-details-content__description">
            {tourData.description}
          </p>
        </div>
      </section>
    </main>
  );
};

export default Detail;
