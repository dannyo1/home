'use client';
import { useEffect, useState } from 'react';
import Link from 'next/link';

const Navbar = () => {
  const [mounted, setMountState] = useState(false);
  const [showList, setListState] = useState(false);

  // useEffect(() => {
  //   setMountState(true);
  // }, []);
  // if (!mounted) return <></>;

  return (
    <div className="text-[#006600]">
      <button className="hover:bg-red-400" onClick={() => setListState(!showList)}>
        Menu
      </button>
      {showList ? <NavList /> : null}
    </div>
  );
};

const NavList = () => {
  return (
    <div className="absolute">
      <ul>
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/MusicReviews">Music Reviews</Link>
        </li>
        <li>Art</li>
        <li>Writing</li>
      </ul>
    </div>
  );
};

export { Navbar };
