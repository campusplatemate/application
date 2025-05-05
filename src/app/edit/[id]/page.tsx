import { getServerSession } from 'next-auth';
import { notFound } from 'next/navigation';
import { Post } from '@prisma/client';
import authOptions from '@/lib/authOptions';
import { loggedInProtectedPage } from '@/lib/page-protection';
import { prisma } from '@/lib/prisma';
import EditPostForm from '@/components/EditPostForm';

export default async function EditPostPage({ params }: { params: { id: string | string[] } }) {
  // Protect the page, only logged in users can access it.
  const session = await getServerSession(authOptions);
  loggedInProtectedPage(
    session as {
      user: { email: string; id: string; randomKey: string };
      // eslint-disable-next-line @typescript-eslint/comma-dangle
    } | null,
  );
  const id = Number(Array.isArray(params?.id) ? params?.id[0] : params?.id);
  console.log(id);
  const post: Post | null = await prisma.post.findUnique({
    where: { id },
  });
  // console.log(post);
  if (!post) {
    return notFound();
  }

  return (
    <main>
      <EditPostForm post={post} />
    </main>
  );
}
