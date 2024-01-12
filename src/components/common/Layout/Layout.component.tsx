import styles from "./Layout.module.css";
import type { FCWithChildren } from "@/components/types/component.types";

const Layout: FCWithChildren = ({ children }) => {
    return (
        <div className={styles.root}>
            <div className='app-container _container'>{children}</div>
        </div>
    );
};

export default Layout;
