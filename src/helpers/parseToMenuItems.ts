import { OfferModel, Chat } from "@src/redux/api/generated";
import { TMenuItem } from "@src/components/layouts/account-layout/sidebar";

export const parseOffersToOfferItems = (offersArr: OfferModel[], chatsArr: Chat[]): TMenuItem[] => {
  return offersArr.reduce((acc: TMenuItem[], offer: OfferModel) => {
    const unreadMessages: number | undefined = chatsArr.find((chat) => chat.id === offer.chat_id)?.unread_messages;
    return [
      ...acc,
      {
        id: offer.offer_id,
        alias: `/${offer.offer_id}`,
        name: offer.order_name,
        contractor: offer.order_name,
        unread: !!unreadMessages,
      },
    ];
  }, []);
};

// eslint-disable-next-line
export const parseOrdersToOrderItems = (
  // eslint-disable-next-line
  ordersArr: any,
  chatsArr: Chat[],
  unreadMessagesPresent: boolean
): TMenuItem[] => {
  // eslint-disable-next-line
  return ordersArr.reduce((acc: TMenuItem[], order: any) => {
    return [
      ...acc,
      {
        id: order.id,
        alias: `/${order.id}`,
        name: order.name,
        contractor: Number(order.contractor),
        collapsible: !order.offers
          ? undefined
          : // eslint-disable-next-line
            order.offers.reduce((accum: TMenuItem[], offer: any) => {
              const unreadMessages: number | undefined = chatsArr.find((chat) => chat.id === offer.chat_id)
                ?.unread_messages;
              return [
                ...accum,
                {
                  id: offer.id,
                  alias: `/${offer.chat_id}`,
                  contractor: offer.contactor_name,
                  unread: !!unreadMessages,
                },
              ];
            }, []),
        unread: unreadMessagesPresent,
      },
    ];
  }, []);
};
