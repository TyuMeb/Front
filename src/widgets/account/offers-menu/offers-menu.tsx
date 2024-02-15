import { usePathname } from "next/navigation";

import Link from "next/link";
import { cn } from "@src/shared/lib/cn";
import { useOffersQuery } from "@src/redux/api/offers-api-slice";

export const OffersMenu = () => {
  const pathname = usePathname();

  const { data: offers = [] } = useOffersQuery();

  if (!pathname.startsWith("/account/offers")) return null;

  return (
    <ul className={cn("text-ellipsis overflow-hidden")}>
      {offers.map((offer) => {
        return (
          <li key={offer.id}>
            <Link
              href={`/account/offers/${offer.id}`}
              type="button"
              className={cn(
                "flex gap-2 items-center pl-8 border-l-4 border-transparent py-2",
                pathname.startsWith(`/account/offers/${offer.id}`) && "border-l-yellow bg-scramble"
              )}
              onClick={() => {}}
              style={{
                lineBreak: "anywhere",
              }}
            >
              {offer.name}
            </Link>
          </li>
        );
      })}
    </ul>
  );
};
