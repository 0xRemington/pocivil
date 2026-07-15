import { useState } from 'react'
import { company } from '../data/site'
import Card from '../styles/elements/Card'
import './Contact.css'

const projectTypes = [
  'Roadway / Highway',
  'Bridge / Structure',
  'Earthwork / Grading',
  'Underground Utilities',
  'Demolition / Clearing',
  'Site Development',
]

export default function Contact() {
  const [sent, setSent] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()

    const data = new FormData(e.target)
    const get = (field) => (data.get(field) || '').trim()
    const name = get('name')
    const type = get('type')

    const subject = ['Bid Request', type, name].filter(Boolean).join(' — ')

    const bodyLines = [
      ['Name', name],
      ['Company', get('company')],
      ['Email', get('email')],
      ['Phone', get('phone')],
      ['Project Type', type],
      ['Details', get('message')],
    ]
      .filter(([, value]) => value)
      .map(([label, value]) => `${label}: ${value}`)

    const mailtoUrl = `mailto:${company.email}?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(bodyLines.join('\n'))}`

    window.location.href = mailtoUrl
    setSent(true)
  }

  // tel: needs the raw digits; the label keeps the formatted number
  const telHref = `tel:${company.phone.replace(/[^0-9]/g, '')}`

  return (
    <section className="section section--dark contact" id="contact">
      <div className="contact__bg" aria-hidden="true" />
      <div className="container contact__grid">
        <div className="contact__info">
          <p className="eyebrow eyebrow--light">Request a Bid</p>
          <h2 className="section__title">Send us your plans — we&rsquo;ll send you a number.</h2>
          <p className="contact__lede">
            Owners and general contractors: put {company.name} on your bid list. Share your drawings
            and scope, and our estimating team gets back to you — with a real takeoff, not a
            placeholder — within two business days.
          </p>

          <ul className="contact__details">
            <li>
              <span className="contact__label">Phone</span>
              <a href={telHref}>{company.phone}</a>
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

        {/* Static stage: it carries the perspective and the hover, so the
            tilting slab never slides out from under the pointer (see the
            note in Services.css) */}
        <div className="contact__stage">
          <Card className="card--amber contact__card">
            <span className="contact__titleblock" aria-hidden="true">
              <span className="contact__tb-name">Bid Request</span>
              <span className="contact__tb-sheet">C-001</span>
            </span>

            {sent ? (
              <div className="contact__success" role="status">
                <span className="contact__success-mark" aria-hidden="true">
                  &#10003;
                </span>
                <h3>Your bid request is ready to send.</h3>
                <p>
                  We&rsquo;ve opened an email draft addressed to our estimating team in your mail
                  client — hit send and it&rsquo;s in our hands, with a real takeoff back to you
                  within two business days. If no draft appeared, email us straight at{' '}
                  <a href={`mailto:${company.email}`}>{company.email}</a> or call{' '}
                  <a href={telHref}>{company.phone}</a>.
                </p>
              </div>
            ) : (
              <form className="form" onSubmit={handleSubmit}>
                <div className="form__row">
                  <label className="form__field">
                    <span>Full Name</span>
                    <input type="text" name="name" required placeholder="Jane Contractor" />
                  </label>
                  <label className="form__field">
                    <span>Company</span>
                    <input type="text" name="company" placeholder="Company or agency" />
                  </label>
                </div>
                <div className="form__row">
                  <label className="form__field">
                    <span>Email</span>
                    <input type="email" name="email" required placeholder="you@company.com" />
                  </label>
                  <label className="form__field">
                    <span>Phone</span>
                    <input type="tel" name="phone" placeholder="(709) 000-0000" />
                  </label>
                </div>
                <label className="form__field">
                  <span>Project Type</span>
                  <select name="type" defaultValue="" required>
                    <option value="" disabled>
                      Select a discipline
                    </option>
                    {projectTypes.map((type) => (
                      <option key={type}>{type}</option>
                    ))}
                  </select>
                </label>
                <label className="form__field">
                  <span>Project Details</span>
                  <textarea
                    name="message"
                    rows="4"
                    placeholder="Location, bid date, scope, and any plan links — the more detail, the sharper the estimate."
                  />
                </label>
                <button type="submit" className="btn btn--accent btn--lg form__submit">
                  Send Bid Request
                </button>
              </form>
            )}
          </Card>
        </div>
      </div>
    </section>
  )
}
