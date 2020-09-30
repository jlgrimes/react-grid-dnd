import * as React from "react";
interface GridItemProps extends React.HTMLAttributes<HTMLDivElement> {
    children: React.ReactNode;
    locked: boolean;
}
export declare function GridItem({ children, style, className, locked, ...other }: GridItemProps): any;
export {};
