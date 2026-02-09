/*
  Warnings:

  - You are about to drop the column `createdAt` on the `story` table. All the data in the column will be lost.
  - You are about to drop the column `updatedAt` on the `story` table. All the data in the column will be lost.
  - You are about to drop the column `shortDesc` on the `storydetail` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "story" DROP COLUMN "createdAt",
DROP COLUMN "updatedAt",
ADD COLUMN     "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "updated_at" TIMESTAMP(3);

-- AlterTable
ALTER TABLE "storydetail" DROP COLUMN "shortDesc",
ADD COLUMN     "shortdesc" TEXT;

-- CreateTable
CREATE TABLE "question" (
    "id" SERIAL NOT NULL,
    "question" TEXT NOT NULL,
    "explanation" TEXT,
    "storyDetailId" INTEGER NOT NULL,

    CONSTRAINT "question_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "choice" (
    "id" SERIAL NOT NULL,
    "text" TEXT NOT NULL,
    "isCorrect" BOOLEAN NOT NULL DEFAULT false,
    "questionId" INTEGER NOT NULL,

    CONSTRAINT "choice_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "question" ADD CONSTRAINT "question_storyDetailId_fkey" FOREIGN KEY ("storyDetailId") REFERENCES "storydetail"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "choice" ADD CONSTRAINT "choice_questionId_fkey" FOREIGN KEY ("questionId") REFERENCES "question"("id") ON DELETE CASCADE ON UPDATE CASCADE;
