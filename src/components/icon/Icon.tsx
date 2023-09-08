import React, { FC, SVGProps } from "react";

import icons from "@public/icons";

export type IconGlyph = keyof typeof icons;
export const iconTypes: IconGlyph[] = Object.keys(icons) as any[];

export interface IIconProps extends SVGProps<SVGSVGElement> {
    glyph: IconGlyph;
}

const Icon: FC<IIconProps> = (props) => {
    const { glyph, fill = "currentColor", stroke = "currentStroke", ...restIconProps } = props;

    const IconComponent = icons[glyph];

    return <IconComponent fill={fill} stroke={stroke} {...restIconProps} />;
};

export default Icon;
