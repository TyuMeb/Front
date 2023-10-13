import React, { HTMLAttributes } from "react";
import classNames from "classnames/bind";

import styles from "./sidebar.module.scss";
const cx = classNames.bind(styles);

interface ISidebar extends HTMLAttributes<HTMLDivElement> {}

const Sidebar = ({ className }: ISidebar) => {
    return <div className={cx("sidebar", className)}>Sidebar</div>;
};

export default Sidebar;
