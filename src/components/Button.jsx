import PropTypes from "prop-types";

export default function Button({ imgSrc, label, altText, onClick }) {
  return (
    <button className="btn-global" onClick={onClick}>
      <img src={imgSrc} alt={altText} />
      <h4>{label}</h4>
    </button>
  );
}

Button.prototypes = {
  imgSrc: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  onClick: PropTypes.func,
};
