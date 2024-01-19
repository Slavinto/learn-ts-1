import { FaHome, FaRedhat, FaWallet } from "react-icons/fa";
import { GiMonclerJacket, GiRunningShoe } from "react-icons/gi";

import Link from "next/link";
import Image from "next/image";
import React from "react";

type Props = {
    handleClickCart: () => void;
};

const Navbar = (props: Props) => {
    const { handleClickCart } = props;
    const menuItems = ["Home", "Jackets", "Hats", "Accessories", "Shoes"];

    return (
        <div className='navbar'>
            <ul className='navbar__list'>
                <li className='navbar__list-item nbli'>
                    <div className='nbli__container'>
                        <Link href={"/"}>
                            <FaHome /> Home
                        </Link>
                    </div>
                </li>
                <li className='navbar__list-item nbli'>
                    <div className='nbli__container'>
                        <Link href={"/"}>
                            <GiMonclerJacket /> Jackets
                        </Link>
                    </div>
                </li>
                <li className='navbar__list-item nbli'>
                    <div className='nbli__container'>
                        <Link href={"/"}>
                            <FaRedhat /> Hats
                        </Link>
                    </div>
                </li>
                <li className='navbar__list-item nbli'>
                    <div className='nbli__container'>
                        <Link href={"/"}>
                            <FaWallet /> Accessories
                        </Link>
                    </div>
                </li>
                <li className='navbar__list-item nbli'>
                    <div className='nbli__container'>
                        <Link href={"/"}>
                            <GiRunningShoe /> Shoes
                        </Link>
                    </div>
                </li>
                <li className='navbar__list-item _wish-list'>
                    <Link href={"#"}>
                        <Image
                            width={48}
                            height={48}
                            alt='wishlist heart icon'
                            src={"/images/icons/favorite2.svg"}
                        />
                    </Link>
                </li>
                <li className='navbar__list-item _cart'>
                    <Link href={"#"} onClick={handleClickCart}>
                        <Image
                            width={48}
                            height={48}
                            alt='shopping bag cart icon'
                            src={"/images/icons/shopping.svg"}
                        />
                    </Link>
                </li>
            </ul>
        </div>
    );
};

export default Navbar;
