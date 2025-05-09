import { getServerSession } from 'next-auth';
import { Container } from 'react-bootstrap';
import { Post } from '@prisma/client';
import { kanit } from '@/fonts';
import { loggedInProtectedPage } from '@/lib/page-protection';
import authOptions from '@/lib/authOptions';
import FoodPostCard from '@/components/FoodPostCard';
import { prisma } from '@/lib/prisma';

/** Render a list of stuff for the logged in user. */
const DashboardPage = async () => {
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
  const posts: Post[] = await prisma.post.findMany({ where: { claimedBy: null } });

  return (
    <main>
      <Container className="p-3">
        <Container>
          <h1 className={`${kanit.className} text-center`}>Dashboard</h1>
          <h6 className={`${kanit.className} text-center pb-3`}>All food availble to claim!</h6>
          <div className="columnWrapper">
            {posts.map((post) => (
              <div key={post.owner} className="tile">
                <FoodPostCard foodpost={post} />
              </div>
            ))}
          </div>
        </Container>
      </Container>
    </main>
  );
};

export default DashboardPage;
