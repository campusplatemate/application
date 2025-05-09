// app/profile/page.tsx
import { getServerSession } from 'next-auth';
import authOptions from '@/lib/authOptions';
import { prisma } from '@/lib/prisma';
import ProfileClient from '@/components/ProfileClient';
import { redirect } from 'next/navigation';

const ProfilePage = async () => {
  const session = await getServerSession(authOptions);

  if (!session?.user?.email) {
    return redirect('/auth/signinup');
  }

  const claimedPosts = await prisma.post.findMany({
    where: { claimedBy: session.user.email },
  });
  const createdPosts = await prisma.post.findMany({
    where: { owner: session.user.email },
  });

  return <ProfileClient claimedPosts={claimedPosts} createdPosts={createdPosts} />;
};

export default ProfilePage;
