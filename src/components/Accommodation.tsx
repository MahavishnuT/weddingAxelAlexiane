import './Accommodation.css';

const Accommodation = () => {
  const accommodations = [
    {
      name: 'Hôtel Le Château',
      type: 'Hôtel ★★★★',
      distance: '2 km',
      price: 'À partir de 120€/nuit',
      phone: '01 23 45 67 89',
      website: 'www.hotellechateau.fr',
    },
    {
      name: "Chambres d'hôtes Les Roses",
      type: "Chambres d'hôtes",
      distance: '3 km',
      price: 'À partir de 80€/nuit',
      phone: '01 23 45 67 90',
      website: 'www.lesroses.fr',
    },
    {
      name: 'Gîte de la Vallée',
      type: 'Gîte',
      distance: '5 km',
      price: 'À partir de 100€/nuit',
      phone: '01 23 45 67 91',
      website: 'www.gitevallee.fr',
    },
    {
      name: 'Hôtel du Parc',
      type: 'Hôtel ★★★',
      distance: '4 km',
      price: 'À partir de 90€/nuit',
      phone: '01 23 45 67 92',
      website: 'www.hotelduparc.fr',
    },
  ];

  return (
    <section className="accommodation" id="accommodation">
      <div className="accommodation-container">
        <h2>Hébergements</h2>
        <p className="accommodation-subtitle">
          Voici une sélection d'hébergements à proximité du lieu de réception
        </p>

        <div className="accommodation-grid">
          {accommodations.map((place, index) => (
            <div key={index} className="accommodation-card">
              <div className="accommodation-header">
                <h3>{place.name}</h3>
                <span className="accommodation-type">{place.type}</span>
              </div>
              <div className="accommodation-details">
                <div className="detail-item">
                  <span className="detail-icon">📍</span>
                  <span>{place.distance} du lieu</span>
                </div>
                <div className="detail-item">
                  <span className="detail-icon">💰</span>
                  <span>{place.price}</span>
                </div>
                <div className="detail-item">
                  <span className="detail-icon">📞</span>
                  <a href={`tel:${place.phone.replace(/\s/g, '')}`}>
                    {place.phone}
                  </a>
                </div>
                <div className="detail-item">
                  <span className="detail-icon">🌐</span>
                  <a
                    href={`https://${place.website}`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {place.website}
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="accommodation-note">
          <p>
            💡 <strong>Conseil :</strong> Nous vous recommandons de réserver
            rapidement, les disponibilités peuvent être limitées pendant la
            saison estivale.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Accommodation;
