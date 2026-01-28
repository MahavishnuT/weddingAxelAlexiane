import './Accommodation.css';

const Accommodation = () => {
  const accommodations = [
    {
      name: 'Hôtel The Originals, Saint-Aunès',
      distance: '12 km',
      phone: '04 67 10 01 35',
      email: 'contact@hotel-ecoparc.com',
      website: 'www.theoriginalshotels.com/hotels/montpellier-est-ecoparc',
    },
    {
      name: "Mas l'Escale du Coteau, Montaud",
      distance: '4 km',
      email: 'lescaleducoteau@orange.fr',
      phone: '06 80 22 56 67',
    },
    {
      name: 'Hôtel Disini, Castries',
      distance: '7 km',
      phone: '04 67 41 97 86',
      email: 'contact@disini-hotel.com',
      website: 'www.disini-hotel.com/',
    },
    {
      name: 'Clos Bellilocien, Beaulieu',
      distance: '7 km',
      phone: '06 24 50 86 61',
      email: 'closbellilocien@gmail.com',
      website: 'www.closbellilocien.com/',
    },
    {
      name: 'Horizon Resort Massane, Baillargues',
      distance: '14 km',
      phone: '04 67 87 87 87',
      email: 'reception@horizon-resort.com',
      website: 'www.horizon-resort.com/fr/',
    },
    {
      name: 'B&B Hôtel Montpelier Vendargues, Saint-Aunès',
      distance: '12 km',
      website: 'www.hotel-bb.com/fr/hotel/montpellier-vendargues',
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
              </div>
              <div className="accommodation-details">
                <div className="detail-item">
                  <span className="detail-icon">📍</span>
                  <span>{place.distance} du château</span>
                </div>
                {place.phone && (
                  <div className="detail-item">
                    <span className="detail-icon">📞</span>
                    <a href={`tel:${place.phone.replace(/\s/g, '')}`}>
                      {place.phone}
                    </a>
                  </div>
                )}
                {place.email && (
                  <div className="detail-item">
                    <span className="detail-icon">📧</span>
                    <a href={`mailto:${place.email}`}>{place.email}</a>
                  </div>
                )}
                {place.website && (
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
                )}
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
