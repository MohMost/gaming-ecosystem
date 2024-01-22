/*
  Warnings:

  - Added the required column `gameId` to the `Link` table without a default value. This is not possible if the table is not empty.
  - Added the required column `passeword` to the `User` table without a default value. This is not possible if the table is not empty.
  - Added the required column `userName` to the `User` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Link" ADD COLUMN     "gameId" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "User" ADD COLUMN     "passeword" TEXT NOT NULL,
ADD COLUMN     "userName" TEXT NOT NULL;

-- AddForeignKey
ALTER TABLE "Link" ADD CONSTRAINT "Link_gameId_fkey" FOREIGN KEY ("gameId") REFERENCES "BucketListGame"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
