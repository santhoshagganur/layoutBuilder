// Write your code here
import './index.css'
import ConfigurationContext from '../../context/ConfigurationContext'

const Body = () => (
  <ConfigurationContext.Consumer>
    {value => {
      const {showContent, showLeftNavbar, showRightNavbar} = value

      return (
        <div className="body-container">
          {showLeftNavbar ? (
            <div className="left-navbar-container">
              <h1 className="left-nav-heading"> Left Navbar Menu </h1>
              <ul className="left-nav-list">
                <li className="list-item"> Item 1</li>
                <li className="list-item"> Item 2</li>
                <li className="list-item"> Item 3</li>
                <li className="list-item"> Item 4</li>
              </ul>
            </div>
          ) : null}

          {showContent ? (
            <div className="show-content-container">
              <h1 className="show-content-heading"> Content </h1>
              <p className="show-content">
                Lorem ipsum dolor sitamet, consectetur adipiscing elit, sed do
                elusmod
              </p>
            </div>
          ) : null}
        </div>
      )
    }}
  </ConfigurationContext.Consumer>
)

export default Body
