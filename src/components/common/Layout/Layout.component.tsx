import type { FCWithChildren } from "@/components/types/component.types";
import { ReactNode } from "react";
import { Navbar } from "../..";

type Props = {
    children: ReactNode;
};

const Layout: FCWithChildren<Props> = ({ children }) => {
    return (
        <>
            <Navbar />
            <div className='layout _container'>{children}</div>
        </>
    );
};

export default Layout;
