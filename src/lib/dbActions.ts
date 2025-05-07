'use server';

import { Post } from '@prisma/client';
import { hash } from 'bcrypt';
import { redirect } from 'next/navigation';
import { prisma } from './prisma';

/**
 * Adds a new post to the database.
 * @param post, an object with the following properties:
 * description, location, food, quantity, best date, image, and owner.
 */

export async function createPost(post: {
  ownerName: string;
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
      ownerName: post.ownerName,
      food: post.food,
      quantity: post.quantity,
      bestDate: post.bestDate,
      location: post.location,
      description: post.description,
      image: post.image,
      owner: post.owner,
    },
  });
  redirect('/dashboard');
}
/**
 * Edits an existing stuff in the database.
 * @param stuff, an object with the following properties: id, name, quantity, owner, condition.
 */
export async function editPost(post: Post) {
  // console.log(`editStuff data: ${JSON.stringify(stuff, null, 2)}`);
  await prisma.post.update({
    where: { id: post.id },
    data: {
      ownerName: post.ownerName,
      food: post.food,
      quantity: post.quantity,
      bestDate: post.bestDate,
      image: post.image,
      description: post.description,
      location: post.location,
      owner: post.owner,
    },
  });
  // After updating, redirect to the list page
  redirect('/dashboard');
}

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
 * Adds a new feedback to the database.
 * @param feedback, an object with the following properties: name, email, and message.
 */

export async function createFeedback(feedback: { name: string; email: string; message: string }) {
  // console.log(`createFeedback data: ${JSON.stringify(stuff, null, 2)}`);

  await prisma.feedback.create({
    data: {
      name: feedback.name,
      email: feedback.email,
      message: feedback.message,
    },
  });
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
