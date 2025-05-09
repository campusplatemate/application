import { prisma } from '@/lib/prisma';
import { getServerSession } from 'next-auth';
import authOptions from '@/lib/authOptions';
import { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') return res.status(405).end('Method Not Allowed');

  const session = await getServerSession(req, res, authOptions);
  if (!session?.user?.email) return res.status(401).end('Unauthorized');

  const { postId } = req.body;

  console.log('Claim request:', { postId, email: session.user.email });

  try {
    await prisma.post.update({
      where: { id: Number(postId) }, // 👈 ensure it's a number
      data: { claimedBy: session.user.email },
    });

    return res.status(200).json({ success: true });
  } catch (err) {
    console.error('Failed to claim post:', err); // 👈 log the error
    return res.status(500).json({ error: 'Failed to claim post' });
  }
}
