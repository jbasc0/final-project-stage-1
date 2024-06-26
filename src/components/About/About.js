import "./About.css";

const About = ({ author }) => {
  return (
    <div className="about">
      {!author ? (
        <div className="about__content">
          <h1 className="about__title">Welcome to Pokedex</h1>
          <p className="about__info">
            This app provides you with the basic essential info you need on all
            pokemon. Select the generation of pokemon you would like to view to
            get started. From there, you will be able to click on each pokemon
            to view their index # and type.
          </p>
        </div>
      ) : (
        <div>
          <h1 className="about__title">About the Author</h1>
          <p className="about__info">
            Jovito Basco is an aspiring software engineer. His love of pokemon
            led to the creation of this application. He started collecting
            pokemon cards and playing pokemon video games as a kid. Around 2006,
            he went on a pokemon hiatus for a few years. Recently after
            discovering the value of some of his old cards, his interest in
            pokemon peaked once again. He soon discovered that the Pokeverse has
            increased exponentially and realized how hard it was to keep track
            of each and every pokemon. This is how the idea of this application
            came about. He wanted an easier way to find out which generation
            each pokemon belonged to so that he could organize his pokemon cards
            accordingly.
          </p>
        </div>
      )}
    </div>
  );
};
export default About;
