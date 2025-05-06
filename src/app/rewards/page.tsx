import { getServerSession } from 'next-auth';
import { loggedInProtectedPage } from '@/lib/page-protection';
import authOptions from '@/lib/authOptions';
import { RewardItem } from '@prisma/client';
import { prisma } from '@/lib/prisma';
import RewardsClient from '@/components/RewardsClient';

const RewardsPage = async () => {
  const session = await getServerSession(authOptions);
  loggedInProtectedPage(
    session as {
      user: { email: string; id: string; randomKey: string };
    } | null,
  );

  const rewards: RewardItem[] = await prisma.rewardItem.findMany();

  return (
    <main>
      <RewardsClient rewards={rewards} />
    </main>
  );
};

export default RewardsPage;
