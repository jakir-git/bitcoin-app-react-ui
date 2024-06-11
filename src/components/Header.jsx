import {
  faAngleLeft,
  faEllipsisVertical,
  faInbox,
  faMinus,
  faPenToSquare,
  faUpRightFromSquare,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useRef, useState } from "react";
import useClickOutside from "../hooks/useClickOutside";
import DropdownMenu from "./DropdownMenu";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const toggleButtonRef = useRef(null);
  const dropdownRef = useClickOutside(
    () => setMenuOpen(false),
    toggleButtonRef
  );

  const toggleDropdown = () => {
    setMenuOpen((prev) => !prev);
  };

  const menuItems = [
    { label: "Edit", icon: faPenToSquare },
    { label: "Courier Info", icon: faInbox },
    { label: "Share", icon: faUpRightFromSquare },
    { label: "Remove", icon: faMinus },
  ];

  return (
    <header className="header">
      <div className="header_back_icon">
        <FontAwesomeIcon className="header_menu_icon" icon={faAngleLeft} />
      </div>
      <h2 className="header_title">Bitcoin Wallet</h2>
      <div
        onClick={toggleDropdown}
        ref={toggleButtonRef}
        className="header_menu_btn"
      >
        <FontAwesomeIcon
          className="header_menu_icon"
          icon={faEllipsisVertical}
        />
      </div>
      {menuOpen && (
        <div className="header_overlay">
          <DropdownMenu items={menuItems} dropdownRef={dropdownRef} />
        </div>
      )}
    </header>
  );
}
