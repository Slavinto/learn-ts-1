import React, { useRef, useEffect } from "react";
import Link from "next/link";
import { FaHome, FaRss, FaEnvelope, FaInfoCircle } from "react-icons/fa";
import { useUI } from "../context";
import {
    disableBodyScroll,
    enableBodyScroll,
    clearAllBodyScrollLocks,
} from "body-scroll-lock";

type Props = {};

const Sidebar = (props: Props) => {
    const ui = useUI();
    const { sidebarActive } = ui;

    const ref = useRef() as React.MutableRefObject<HTMLDivElement>;

    useEffect(() => {
        if (ref.current) {
            if (sidebarActive) {
                disableBodyScroll(ref.current);
            } else {
                enableBodyScroll(ref.current);
            }
        }
        return () => clearAllBodyScrollLocks();
    }, [sidebarActive]);

    return (
        <div ref={ref} className={`sidebar ${sidebarActive ? "_active" : ""}`}>
            <div className='sidebar__container'>
                <ul className='sidebar-menu'>
                    <li className='sidebar-menu__item'>
                        <Link href='#'>
                            <FaHome /> Home
                        </Link>
                    </li>
                    <li className='sidebar-menu__item'>
                        <Link href='#'>
                            <FaRss /> News
                        </Link>
                    </li>
                    <li className='sidebar-menu__item'>
                        <Link href='#'>
                            <FaEnvelope /> Contact
                        </Link>
                    </li>
                    <li className='sidebar-menu__item'>
                        <Link href='#'>
                            <FaInfoCircle /> About
                        </Link>
                    </li>
                </ul>
            </div>
            <div className='content'>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Voluptatum neque facere enim vero quia hic, exercitationem
                doloribus qui reiciendis cum, voluptates iure nobis aperiam
                earum, reprehenderit quos voluptate eum inventore!
            </div>
        </div>
    );
};

export default Sidebar;
