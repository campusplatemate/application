/* eslint-disable max-len */
import { getServerSession } from 'next-auth';
import { Col, Container, Row } from 'react-bootstrap';
/* import { prisma } from '@/lib/prisma';
import StuffItem from '@/components/StuffItem'; */
import { loggedInProtectedPage } from '@/lib/page-protection';
import authOptions from '@/lib/authOptions';
import { Post } from '@prisma/client';
import FoodPostCard from '@/components/FoodPostCard';
import { prisma } from '@/lib/prisma';

/** Render a list of stuff for the logged in user. */
const ListPage = async () => {
  // Protect the page, only logged in users can access it.
  const session = await getServerSession(authOptions);
  loggedInProtectedPage(
    session as {
      user: { email: string; id: string; randomKey: string };
      // eslint-disable-next-line @typescript-eslint/comma-dangle
    } | null,
  );
  /*   const owner = (session && session.user && session.user.email) || '';
   const stuff = await prisma.stuff.findMany({
    where: {
      owner,
    },
  }); */
  // console.log(stuff);

  /* const owner = session?.user!.email ? session.user.email : ''; */
  const posts: Post[] = await prisma.post.findMany({});

  return (
    <main>
      <Container id="list" fluid className="py-3">
        <Container>
          <Row>
            <Col>
              <h2 className="text-center">Available Food</h2>
              <Row xs={1} md={2} lg={3} className="g-4">
                {posts.map((post) => (
                  <Col key={post.owner}>
                    <FoodPostCard foodpost={post} />
                  </Col>
                ))}
              </Row>
            </Col>
          </Row>
        </Container>
      </Container>
    </main>
  );
};

export default ListPage;
