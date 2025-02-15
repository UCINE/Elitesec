-- AlterTable
ALTER TABLE "challenges" ADD COLUMN     "firstBloodId" TEXT,
ADD COLUMN     "flag" TEXT,
ADD COLUMN     "score" INTEGER NOT NULL DEFAULT 0;

-- AlterTable
ALTER TABLE "submissions" ADD COLUMN     "score" INTEGER NOT NULL DEFAULT 0;

-- AddForeignKey
ALTER TABLE "challenges" ADD CONSTRAINT "challenges_firstBloodId_fkey" FOREIGN KEY ("firstBloodId") REFERENCES "users"("id") ON DELETE SET NULL ON UPDATE CASCADE;
