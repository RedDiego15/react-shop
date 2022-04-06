import React from 'react'

function Header({children}) {
  return (
    <header>
      <nav>
        <div className="navbar-left">{children}</div>
      </nav>
    </header>
  );
}

export  {Header}