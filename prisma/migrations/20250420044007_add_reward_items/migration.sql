/*
  Warnings:

  - You are about to drop the `Stuff` table. If the table is not empty, all the data it contains will be lost.

*/
-- CreateEnum
CREATE TYPE "Category" AS ENUM ('TECHNOLOGY', 'FASHION', 'GIFTCARDS');

-- DropTable
DROP TABLE "Stuff";

-- CreateTable
CREATE TABLE "RewardItem" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "cost" INTEGER NOT NULL,
    "imageUrl" TEXT NOT NULL,
    "quantity" INTEGER NOT NULL DEFAULT 0,
    "category" "Category" NOT NULL,

    CONSTRAINT "RewardItem_pkey" PRIMARY KEY ("id")
);
