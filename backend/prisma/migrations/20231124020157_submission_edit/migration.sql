/*
  Warnings:

  - You are about to drop the column `image` on the `submissions` table. All the data in the column will be lost.
  - You are about to drop the column `isPublished` on the `submissions` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "submissions" DROP COLUMN "image",
DROP COLUMN "isPublished";
