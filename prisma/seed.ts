import { PrismaClient, Role } from '@prisma/client';
import { hash } from 'bcrypt';
import * as config from '../config/settings.development.json';

const prisma = new PrismaClient();

async function main() {
  console.log('Seeding the database');
  const password = await hash('changeme', 10);
  config.defaultAccounts.forEach(async (account) => {
    const role = (account.role as Role) || Role.USER;
    console.log(`  Creating user: ${account.email} with role: ${role}`);
    await prisma.user.upsert({
      where: { email: account.email },
      update: {},
      create: {
        email: account.email,
        password,
        role,
      },
    });
    // console.log(`  Created user: ${user.email} with role: ${user.role}`);
  });
  for (const item of config.RewardItems) {
    console.log(`  Adding reward: ${JSON.stringify(item)}`);
    // eslint-disable-next-line no-await-in-loop
    await prisma.rewardItem.upsert({
      where: { name: item.title },
      update: {
        quantity: item.quantity,
        cost: item.cost,
        imageUrl: item.imageUrl,
      },
      create: {
        name: item.title,
        quantity: item.quantity,
        cost: item.cost,
        imageUrl: item.imageUrl,
      },
    });
  }

  config.defaultPosts.forEach(async (post, index) => {
    console.log(`  Adding post: ${JSON.stringify(post)}`);
    // eslint-disable-next-line no-await-in-loop
    await prisma.post.upsert({
      where: { id: index },
      update: {},
      create: {
        ownerName: post.ownerName,
        food: post.food,
        quantity: post.quantity,
        bestDate: post.bestDate,
        image: post.image,
        location: post.location,
        description: post.description,
        owner: post.owner,
      },
    });
  });

  config.defaultFeedback.forEach(async (feedback, index) => {
    console.log(`  Adding feedback: ${JSON.stringify(feedback)}`);
    // eslint-disable-next-line no-await-in-loop
    await prisma.feedback.upsert({
      where: { id: index },
      update: {},
      create: {
        name: feedback.name,
        email: feedback.email,
        message: feedback.message,
      },
    });
  });
}

main()
  .then(() => prisma.$disconnect())
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
