/*
  Warnings:

  - You are about to drop the column `claimedBy` on the `Post` table. All the data in the column will be lost.
  - You are about to drop the column `points` on the `User` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Post" DROP COLUMN "claimedBy";

-- AlterTable
ALTER TABLE "User" DROP COLUMN "points";
