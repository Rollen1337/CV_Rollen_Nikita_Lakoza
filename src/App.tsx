import './App.css'
import { LanguageSwitcher } from './components/LanguageSwitcher'
import { ThemeSwitcher } from './components/ThemeSwitcher'
import { Section } from './components/Section'
import { useI18n } from './i18n'

function App() {
  const { translation } = useI18n()
  const { cv, layout } = translation
  const {
    metadata,
    contact,
    about,
    experience,
    tournaments,
    contributions,
    production,
    tools,
    training,
    links,
    shortVersion,
    footer,
  } = cv

  return (
    <div className="app">
      <a className="skip-link" href="#main-content">
        {layout.skipToMain}
      </a>
      <div className="app__inner">
        <header className="page-header" aria-labelledby="cv-title">
          <div className="page-header__bar" role="presentation">
            <div className="page-header__spacer" aria-hidden="true" />
            <div className="page-header__actions" role="group" aria-label={layout.headerControlsLabel}>
              <ThemeSwitcher />
              <LanguageSwitcher />
            </div>
          </div>

          <div className="page-hero">
            <div className="page-hero__profile">
              <figure className="page-hero__media">
                <img
                  src="https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=320&q=80"
                  alt={metadata.name}
                />
              </figure>
              <div className="page-hero__intro">
                <span className="page-hero__eyebrow">{metadata.headline}</span>
                <h1 className="page-hero__title" id="cv-title">
                  {metadata.name}
                </h1>
                {metadata.details.length > 0 && (
                  <ul className="page-hero__details" aria-label={metadata.detailsLabel}>
                    {metadata.details.map((detail) => (
                      <li key={detail.label}>
                        <span className="page-hero__details-label">{detail.label}</span>
                        <span>{detail.value}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </div>
            <aside className="page-hero__contacts" aria-labelledby="contact-title">
              <h2 className="section-title" id="contact-title">
                {contact.title}
              </h2>
              <ul className="contact-list">
                {contact.items.map((item) => (
                  <li key={item.label} className="contact-list__item">
                    <span className="contact-list__icon material-symbols-rounded" aria-hidden="true">
                      {item.icon}
                    </span>
                    <div className="contact-list__content">
                      <span className="contact-list__label">{item.label}</span>
                      <a
                        className="contact-list__link"
                        href={item.href}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {item.value}
                      </a>
                    </div>
                  </li>
                ))}
              </ul>
            </aside>
          </div>
        </header>

        <main className="page-content" id="main-content">
          <Section id="about" title={about.title} icon="person">
            <div className="section-text">
              {about.intro.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
            <div className="feature-grid">
              <div className="feature-grid__main">
                <h3 className="section-subtitle">{about.responsibilitiesTitle}</h3>
                <ul className="checklist">
                  {about.responsibilities.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
              <aside className="feature-highlight">
                <span className="feature-highlight__icon material-symbols-rounded" aria-hidden="true">
                  stars
                </span>
                <p>{about.highlight}</p>
              </aside>
            </div>
            <p className="section-note">{about.locationNote}</p>
          </Section>

          <Section id="experience" title={experience.title} icon="stadia_controller">
            <div className="experience-list">
              {experience.items.map((item) => (
                <article key={`${item.company}-${item.role}`} className="experience-card">
                  <header className="experience-card__header">
                    <p className="experience-card__company">{item.company}</p>
                    <h3 className="experience-card__title">{item.role}</h3>
                    <p className="experience-card__meta">
                      <span>{item.period}</span>
                      <span aria-hidden="true">·</span>
                      <span>{item.format}</span>
                    </p>
                  </header>
                  <h4 className="experience-card__subtitle">{item.responsibilitiesTitle}</h4>
                  <ul className="experience-card__achievements">
                    {item.responsibilities.map((responsibility) => (
                      <li key={responsibility}>{responsibility}</li>
                    ))}
                  </ul>
                </article>
              ))}
            </div>
          </Section>

          <Section id="tournaments" title={tournaments.title} icon="emoji_events">
            <p className="section-intro">{tournaments.intro}</p>
            <div className="tournament-grid">
              {tournaments.categories.map((category) => (
                <section key={category.title} className="tournament-card" aria-label={category.title}>
                  <h3 className="section-subtitle">{category.title}</h3>
                  <ul className="tournament-list">
                    {category.items.map((event) => (
                      <li key={event}>{event}</li>
                    ))}
                  </ul>
                </section>
              ))}
            </div>
          </Section>

          <Section id="contributions" title={contributions.title} icon="hub">
            <ul className="checklist checklist--dense">
              {contributions.items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </Section>

          <Section id="production" title={production.title} icon="precision_manufacturing">
            <p className="section-intro">{production.intro}</p>
            <ul className="bullet-list">
              {production.items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
            <p className="section-note">{production.closing}</p>
          </Section>

          <Section id="tools" title={tools.title} icon="construction">
            <div className="tool-grid">
              {tools.groups.map((group) => (
                <section key={group.title} className="tool-grid__group" aria-label={group.title}>
                  <h3 className="tool-grid__title">{group.title}</h3>
                  <ul className="tool-grid__list">
                    {group.items.map((tool) => (
                      <li key={tool}>{tool}</li>
                    ))}
                  </ul>
                </section>
              ))}
            </div>
          </Section>

          <Section id="training" title={training.title} icon="diversity_3">
            <p className="section-intro">{training.intro}</p>
            <ul className="checklist">
              {training.items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </Section>

          <Section id="links" title={links.title} icon="link">
            <ul className="links-list">
              {links.items.map((item) => (
                <li key={item.value} className="links-list__item">
                  <span className="links-list__label">{item.label}</span>
                  <a
                    href={item.href ?? item.value}
                    className="links-list__link"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {item.value}
                  </a>
                </li>
              ))}
            </ul>
          </Section>

          <Section id="short-version" title={shortVersion.title} icon="summarize">
            <div className="short-version">
              <p>{shortVersion.description}</p>
            </div>
          </Section>
        </main>

        <footer className="site-footer">
          <p>{footer.note}</p>
        </footer>
      </div>
    </div>
  )
}

export default App
