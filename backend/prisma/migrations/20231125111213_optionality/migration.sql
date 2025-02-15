/*
  Warnings:

  - Made the column `eventId` on table `Team` required. This step will fail if there are existing NULL values in that column.
  - Made the column `challengeId` on table `submissions` required. This step will fail if there are existing NULL values in that column.
  - Made the column `userId` on table `submissions` required. This step will fail if there are existing NULL values in that column.
  - Made the column `teamId` on table `submissions` required. This step will fail if there are existing NULL values in that column.

*/
-- DropForeignKey
ALTER TABLE "Team" DROP CONSTRAINT "Team_eventId_fkey";

-- DropForeignKey
ALTER TABLE "submissions" DROP CONSTRAINT "submissions_challengeId_fkey";

-- DropForeignKey
ALTER TABLE "submissions" DROP CONSTRAINT "submissions_teamId_fkey";

-- DropForeignKey
ALTER TABLE "submissions" DROP CONSTRAINT "submissions_userId_fkey";

-- AlterTable
ALTER TABLE "Team" ALTER COLUMN "eventId" SET NOT NULL;

-- AlterTable
ALTER TABLE "submissions" ALTER COLUMN "challengeId" SET NOT NULL,
ALTER COLUMN "userId" SET NOT NULL,
ALTER COLUMN "teamId" SET NOT NULL;

-- AddForeignKey
ALTER TABLE "submissions" ADD CONSTRAINT "submissions_userId_fkey" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "submissions" ADD CONSTRAINT "submissions_teamId_fkey" FOREIGN KEY ("teamId") REFERENCES "Team"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "submissions" ADD CONSTRAINT "submissions_challengeId_fkey" FOREIGN KEY ("challengeId") REFERENCES "challenges"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Team" ADD CONSTRAINT "Team_eventId_fkey" FOREIGN KEY ("eventId") REFERENCES "events"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
