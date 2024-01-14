import { ReactNode } from "react";
import { FCWithChildren } from "@/components/types/component.types";

type Props = {
    children: ReactNode[];
    layout?: "A" | "B";
};

const Grid: FCWithChildren<Props> = (props) => {
    const { children, layout = "A" } = props;
    return (
        <div
            className={`product-grid__container${
                !layout ? "" : layout === "A" ? " _layout-a" : " _layout-b"
            }`}
        >
            {children}
        </div>
    );
};

export default Grid;
