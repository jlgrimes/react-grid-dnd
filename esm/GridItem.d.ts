import * as React from "react";
interface GridItemProps extends React.HTMLAttributes<HTMLDivElement> {
    children: React.ReactNode;
    dragDisabled: boolean;
}
export declare function GridItem({ children, style, className, dragDisabled, ...other }: GridItemProps): any;
export {};
