import React from "react";
import { useUI } from "../context";

type Props = {};

const Footer = (props: Props) => {
    const uiValue = useUI();
    return (
        <footer className='footer'>
            &copy; {new Date().getFullYear()} Slavinto inc.{uiValue.hello}
        </footer>
    );
};

export default Footer;
