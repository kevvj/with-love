const MenuButton = () => {
    return (
        <button aria-label="Open menu" className="dropdown-button">
        <svg width="24" height="24" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
          <rect x="4" y="7.5" width="16" height="1.5"></rect>
          <rect x="4" y="15" width="16" height="1.5"></rect>
        </svg>
      </button>
    )
}

export default MenuButton;