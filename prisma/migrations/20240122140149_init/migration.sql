-- CreateEnum
CREATE TYPE "Role" AS ENUM ('ADMIN', 'USER');

-- CreateTable
CREATE TABLE "User" (
    "id" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "email" TEXT NOT NULL,
    "role" "Role" NOT NULL DEFAULT 'USER',
    "image" TEXT,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "BucketListGame" (
    "id" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "category" TEXT NOT NULL,
    "gameCover" TEXT NOT NULL,
    "mood" TEXT NOT NULL,
    "infos" TEXT NOT NULL,
    "releaseDate" TIMESTAMP(3) NOT NULL,
    "addedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "updatedBy" TEXT NOT NULL,
    "isPlayed" BOOLEAN NOT NULL DEFAULT false,
    "isSolo" BOOLEAN NOT NULL DEFAULT false,

    CONSTRAINT "BucketListGame_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Link" (
    "id" TEXT NOT NULL,
    "link" TEXT NOT NULL DEFAULT 'no mood',
    "title" TEXT NOT NULL DEFAULT '',

    CONSTRAINT "Link_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "_BucketListGameToLink" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");

-- CreateIndex
CREATE UNIQUE INDEX "BucketListGame_userId_key" ON "BucketListGame"("userId");

-- CreateIndex
CREATE UNIQUE INDEX "_BucketListGameToLink_AB_unique" ON "_BucketListGameToLink"("A", "B");

-- CreateIndex
CREATE INDEX "_BucketListGameToLink_B_index" ON "_BucketListGameToLink"("B");

-- AddForeignKey
ALTER TABLE "BucketListGame" ADD CONSTRAINT "BucketListGame_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_BucketListGameToLink" ADD CONSTRAINT "_BucketListGameToLink_A_fkey" FOREIGN KEY ("A") REFERENCES "BucketListGame"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_BucketListGameToLink" ADD CONSTRAINT "_BucketListGameToLink_B_fkey" FOREIGN KEY ("B") REFERENCES "Link"("id") ON DELETE CASCADE ON UPDATE CASCADE;
