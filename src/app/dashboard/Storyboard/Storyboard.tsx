import Ball from '@/app/components/shared/Ball/Ball'
import './Storyboard.scss'

const Storyboard = ({ className }: { className?: string }) => {
  return (
    <picture className={`storyboard ${className}`}>
      <iframe
        loading="lazy"
        className="storyboard__preview"
        title="Dynamic Project Plan"
        id="DynamicProjectPlan"
        src="https://sharing.clickup.com/2701813/g/h/2jefn-9282/b4ccef235a43268"
      />
      <div className="storyboard__float">
        <div className="badge">
          <span>Dynamic Project Plan</span>
        </div>
        <div className="badge">
          <Ball state="error" />
          <span>LIVE</span>
        </div>
      </div>
    </picture>
  )
}

export default Storyboard
