import css from './ImageCard.module.css';

export default function ImageCard({ imageData, onImageClick }) {
  const handleClick = () => {
    onImageClick(imageData.id);
  };

  return (
    <div className={css.container} onClick={handleClick}>
      <img src={imageData.webformatURL} alt={imageData.altText} />
    </div>
  );
}