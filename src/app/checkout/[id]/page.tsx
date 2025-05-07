import { prisma } from '@/lib/prisma';
import { notFound } from 'next/navigation';
import { lato, lexend } from '@/fonts';
import PurchasePanel from './PurchasePanel';

export const dynamic = 'force-dynamic';

interface PageProps {
  params: { id: string };
}

export default async function CheckoutPage({ params }: PageProps) {
  const id = parseInt(params.id, 10);
  const item = await prisma.rewardItem.findUnique({ where: { id } });

  if (!item) notFound();

  return (
    <div className="container py-5">
      <h1 className={`${lexend.className}`}>
        Checkout:&nbsp;
        {item.name}
      </h1>
      <p className={lato.className}>
        Cost per item:&nbsp;
        {item.cost}
        &nbsp;points
      </p>
      <PurchasePanel maxQuantity={item.quantity} />
    </div>
  );
}
