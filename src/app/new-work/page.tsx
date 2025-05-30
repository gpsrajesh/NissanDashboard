import Image from 'next/image'
import Link from 'next/link'
import avatar from '../../assets/images/avatar.png'

import './NewWork.scss'

const NewWork = () => {
  return (
    <section className="new-work">
      <h1 className="new-work__title">Interested in more work?</h1>
      <p className="new-work__message">
        Email out team directly or book in a content call
      </p>
      <article className="new-work__panel">
        <header className="executive">
          <Image src={avatar} alt="Ash" className="executive__avatar" />
          <div>
            <h2 className="executive__name">Ash Kammerhofer</h2>
            <p className="executive__description"> Senior Account Executive</p>
          </div>
        </header>

        <iframe
          loading="lazy"
          className="calendar"
          title="Dynamic Project Plan"
          id="DynamicProjectPlan"
          src="https://calendly.com/kristian-terry/30min"
        />
        <Link href="" className="portfolio">
          Or visit this link to see our latest portfolio
        </Link>
      </article>
    </section>
  )
}

export default NewWork
