import { faUpload } from '@fortawesome/free-solid-svg-icons';
import { faImage } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const UploadImage = () => {
  return (
    <article className='upload_image'>
      <div className='svg'>
        <FontAwesomeIcon icon={faImage} size='4x' />
      </div>
      <p>
        <small>
          We recommend uploading or dragging in an image that is{' '}
          <strong>1920x1080 pixels</strong>
        </small>
      </p>
      <div className='upload_image_btn'>
        <div className='svg'>
          <FontAwesomeIcon icon={faUpload} />
        </div>
        <div className='text'>Upload from computer</div>
      </div>
    </article>
  );
};

export default UploadImage;
