import { useState } from 'react'
import { company } from '../data/site'
import './Contact.css'

export default function Contact() {
  const [sent, setSent] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    setSent(true)
  }

  return (
    <section className="section section--dark" id="contact">
      <div className="container contact__grid">
        <div className="contact__info">
          <p className="eyebrow eyebrow--light">Get In Touch</p>
          <h2 className="section__title">Let's talk about your project.</h2>
          <p className="contact__lede">
            Send us your plans, scope, or questions. Our estimating team typically responds within
            one business day.
          </p>

          <ul className="contact__details">
            <li>
              <span className="contact__label">Phone</span>
              <a href={`tel:${company.phone.replace(/[^\d]/g, '')}`}>{company.phone}</a>
            </li>
            <li>
              <span className="contact__label">Email</span>
              <a href={`mailto:${company.email}`}>{company.email}</a>
            </li>
            <li>
              <span className="contact__label">Office</span>
              <span>{company.address}</span>
            </li>
            <li>
              <span className="contact__label">Hours</span>
              <span>{company.hours}</span>
            </li>
          </ul>
        </div>

        <div className="contact__formwrap">
          {sent ? (
            <div className="contact__success">
              <h3>Thank you.</h3>
              <p>
                Your message has been received. A member of our team will reach out shortly to
                discuss your project.
              </p>
            </div>
          ) : (
            <form className="form" onSubmit={handleSubmit}>
              <div className="form__row">
                <label className="form__field">
                  <span>Name</span>
                  <input type="text" name="name" required placeholder="Jane Contractor" />
                </label>
                <label className="form__field">
                  <span>Company</span>
                  <input type="text" name="company" placeholder="Your organization" />
                </label>
              </div>
              <div className="form__row">
                <label className="form__field">
                  <span>Email</span>
                  <input type="email" name="email" required placeholder="you@company.com" />
                </label>
                <label className="form__field">
                  <span>Phone</span>
                  <input type="tel" name="phone" placeholder="(555) 000-0000" />
                </label>
              </div>
              <label className="form__field">
                <span>Project Type</span>
                <select name="type" defaultValue="">
                  <option value="" disabled>
                    Select a scope
                  </option>
                  <option>Earthwork &amp; Grading</option>
                  <option>Roadways &amp; Highways</option>
                  <option>Bridges &amp; Structures</option>
                  <option>Underground Utilities</option>
                  <option>Site Development</option>
                  <option>Other</option>
                </select>
              </label>
              <label className="form__field">
                <span>Project Details</span>
                <textarea
                  name="message"
                  rows="4"
                  placeholder="Tell us about scope, location, and timeline…"
                />
              </label>
              <button type="submit" className="btn btn--accent btn--lg form__submit">
                Send Message
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  )
}
