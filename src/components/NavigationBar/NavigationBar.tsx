import { useState } from 'react';

import { Navbar } from './styled';

interface NavigationBarProps {
  isPatron: boolean;
}

function NavigationBar({ isPatron }: NavigationBarProps) {
  const [active, setHamburgerMenu] = useState(false);

  return (
    <Navbar className="navbar" role="navigation" aria-label="main navigation">
      <div className="navbar-brand">
        <a className="navbar-item has-text-weight-bold" href="/">
          <img src="/mascot/navbar-logo.png" alt="2anki Logo" />
        </a>
        <a
          role="button"
          className="navbar-burger"
          aria-label="menu"
          aria-expanded="false"
          onKeyDown={() => setHamburgerMenu(!active)}
          onClick={() => setHamburgerMenu(!active)}
          tabIndex={0}
        >
          <span aria-hidden="true" />
          <span aria-hidden="true" />
          <span aria-hidden="true" />
          <span aria-hidden="true" />
          <span aria-hidden="true" />
          <span aria-hidden="true" />
        </a>
      </div>
    </Navbar>
  );
}

export default NavigationBar;
