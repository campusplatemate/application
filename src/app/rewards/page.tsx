import { getServerSession } from 'next-auth';
import { loggedInProtectedPage } from '@/lib/page-protection';
import authOptions from '@/lib/authOptions';
import { Col, Container, Row } from 'react-bootstrap';
import { RewardItem } from '@prisma/client';
import { prisma } from '@/lib/prisma';
import RewardCard from '@/components/RewardCard';

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
      <Container fluid className="py-3 px-3">
        <h1 className="text-center mb-4">Rewards</h1>
        <Row xs={1} md={2} lg={3} className="g-4">
          {rewards.map((item) => (
            <Col key={item.id}>
              <RewardCard item={item} />
            </Col>
          ))}
        </Row>
      </Container>
    </main>
  );
};

export default RewardsPage;
