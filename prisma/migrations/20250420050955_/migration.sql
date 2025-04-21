/*
  Warnings:

  - A unique constraint covering the columns `[name]` on the table `RewardItem` will be added. If there are existing duplicate values, this will fail.

*/
-- DropEnum
DROP TYPE "Condition";

-- CreateIndex
CREATE UNIQUE INDEX "RewardItem_name_key" ON "RewardItem"("name");
