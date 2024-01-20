import { cn } from "@src/shared/lib/cn";
import Link from "next/link";
import React from "react";

type Props = Omit<
  React.DetailedHTMLProps<React.AnchorHTMLAttributes<HTMLAnchorElement>, HTMLAnchorElement>,
  "href" | "ref"
>;

export const HeaderAvatar = (props: Props) => {
  return (
    <Link {...props} className={cn("w-8 h-8", props.className)} href="/account/chats">
      <img src={"/account/photo.png"} alt="Фото"></img>
    </Link>
  );
};
