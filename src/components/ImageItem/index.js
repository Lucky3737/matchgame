import './index.css'

const ImageItem = props => {
  const {imageDetails, clickChangeImg} = props
  const {id, thumbnailUrl} = imageDetails

  const clickToShowImage = () => {
    clickChangeImg(id)
  }

  return (
    <li>
      <button type="button" className="btn">
        <img
          className="thumbnail-size"
          src={thumbnailUrl}
          alt="thumbnail"
          onClick={clickToShowImage}
        />
      </button>
    </li>
  )
}
export default ImageItem
