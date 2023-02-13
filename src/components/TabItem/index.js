import './index.css'

const TabItem = props => {
  const {tabDetails, clickToChangeTab, isActive} = props
  const {tabId, displayText} = tabDetails

  const selectTab = () => {
    clickToChangeTab(tabId)
  }

  const active = isActive ? 'active-btn' : ''

  return (
    <li className="list-container">
      <button type="button" className={`btn-tab ${active}`} onClick={selectTab}>
        {displayText}
      </button>
    </li>
  )
}

export default TabItem
