/*
  Warnings:

  - You are about to drop the column `userId` on the `Rating` table. All the data in the column will be lost.
  - Added the required column `authorId` to the `Rating` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Rating" DROP CONSTRAINT "Rating_userId_fkey";

-- DropForeignKey
ALTER TABLE "Recipe" DROP CONSTRAINT "Recipe_authorId_fkey";

-- AlterTable
ALTER TABLE "Rating" DROP COLUMN "userId",
ADD COLUMN     "authorId" TEXT NOT NULL;

-- AddForeignKey
ALTER TABLE "Recipe" ADD CONSTRAINT "Recipe_authorId_fkey" FOREIGN KEY ("authorId") REFERENCES "Account"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Rating" ADD CONSTRAINT "Rating_authorId_fkey" FOREIGN KEY ("authorId") REFERENCES "Account"("id") ON DELETE CASCADE ON UPDATE CASCADE;
