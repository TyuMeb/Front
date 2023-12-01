import React, { SVGProps } from "react";

import icons from "@public/icons";

export type IconGlyphT = keyof typeof icons;
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const iconTypes: IconGlyphT[] = Object.keys(icons) as any[];

export type IconPropsT = {
    glyph: IconGlyphT;
} & SVGProps<SVGSVGElement>;

const Icon = (props: IconPropsT) => {
    const { glyph, fill = "currentColor", stroke = "currentStroke", ...restIconProps } = props;

    const IconComponent = icons[glyph];

    return <IconComponent fill={fill} stroke={stroke} {...restIconProps} />;
};

export { Icon };
