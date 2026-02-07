/*
  Warnings:

  - You are about to drop the column `detail` on the `story` table. All the data in the column will be lost.
  - You are about to drop the column `shortDesc` on the `story` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "story" DROP COLUMN "detail",
DROP COLUMN "shortDesc";
