'use client';
import { useState } from 'react';

const Navbar = () => {
  const [showList, setListState] = useState(false);
  return (
    <div className="text-white">
      <button className="text-white" onClick={() => setListState(!showList)}>
        Click Me!
      </button>
      {showList ? <NavList /> : null}
    </div>
  );
};

const NavList = () => {
  return (
    <>
      <ul>
        <li>Thing1</li>
        <li>Thing2</li>
        <li>ETC</li>
      </ul>
    </>
  );
};

export { Navbar };
