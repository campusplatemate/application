/* eslint-disable max-len */
import { getServerSession } from 'next-auth';
import { Col, Container, Row } from 'react-bootstrap';
/* import { prisma } from '@/lib/prisma';
import StuffItem from '@/components/StuffItem'; */
import { loggedInProtectedPage } from '@/lib/page-protection';
import authOptions from '@/lib/authOptions';
import { Post } from '@/lib/validationSchemas';
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

  /* const foodposts: Post[] = [
    {
      owner: 'David One',
      foodName: 'Sandwich',
      quantity: 1,
      bestDate: '6-2-2025',
      foodImg: 'https://www.southernliving.com/thmb/UW4kKKL-_M3WgP7pkL6Pb6lwcgM=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/Ham_Sandwich_011-1-49227336bc074513aaf8fdbde440eafe.jpg',
      faceImg: 'https://media.istockphoto.com/id/1410538853/photo/young-man-in-the-public-park.jpg?s=612x612&w=0&k=20&c=EtRJGnNOFPJ2HniBSLWKzsL9Xf7GHinHd5y2Tx3da0E=',
      location: 'Paradise Palms',
      message: 'I wanted to do something nice!',
    },
    {
      owner: 'Jane Two',
      foodName: 'Hot Dogs',
      quantity: 3,
      bestDate: '5-24-2025',
      foodImg: 'https://static01.nyt.com/images/2024/06/28/multimedia/28GRILL-HOTDOGS-REX-cqwj/01GRILL-HOTDOGS-REX-cqwj-mediumSquareAt3X.jpg',
      faceImg: 'https://media.istockphoto.com/id/1389348844/photo/studio-shot-of-a-beautiful-young-woman-smiling-while-standing-against-a-grey-background.jpg?s=612x612&w=0&k=20&c=anRTfD_CkOxRdyFtvsiPopOluzKbhBNEQdh4okZImQc=',
      location: 'ICSpace',
      message: 'My friends and I got full.',
    },
    {
      owner: 'Stanley Three',
      foodName: 'Fried Chicken',
      quantity: 5,
      bestDate: '4-28-2025',
      foodImg: 'https://www.allrecipes.com/thmb/WSSoRAz2IygrMPkiJxHPbt9gqMg=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/8635-southern-fried-chicken-ddmfs_4x3-90736ab31a7a4bb59eb04e2380ccebe7.jpg',
      faceImg: 'https://t3.ftcdn.net/jpg/02/22/85/16/360_F_222851624_jfoMGbJxwRi5AWGdPgXKSABMnzCQo9RN.jpg',
      location: 'Campus Center',
      message: 'Some leftovers from a gathering.',
    },
  ];
  */

  const owner = session?.user!.email ? session.user.email : '';
  const posts: Post[] = await prisma.post.findMany({
    where: {
      owner,
    },
  });

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
                    <FoodPostCard post={post} />
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
