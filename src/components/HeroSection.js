import React from "react";
import PopularDestinations from "./PopularDestinations";

const HeroSection = () => {
  const getStarted = () => {
    window.scrollTo({
      top: 900,
      behavior: "smooth",
    });
  };

  return (
    <main class="main" id="main">
      <section
        class="section hero"
        style={{ backgroundImage: "url(./media/bg-image.jpg" }}
      >
        <h1 class="hero__title">
          Welcome to Bosnia and Herzegovina
          <br />
        </h1>

        <button onClick={getStarted} class="button button-hero">
          Get Started
        </button>
      </section>

      <PopularDestinations />
    </main>
  );
};

export default HeroSection;
