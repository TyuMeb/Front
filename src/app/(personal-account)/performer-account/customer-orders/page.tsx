"use client";

import { Button } from "@src/shared/ui/button";

export default function ArchivesPage() {
    return (
        <div>
            <h1>Заказы клиентов</h1>
            <a href="/performer-account/customer-orders/add-offer-1">
                <Button>Добавить предложение</Button>
            </a>
        </div>
    );
}
