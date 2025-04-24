-- CreateTable
CREATE TABLE "Post" (
    "id" SERIAL NOT NULL,
    "food" TEXT NOT NULL,
    "quantity" INTEGER NOT NULL,
    "bestDate" TEXT NOT NULL,
    "image" TEXT NOT NULL,
    "location" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "owner" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Post_pkey" PRIMARY KEY ("id")
);
