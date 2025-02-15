-- AlterTable
ALTER TABLE "Team" ADD COLUMN     "isBanned" BOOLEAN NOT NULL DEFAULT false;

-- AlterTable
ALTER TABLE "events" ADD COLUMN     "maxTeamSize" INTEGER NOT NULL DEFAULT 1;
