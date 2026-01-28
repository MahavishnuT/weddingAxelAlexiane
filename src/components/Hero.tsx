import './Hero.css';

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-content">
        <h1 className="hero-title">
          <span className="name">Alexiane</span>
          <span className="ampersand">&</span>
          <span className="name">Axel</span>
        </h1>
        <div className="hero-date">27 / 06 / 2026</div>
        <div className="scroll-indicator">
          <div className="scroll-arrow"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
