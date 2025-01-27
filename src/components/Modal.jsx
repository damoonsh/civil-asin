import '../styles/Modal.css';

const Modal = ({ isOpen, onClose, imageSrc, onPrev, onNext }) => {
  if (!isOpen) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose}>
          &times;
        </button>
        <button className="modal-nav prev" onClick={onPrev}>
          &#10094;
        </button>
        <img src={imageSrc} alt="Zoomed" className="modal-image" />
        <button className="modal-nav next" onClick={onNext}>
          &#10095;
        </button>
      </div>
    </div>
  );
};

export default Modal;