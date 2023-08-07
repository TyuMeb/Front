import React, { FC, SVGProps } from "react";

import icons from "@public/icons";

export interface IIconProps extends SVGProps<SVGSVGElement> {
    glyph: keyof typeof icons;
}

const Icon: FC<IIconProps> = (props) => {
    const { glyph, fill = "currentColor", stroke = "currentStroke", ...restIconProps } = props;

    const IconComponent = icons[glyph];

    return <IconComponent fill={fill} stroke={stroke} {...restIconProps} />;
};

export default Icon;
