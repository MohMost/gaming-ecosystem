/*
  Warnings:

  - The `category` column on the `BucketListGame` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - A unique constraint covering the columns `[userId]` on the table `BucketListGame` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `userId` to the `BucketListGame` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "BucketListGame" ADD COLUMN     "userId" TEXT NOT NULL,
DROP COLUMN "category",
ADD COLUMN     "category" TEXT[],
ALTER COLUMN "mood" DROP NOT NULL,
ALTER COLUMN "infos" DROP NOT NULL,
ALTER COLUMN "releaseDate" DROP NOT NULL,
ALTER COLUMN "updatedBy" DROP NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "BucketListGame_userId_key" ON "BucketListGame"("userId");

-- AddForeignKey
ALTER TABLE "BucketListGame" ADD CONSTRAINT "BucketListGame_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
