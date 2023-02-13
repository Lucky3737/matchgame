import './index.css'

const NavItem = props => {
  const {time, score} = props
  return (
    <li>
      <div className="">
        <nav className="nav-container">
          <img
            className="logo-size"
            src="https://assets.ccbp.in/frontend/react-js/match-game-website-logo.png"
            alt="website logo"
          />
          <div className="score-container">
            <p className="score">Score:{score}</p>
            <img
              src="https://assets.ccbp.in/frontend/react-js/match-game-timer-img.png"
              alt="timer"
            />
            <p>{time} sec</p>
          </div>
        </nav>
      </div>
    </li>
  )
}
export default NavItem
