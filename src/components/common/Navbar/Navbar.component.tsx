import Link from "next/link";
import React from "react";

type Props = {};

const Navbar = (props: Props) => {
    const menuItems = [
        "Home",
        "Jackets",
        "Hats",
        "Accessories",
        "Shoes",
        "My Account",
    ];

    return (
        <div className='navbar'>
            <ul className='navbar__list'>
                {menuItems.map((mi) => (
                    <li key={mi} className='navbar__list-item'>
                        <Link href={`/${mi}`}>{mi}</Link>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Navbar;
