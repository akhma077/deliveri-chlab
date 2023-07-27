declare module "*.scss";
declare module "*.png";
declare module "*.jpg";

declare type SVGFC = import("react").VFC<
    import("react").SVGProps<SVGSVGElement>
>;

declare module "*.svg" {
    export const SVG: SVGFC;
    export = { ReactComponent: SVG };
}
declare module "*.svg" {
    import * as React from "react";

    const ReactComponent: React.FC<React.SVGProps<SVGSVGElement>>;
    export { ReactComponent };
}
