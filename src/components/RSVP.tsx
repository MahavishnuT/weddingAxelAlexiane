import { useState } from 'react';
import './RSVP.css';

interface FormData {
  name: string;
  email: string;
  pot: string;
  diner: string;
  brunch: string;
  dietaryRestrictions: string;
}

const RSVP = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    pot: '',
    diner: '',
    brunch: '',
    dietaryRestrictions: '',
  });

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >,
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('RSVP Data:', formData);
    alert('Merci pour votre réponse ! Nous avons hâte de vous voir !');
  };

  return (
    <section className="rsvp" id="rsvp">
      <div className="rsvp-container">
        <h2>Confirmez votre présence</h2>
        <p className="rsvp-subtitle">
          Nous serions ravis de vous compter parmi nous
        </p>

        <form onSubmit={handleSubmit} className="rsvp-form">
          <div className="form-group">
            <label htmlFor="name">Nom et Prénom</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>

          <div className="rsvp-events">
            <div className="event-item">
              <label htmlFor="pot">Pot de bienvenue</label>
              <select
                id="pot"
                name="pot"
                value={formData.pot}
                onChange={handleChange}
                required
              >
                <option value="">Sélectionnez...</option>
                <option value="oui">Oui, je serai présent(e)</option>
                <option value="non">Non, je ne pourrai pas venir</option>
              </select>
            </div>

            <div className="event-item">
              <label htmlFor="diner">Dîner</label>
              <select
                id="diner"
                name="diner"
                value={formData.diner}
                onChange={handleChange}
                required
              >
                <option value="">Sélectionnez...</option>
                <option value="oui">Oui, je serai présent(e)</option>
                <option value="non">Non, je ne pourrai pas venir</option>
              </select>
            </div>

            <div className="event-item">
              <label htmlFor="brunch">Brunch</label>
              <select
                id="brunch"
                name="brunch"
                value={formData.brunch}
                onChange={handleChange}
                required
              >
                <option value="">Sélectionnez...</option>
                <option value="oui">Oui, je serai présent(e)</option>
                <option value="non">Non, je ne pourrai pas venir</option>
              </select>
            </div>
          </div>

          <div className="form-group">
            <label htmlFor="dietaryRestrictions">
              Régimes alimentaires / Allergies
            </label>
            <textarea
              id="dietaryRestrictions"
              name="dietaryRestrictions"
              value={formData.dietaryRestrictions}
              onChange={handleChange}
              placeholder="Végétarien, végétalien, sans gluten, allergies..."
              rows={4}
            />
          </div>

          <button type="submit" className="submit-btn">
            Confirmer ma présence
          </button>
        </form>
      </div>
    </section>
  );
};

export default RSVP;
