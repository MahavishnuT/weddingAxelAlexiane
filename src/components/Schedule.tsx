import './Schedule.css';

const EVENTS = [
  {
    time: '16h00',
    title: 'Cérémonie',
    lieu: 'Eglise Saint Etienne de Castries',
    icon: '💍',
  },
  {
    time: '18h00',
    title: "Vin d'honneur et soirée",
    lieu: "Château Puech Haut, Saint Drézéry",
    icon: '🥂',
  },
  {
    time: 'Lendemain - 11h00',
    title: 'Brunch',
    lieu: 'Château Puech Haut, Saint Drézéry',
    icon: '🍽️',
  },
];

const Schedule = () => {

  return (
    <section className="schedule" id="schedule">
      <div className="schedule-container">
        <h2>Programme de la journée</h2>
        <p className="schedule-subtitle">
          Un moment inoubliable à partager ensemble
        </p>

        <div className="timeline">
          {EVENTS.map((event, index) => (
            <div key={index} className="timeline-item">
              <div className="timeline-icon">{event.icon}</div>
              <div className="timeline-content">
                <div className="timeline-time">{event.time}</div>
                <h3>{event.title}</h3>
                <p>{event.lieu}</p>
              </div>
              {index < EVENTS.length - 1 && (
                <div className="timeline-line"></div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Schedule;
