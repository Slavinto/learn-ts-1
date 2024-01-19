import type { FCWithChildren } from "@/components/types/component.types";
import { ReactNode, useState } from "react";
import { Navbar, Footer } from "../..";
import { Sidebar } from "@/components";
import { useUI } from "@/components/ui/context";

type Props = {
    children: ReactNode;
};

const Layout: FCWithChildren<Props> = ({ children }) => {
    const uiContext = useUI();
    const { sidebarActive, toggleSidebar } = uiContext;

    // const [sidebarActive, setSidebarActive] = useState(false);

    // const handleClickCart = toggleSidebar;
    // () => {
    //     setSidebarActive(!sidebarActive);
    //     console.log("test");
    // };

    // const handleClickOverlay = () => {
    //     setSidebarActive(false);
    //     console.log("overlay clicked");
    // };

    return (
        <>
            {sidebarActive && (
                <>
                    <div
                        className='layout__sidebar-overlay'
                        onClick={toggleSidebar}
                    ></div>
                </>
            )}

            <Sidebar />
            <Navbar handleClickCart={toggleSidebar} />
            <div className='layout _container'>{children}</div>
            <Footer />
        </>
    );
};

export default Layout;
