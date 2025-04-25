import { getServerSession } from 'next-auth';
import authOptions from '@/lib/authOptions';
import { loggedInProtectedPage } from '@/lib/page-protection';
// eslint-disable-next-line import/extensions
import CreatePostForm from '@/components/CreatePostForm';

const CreatePost = async () => {
  // Protect the page, only logged in users can access it.
  const session = await getServerSession(authOptions);
  loggedInProtectedPage(
    session as {
      user: { email: string; id: string; randomKey: string };
    } | null,
  );
  return (
    <main>
      <CreatePostForm />
    </main>
  );
};

export default CreatePost;
