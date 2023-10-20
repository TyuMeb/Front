import React, { HTMLAttributes } from "react";
import classNames from "classnames/bind";

import styles from "./header.module.scss";
const cx = classNames.bind(styles);

interface IHeader extends HTMLAttributes<HTMLDivElement> {}

const Header = ({ className }: IHeader) => {
    return <div className={cx("header", className)}>Header</div>;
};

export default Header;
