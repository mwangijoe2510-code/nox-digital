import { Link } from 'react-router-dom'
import { PageHero, useDocTitle } from '../components/shared.jsx'
import { Icon } from '../components/ui.jsx'
import Snake from '../components/Snake.jsx'

export default function NotFound() {
  useDocTitle('Page not found')
  return (
    <>
      <PageHero kicker="Error 404" bgText="404" title="This page took a wrong turn." lede="The page you are looking for does not exist or has moved. Let’s get you back on track.">
      <div className="phero-actions">
        <Link to="/" className="btn btn-light btn-lg">
          Back to home <Icon name="arrow" size={18} />
        </Link>
        <Link to="/contact" className="btn btn-outline-light btn-lg">
          Contact us
        </Link>
      </div>
    </PageHero>
      <section className="section dark nf-game">
        <div className="wrap">
          <p className="mono nf-lab">Lost? Play a quick round of Snake</p>
          <div className="nf-snake"><Snake /></div>
        </div>
      </section>
    </>
  )
}
