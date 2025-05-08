import { getServerSession } from 'next-auth';
import { Col, Container, Row } from 'react-bootstrap';
// import StuffItemAdmin from '@/components/StuffItemAdmin';
import { prisma } from '@/lib/prisma';
import { adminProtectedPage } from '@/lib/page-protection';
import authOptions from '@/lib/authOptions';
import { lexend } from '@/fonts';
import FeedbackCard from '@/components/FeedbackCard';

const AdminPage = async () => {
  const session = await getServerSession(authOptions);
  adminProtectedPage(
    session as {
      user: { email: string; id: string; randomKey: string };
    } | null,
  );
  // const stuff = await prisma.stuff.findMany({});
  const users = await prisma.feedback.findMany({});

  return (
    <main>
      <Container id="list" fluid className="py-3">
        <Row>
          <Col>
            <h1 className={`${lexend.className} text-center mb-3`}>List Feedback</h1>
            <Row xs={1} md={2} lg={3} className="g-4">
              {users.map((item) => (
                // Sort by date for improved accessibility
                <Col key={item.createdAt.toLocaleDateString()}>
                  <FeedbackCard item={item} />
                </Col>
              ))}
            </Row>
          </Col>
        </Row>
      </Container>
    </main>
  );
};

export default AdminPage;
