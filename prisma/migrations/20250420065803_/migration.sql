/*
  Warnings:

  - You are about to drop the column `category` on the `RewardItem` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "RewardItem" DROP COLUMN "category";

-- DropEnum
DROP TYPE "Category";
