<?php

declare(strict_types=1);

namespace App\Observers;

use App\Models\OrderItem;
use Exception;

class OrderItemObserver
{
    /**
     * @throws Exception
     */
    public function saved(OrderItem $orderItem): void
    {
        if (is_numeric($orderItem->price)) {
            $orderItem->total_price = bcmul(
                (string)$orderItem->quantity,
                number_format((float)$orderItem->price, 2, '.', ''),
                2
            );

            $orderItem->updateQuietly(['total_price' => $orderItem->total_price]);

            $orderItem->order?->recalculateTotalPrice();
        } else {
            throw new Exception('Price must be a numeric value.');
        }
    }
}
