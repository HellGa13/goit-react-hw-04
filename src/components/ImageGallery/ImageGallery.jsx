import css from './ImageGallery.module.css';
import ImageCard from '../ImageCard/ImageCard';

export default function ImageGallery({ images, onImageClick }) {
  return (
    <ul className={css.container}>
      {images.map(image => (
        <li key={image.id}>
          <ImageCard imageData={image} onImageClick={onImageClick} />
        </li>
      ))}
    </ul>
  );
}