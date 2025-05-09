import { getServerSession } from 'next-auth';
import { Container } from 'react-bootstrap';
import { Post } from '@prisma/client';
import { kanit } from '@/fonts';
import { loggedInProtectedPage } from '@/lib/page-protection';
import authOptions from '@/lib/authOptions';
import { prisma } from '@/lib/prisma';
import dynamic from 'next/dynamic';

const DashboardClientPage = dynamic(() => import('@/components/DashboardClientPage'), { ssr: false });

const DashboardPage = async () => {
  const session = await getServerSession(authOptions);
  loggedInProtectedPage(session as any);

  const posts: Post[] = await prisma.post.findMany({});

  return (
    <main>
      <Container className="p-3">
        <h1 className={`${kanit.className} text-center`}>Dashboard</h1>
        <h6 className={`${kanit.className} text-center pb-3`}>
          All food available to claim!
        </h6>
        <DashboardClientPage posts={posts} />
      </Container>
    </main>
  );
};

export default DashboardPage;
