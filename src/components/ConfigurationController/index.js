// Write your code here
import './index.css'
import ConfigurationContext from '../../context/ConfigurationContext'

const ConfigurationController = () => (
  <ConfigurationContext.Consumer>
    {value => {
      const {
        showContent,
        showLeftNavbar,
        showRightNavbar,
        onToggleShowContent,
        onToggleShowLeftNavbar,
        onToggleShowRightNavbar,
      } = value

      const changeLeftNavbar = event => {
        onToggleShowLeftNavbar(event.target.value)
      }

      const changeRightNavbar = event => {
        onToggleShowRightNavbar(event.target.value)
      }

      const changeContent = () => {
        onToggleShowContent()
      }

      return (
        <div className="configuration-controller-container">
          <h1 className="controller-heading"> Layout </h1>
          <ul className="controller-container">
            <li className="controller">
              <input
                id="content"
                type="checkbox"
                className="controller-input"
                onChange={changeContent}
                checked={showContent}
              />
              <label htmlFor="content" className="label-content">
                Content
              </label>
            </li>
            <li className="controller">
              <input
                id="content"
                type="checkbox"
                className="controller-input"
                onChange={changeLeftNavbar}
                checked={showLeftNavbar}
              />
              <label htmlFor="content" className="label-content">
                Left Navbar
              </label>
            </li>
            <li className="controller">
              <input
                id="content"
                type="checkbox"
                className="controller-input"
                onChange={changeRightNavbar}
                checked={showRightNavbar}
              />
              <label htmlFor="content" className="label-content">
                Right Navbar
              </label>
            </li>
          </ul>
        </div>
      )
    }}
  </ConfigurationContext.Consumer>
)

export default ConfigurationController
