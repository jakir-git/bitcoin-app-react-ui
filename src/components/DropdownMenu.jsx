import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import PropTypes from "prop-types";

export default function DropdownMenu({ items, dropdownRef }) {
  return (
    <div className="dropdown-menu" ref={dropdownRef}>
      <ul>
        {items.map((item, index) => (
          <li key={index} onClick={(event) => event.stopPropagation()}>
            <span>{item.label}</span>
            <FontAwesomeIcon icon={item.icon} />
          </li>
        ))}
      </ul>
    </div>
  );
}

DropdownMenu.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
      icon: PropTypes.object.isRequired,
    })
  ).isRequired,
  dropdownRef: PropTypes.oneOfType([
    PropTypes.func,
    PropTypes.shape({ current: PropTypes.instanceOf(Element) }),
  ]),
};
