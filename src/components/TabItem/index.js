import './index.css'

const TabItem = props => {
  const {tabDetails, clickToGetCategory, isActive} = props
  const {tabId, displayText} = tabDetails
  const selectTab = () => {
    clickToGetCategory(tabId)
  }
  console.log(isActive)
  const ActiveBtn = isActive ? 'btn-tab' : ''

  return (
    <li>
      <button type="button" className={`btn ${ActiveBtn}`} onClick={selectTab}>
        {displayText}
      </button>
    </li>
  )
}

export default TabItem
