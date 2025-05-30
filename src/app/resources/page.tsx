import FilesSection from './FilesSection/FilesSection'
import FileDrop from './FileDrop/FileDrop'

import './Resources.scss'

const Resources = () => {
  return (
    <div className="resources">
      <h1 className="resources__title">
        <strong>Nissan</strong> Resources
      </h1>
      <section className="resources__content">
        <div className="col1">
          <FilesSection />
        </div>
        <div className="col2">
          <FileDrop />
        </div>
      </section>
    </div>
  )
}

export default Resources
