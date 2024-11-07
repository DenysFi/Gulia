function MobileMenu() {
  return (
    <div className="mobile-menu">
      <div className="mobile-menu__overlay">
        <nav>
          <ul className="mobile-menu__list">
            <li className="mobile-menu__list-item">
              <a href=""> stills</a>
            </li>
            <li className="mobile-menu__list-item">
              <a href=""> motion</a>
            </li>
            <li className="mobile-menu__list-item">
              <a href=""> about</a>
            </li>
            <li className="mobile-menu__list-item">
              <a href=""> instagram</a>
            </li>
            <li className="mobile-menu__list-item">
              <a href=""> email</a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
}

export default MobileMenu;
