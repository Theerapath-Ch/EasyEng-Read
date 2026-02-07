-- CreateEnum
CREATE TYPE "Status" AS ENUM ('E', 'D');

-- AlterTable
ALTER TABLE "story" ADD COLUMN     "status" "Status" NOT NULL DEFAULT 'E';
