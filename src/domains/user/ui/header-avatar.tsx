import { cn } from "@src/shared/lib/cn";
import Link from "next/link";
import React from "react";
import { useUser } from "@src/redux/slices/users-slice";
import { UserAccount } from "@src/redux/api/generated";

type Props = Omit<
  React.DetailedHTMLProps<React.AnchorHTMLAttributes<HTMLAnchorElement>, HTMLAnchorElement>,
  "href" | "ref"
>;

export const HeaderAvatar = (props: Props) => {
  const ua: UserAccount | null = useUser();

  return (
    <Link
      {...props}
      className={cn("w-8 h-8", props.className)}
      href={ua?.role === "client" ? "/account/my-orders" : "/account/customer-orders"}
    >
      <img src={"/account/photo.png"} alt="Фото"></img>
    </Link>
  );
};
