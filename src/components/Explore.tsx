import './Explore.css';

const Explore = () => {
  return (
    <section className="explore" id="explore">
      <div className="explore-container">
        <h2>Explorer la région</h2>
        <p className="explore-intro">
          Profitez du voyage pour découvrir les trésors qui vous entourent.
        </p>

        <div className="explore-region">
          <div className="explore-region-header">
            <span className="explore-emoji">🦩</span>
            <h3>Escapade en Camargue</h3>
          </div>
          <div className="explore-items">
            <div className="explore-item">
              <strong>Aigues-Mortes & ses Salins</strong>
              <p>
                Montez sur les remparts de cette cité médiévale puis admirez les
                eaux roses spectaculaires du Salin en petit train ou à vélo. À
                rapporter : la Fougasse d'Aigues-Mortes (brioche à la fleur
                d'oranger) chez Olmeda.
              </p>
            </div>
            <div className="explore-item">
              <strong>Parc Ornithologique du Pont de Gau</strong>
              <p>
                Le meilleur endroit pour observer des centaines de flamants
                roses en liberté, de très près, sur des sentiers aménagés.
              </p>
            </div>
            <div className="explore-item">
              <strong>Les Saintes-Maries-de-la-Mer</strong>
              <p>
                Montez sur le toit de l'église fortifiée pour contempler
                l'horizon, ou offrez-vous une balade à cheval au coucher du
                soleil. La Manade des Baumelles et le Domaine de Méjanes
                proposent aussi des immersions avec les Gardians.
              </p>
            </div>
          </div>
        </div>

        <div className="explore-region">
          <div className="explore-region-header">
            <span className="explore-emoji">🏛️</span>
            <h3>Trésors du Gard</h3>
          </div>
          <div className="explore-items">
            <div className="explore-item">
              <strong>Le Pont du Gard & Uzès</strong>
              <p>
                Le monument antique le plus visité de France — on peut s'y
                baigner ou louer des canoës. À 15 min, Uzès et son marché du
                samedi sur la Place aux Herbes, l'un des plus beaux de France.
              </p>
            </div>
            <div className="explore-item">
              <strong>Nîmes la Romaine</strong>{' '}
              <span className="explore-distance">· 35 min</span>
              <p>
                Les Arènes les mieux conservées du monde romain, la Maison
                Carrée (UNESCO) et les Jardins de la Fontaine. À acheter : le
                Petit Pâté de Nîmes aux Halles.
              </p>
            </div>
          </div>
        </div>

        <div className="explore-region">
          <div className="explore-region-header">
            <span className="explore-emoji">🍖</span>
            <h3>Saveurs locales à rapporter</h3>
          </div>
          <div className="explore-items explore-items--grid">
            <div className="explore-item">
              <strong>Riz de Camargue</strong>
              <p>Noir, rouge ou complet — IGP. En vente au Mas de Valériole.</p>
            </div>
            <div className="explore-item">
              <strong>Gardiane de Taureau</strong>
              <p>
                Ragoût mariné au vin rouge, vendu en bocaux dans les épiceries
                fines.
              </p>
            </div>
            <div className="explore-item">
              <strong>Fleur de Sel de Camargue</strong>
              <p>Un incontournable à glisser dans sa valise.</p>
            </div>
            <div className="explore-item">
              <strong>Brandade de Nîmes</strong>
              <p>
                Spécialité à la morue — la maison Raymond Geffroy est la
                référence.
              </p>
            </div>
            <div className="explore-item">
              <strong>Croquignoles d'Uzès</strong>
              <p>Petits biscuits croustillants aux amandes ou à la noisette.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Explore;
