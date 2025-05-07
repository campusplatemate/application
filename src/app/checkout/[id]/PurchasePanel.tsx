'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Button, Form } from 'react-bootstrap';
import { lexend } from '@/fonts';

interface Props {
  maxQuantity: number;
}

export default function PurchasePanel({ maxQuantity }: Props) {
  const [quantity, setQuantity] = useState(1);
  const router = useRouter();

  const handleClick = async () => {
    router.push('/confirmation');
  };

  return (
    <Form.Group controlId="quantitySelect" className="mb-3">
      <Form.Label>Quantity:</Form.Label>
      <Form.Select
        className="mb-4"
        style={{ width: '7%' }}
        value={quantity}
        onChange={(e) => setQuantity(Number(e.target.value))}
      >
        {Array.from({ length: maxQuantity }, (_, i) => i + 1).map((n) => (
          <option key={n} value={n}>
            {n}
          </option>
        ))}
      </Form.Select>

      <Button className={`${lexend.className} rewardButton`} onClick={handleClick}>
        Submit Order
      </Button>
    </Form.Group>
  );
}
