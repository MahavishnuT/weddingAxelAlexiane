import './Gifts.css';

const Gifts = () => {
  return (
    <section className="gifts" id="gifts">
      <div className="gifts-container">
        <h2>Liste de mariage</h2>
        <p className="gifts-intro">
          Votre présence est le plus beau des cadeaux.
          <br />
          Si vous souhaitez nous faire plaisir, nous avons créé une cagnotte en
          ligne.
        </p>

        <div className="gift-card">
          <div className="gift-icon">🎁</div>
          <h3>Participez à notre projet</h3>
          <p>
            Nous avons créé une cagnotte pour nous aider à réaliser nos projets
            futurs. Chaque contribution, petite ou grande, nous touche
            énormément.
          </p>
          <a
            href="https://tribee.fr/participations/mariage-alexiane-axel"
            target="_blank"
            rel="noopener noreferrer"
            className="gift-link"
          >
            Accéder à la cagnotte
            <span className="arrow">→</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Gifts;
