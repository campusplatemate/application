/*
  Warnings:

  - A unique constraint covering the columns `[email]` on the table `Feedback` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "Feedback_email_key" ON "Feedback"("email");
