'use server';

// import { Stuff, Condition } from '@prisma/client';
import { hash } from 'bcrypt';
// import { redirect } from 'next/navigation';
import { prisma } from './prisma';

/**
 * Adds a new stuff to the database.
 * @param stuff, an object with the following properties: name, quantity, owner, condition.
 */

export async function createPost(post: {
  description: string;
  location: string;
  food: string;
  quantity: number;
  bestDate: string;
  image: string;
  owner: string;
}) {
  // console.log(`addStuff data: ${JSON.stringify(stuff, null, 2)}`);

  await prisma.post.create({
    data: {
      food: post.food,
      quantity: post.quantity,
      bestDate: post.bestDate,
      location: post.location,
      description: post.description,
      image: post.image,
      owner: post.owner,
    },
  });
}
/**
 * Edits an existing stuff in the database.
 * @param stuff, an object with the following properties: id, name, quantity, owner, condition.
 */
// export async function editStuff(stuff: Stuff) {
//   // console.log(`editStuff data: ${JSON.stringify(stuff, null, 2)}`);
//   await prisma.stuff.update({
//     where: { id: stuff.id },
//     data: {
//       name: stuff.name,
//       quantity: stuff.quantity,
//       owner: stuff.owner,
//       condition: stuff.condition,
//     },
//   });
//   // After updating, redirect to the list page
//   redirect('/list');
// }

/**
 * Deletes an existing post from the database.
 * @param id, the id of the post to delete.
 */
export async function deletePost(id: number) {
  // console.log(`deleteStuff id: ${id}`);
  await prisma.post.delete({
    where: { id },
  });
  // After deleting, redirect to the list page
  // redirect('/dashboard');
}

/**
 * Creates a new user in the database.
 * @param credentials, an object with the following properties: email, password.
 */
export async function createUser(credentials: { email: string; password: string }) {
  // console.log(`createUser data: ${JSON.stringify(credentials, null, 2)}`);
  const password = await hash(credentials.password, 10);
  await prisma.user.create({
    data: {
      email: credentials.email,
      password,
    },
  });
}

/**
 * Changes the password of an existing user in the database.
 * @param credentials, an object with the following properties: email, password.
 */
export async function changePassword(credentials: { email: string; password: string }) {
  // console.log(`changePassword data: ${JSON.stringify(credentials, null, 2)}`);
  const password = await hash(credentials.password, 10);
  await prisma.user.update({
    where: { email: credentials.email },
    data: {
      password,
    },
  });
}
