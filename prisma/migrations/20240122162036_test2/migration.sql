/*
  Warnings:

  - You are about to drop the column `userId` on the `BucketListGame` table. All the data in the column will be lost.

*/
-- DropIndex
DROP INDEX "BucketListGame_userId_key";

-- AlterTable
ALTER TABLE "BucketListGame" DROP COLUMN "userId";
