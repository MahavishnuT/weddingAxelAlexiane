import './Schedule.css';

const Schedule = () => {
  const events = [
    {
      time: '15h00',
      title: 'Cérémonie',
      description: 'Échange des vœux en extérieur',
      icon: '💍',
    },
    {
      time: '16h30',
      title: 'Pot de bienvenue',
      description: "Vin d'honneur et cocktail",
      icon: '🥂',
    },
    {
      time: '19h30',
      title: 'Dîner',
      description: 'Repas et soirée dansante',
      icon: '🍽️',
    },
    {
      time: 'Lendemain - 11h00',
      title: 'Brunch',
      description: 'Petit-déjeuner convivial',
      icon: '☕',
    },
  ];

  return (
    <section className="schedule" id="schedule">
      <div className="schedule-container">
        <h2>Programme de la journée</h2>
        <p className="schedule-subtitle">
          Un moment inoubliable à partager ensemble
        </p>

        <div className="timeline">
          {events.map((event, index) => (
            <div key={index} className="timeline-item">
              <div className="timeline-icon">{event.icon}</div>
              <div className="timeline-content">
                <div className="timeline-time">{event.time}</div>
                <h3>{event.title}</h3>
                <p>{event.description}</p>
              </div>
              {index < events.length - 1 && (
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
