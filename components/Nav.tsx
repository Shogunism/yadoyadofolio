"use client";

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import '../styles/globals.css';

const Nav = () => {
  const pathname = usePathname(); //今どこのページか取得

  const links = [
    { href: '/profile', label: 'PROFILE' },
    { href: '/gallery', label: 'GALLERY' },
    { href: '/', label: 'HOME' },
    { href: '/article', label: 'ARTICLE' },
    { href: '/contact', label: 'CONTACT' },
  ];

  const currentIndex = links.findIndex(link => link.href === pathname);

  return (
    <nav className="nav-container">
      {links.map((link, index) => {
        const isActive = pathname === link.href;
        const isLeft = index < currentIndex;
        const directionClass = isLeft ? 'right-to-left' : 'left-to-right';

        return (
          <Link key={link.href} href={link.href} className={`nikoleta-font nav_string ${isActive ? 'active' : ''} ${directionClass}`}>
            {link.label}
          </Link>
        );
      })}
    </nav>
  );
};

export default Nav;