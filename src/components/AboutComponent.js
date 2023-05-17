import React from "react";

const AboutComponent = () => {
  return (
    <main class="main" id="main">
      <section
        class="section about-hero"
        style={{ backgroundImage: "url(/media/bg-about.jpg)" }}
        id="hero"
      >
        <h1 class="hero__title">About Bosnia and Herzegovina</h1>
      </section>

      <section class="section about container">
        <div class="about__container">
          <img class="about__img" src="./media/history.png" alt="" />

          <div class="about__data">
            <h3 class="about__data-title">History</h3>
            <p class="about__data-description">
              Bosnia and Herzegovina, country situated in the western Balkan
              Peninsula of Europe. The larger region of Bosnia occupies the
              northern and central parts of the country, and Herzegovina
              occupies the south and southwest. These historical regions do not
              correspond with the two autonomous political entities that were
              established by the internationally brokered Dayton Accords of
              1995: the Republika Srpska (Bosnian Serb Republic), located in the
              north and east, and the Federation of Bosnia and Herzegovina,
              occupying the western and central areas. The capital of the
              country is Sarajevo; important regional cities include Mostar and
              Banja Luka.
            </p>
            <p class="about__data-description">
              The land has often felt the influences of stronger regional powers
              that have vied for control over it, and these influences have
              helped to create Bosnia and Herzegovina’s characteristically rich
              ethnic and religious mix. Islam, Orthodox Christianity, and Roman
              Catholicism are all present, with the three faiths generally
              corresponding to three major ethnic groups: Bosniaks, Serbs, and
              Croats, respectively.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
};

export default AboutComponent;
