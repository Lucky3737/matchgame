import './index.css'

const ImageItem = props => {
  const {imagesDetails, clickToChangeImg} = props
  const {id, thumbnailUrl} = imagesDetails

  const clickToShowImage = () => {
    clickToChangeImg(id)
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
