import { useState } from 'react';
import './RSVP.css';

interface FormData {
  name: string;
  email: string;
  diner: string;
  dietaryRestrictions: string;
}

const GOOGLE_SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbx5VYClxLP7f1YtQ4adsFVfUKW6vsf_vvPTR4SpxDvZaOtWCYgzfLadPmXbYOUzZszf/exec';

const RSVP = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    diner: '',
    dietaryRestrictions: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      await fetch(GOOGLE_SCRIPT_URL, {
        method: 'POST',
        mode: 'no-cors',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      setFormData({
        name: '',
        email: '',
        diner: '',
        dietaryRestrictions: '',
      });

      alert('Merci pour votre réponse ! Nous avons hâte de vous voir !');
    } catch (error) {
      console.error('Error:', error);
      alert('Une erreur est survenue. Veuillez réessayer.');
    } finally {
      setIsSubmitting(false);
    }
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
            <label htmlFor="name">Nom complet *</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              disabled={isSubmitting}
            />
          </div>

          <div className="form-group">
            <label htmlFor="email">Email *</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              disabled={isSubmitting}
            />
          </div>

          <div className="rsvp-events">

            <div className="event-item">
              <label htmlFor="diner">Dîner</label>
              <select
                id="diner"
                name="diner"
                value={formData.diner}
                onChange={handleChange}
                required
                disabled={isSubmitting}
              >
                <option value="">Choisir</option>
                <option value="oui">Je serai présent(e)</option>
                <option value="non">Je ne serai pas présent(e)</option>
              </select>
            </div>

          </div>

          <div className="form-group">
            <label htmlFor="dietaryRestrictions">
              Restrictions alimentaires
            </label>
            <textarea
              id="dietaryRestrictions"
              name="dietaryRestrictions"
              value={formData.dietaryRestrictions}
              onChange={handleChange}
              rows={4}
              placeholder="Allergies, régimes spéciaux..."
              disabled={isSubmitting}
            />
          </div>

          <button type="submit" className="submit-btn" disabled={isSubmitting}>
            {isSubmitting ? 'Envoi en cours...' : 'Confirmer ma présence'}
          </button>
        </form>
      </div>
    </section>
  );
};

export default RSVP;
