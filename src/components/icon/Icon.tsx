import React, { SVGProps } from "react";

import icons from "@public/icons";

export type IconGlyphProps = keyof typeof icons;
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const iconTypes: IconGlyphProps[] = Object.keys(icons) as any[];

export type IconProps = {
    glyph: IconGlyphProps;
} & SVGProps<SVGSVGElement>;

const Icon = (props: IconProps) => {
    const { glyph, fill = "currentColor", stroke = "currentStroke", ...restIconProps } = props;

    const IconComponent = icons[glyph];

    return <IconComponent fill={fill} stroke={stroke} {...restIconProps} />;
};

export { Icon };
