/*
  Warnings:

  - You are about to drop the `_BucketListGameToLink` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "BucketListGame" DROP CONSTRAINT "BucketListGame_userId_fkey";

-- DropForeignKey
ALTER TABLE "_BucketListGameToLink" DROP CONSTRAINT "_BucketListGameToLink_A_fkey";

-- DropForeignKey
ALTER TABLE "_BucketListGameToLink" DROP CONSTRAINT "_BucketListGameToLink_B_fkey";

-- DropTable
DROP TABLE "_BucketListGameToLink";
