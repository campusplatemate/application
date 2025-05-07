import { getServerSession } from 'next-auth';
import { loggedInProtectedPage } from '@/lib/page-protection';
import authOptions from '@/lib/authOptions';
import { RewardItem } from '@prisma/client';
import { prisma } from '@/lib/prisma';
import RewardsClient from '@/components/RewardsClient';
import { lexend } from '@/fonts';

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
      <h1 className={`${lexend.className} mb-0 text-center`}>Rewards</h1>
      <RewardsClient rewards={rewards} />
    </main>
  );
};

export default RewardsPage;
