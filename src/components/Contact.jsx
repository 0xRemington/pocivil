import { useState } from 'react'
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
          <p className="eyebrow eyebrow--light">Lorem Ipsum</p>
          <h2 className="section__title">Consectetur adipiscing elit sed do.</h2>
          <p className="contact__lede">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua.
          </p>

          <ul className="contact__details">
            <li>
              <span className="contact__label">Lorem</span>
              <span>Consectetur adipiscing</span>
            </li>
            <li>
              <span className="contact__label">Ipsum</span>
              <span>Sed do eiusmod tempor</span>
            </li>
            <li>
              <span className="contact__label">Dolor</span>
              <span>Ut labore et dolore magna aliqua</span>
            </li>
            <li>
              <span className="contact__label">Amet</span>
              <span>Ut enim ad minim veniam</span>
            </li>
          </ul>
        </div>

        <div className="contact__formwrap">
          {sent ? (
            <div className="contact__success">
              <h3>Lorem ipsum.</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                incididunt ut labore et dolore magna aliqua.
              </p>
            </div>
          ) : (
            <form className="form" onSubmit={handleSubmit}>
              <div className="form__row">
                <label className="form__field">
                  <span>Lorem</span>
                  <input type="text" name="name" required placeholder="Lorem ipsum" />
                </label>
                <label className="form__field">
                  <span>Ipsum</span>
                  <input type="text" name="company" placeholder="Dolor sit amet" />
                </label>
              </div>
              <div className="form__row">
                <label className="form__field">
                  <span>Dolor</span>
                  <input type="email" name="email" required placeholder="lorem@ipsum.com" />
                </label>
                <label className="form__field">
                  <span>Amet</span>
                  <input type="tel" name="phone" placeholder="(000) 000-0000" />
                </label>
              </div>
              <label className="form__field">
                <span>Consectetur</span>
                <select name="type" defaultValue="">
                  <option value="" disabled>
                    Lorem ipsum dolor
                  </option>
                  <option>Lorem Ipsum</option>
                  <option>Dolor Sit Amet</option>
                  <option>Consectetur Adipiscing</option>
                  <option>Sed Do Eiusmod</option>
                  <option>Tempor Incididunt</option>
                  <option>Ut Labore</option>
                </select>
              </label>
              <label className="form__field">
                <span>Adipiscing Elit</span>
                <textarea
                  name="message"
                  rows="4"
                  placeholder="Lorem ipsum dolor sit amet, consectetur…"
                />
              </label>
              <button type="submit" className="btn btn--accent btn--lg form__submit">
                Lorem Ipsum
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  )
}
