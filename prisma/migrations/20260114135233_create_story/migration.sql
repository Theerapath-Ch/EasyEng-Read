-- CreateEnum
CREATE TYPE "StoryCategory" AS ENUM ('MOTIVATION', 'LOVE', 'LIFE', 'SELF_HELP');

-- CreateEnum
CREATE TYPE "StoryLevel" AS ENUM ('A1', 'A2', 'B1', 'B2', 'C1', 'C2');

-- AlterTable
CREATE SEQUENCE users_id_seq;
ALTER TABLE "users" ALTER COLUMN "id" SET DEFAULT nextval('users_id_seq');
ALTER SEQUENCE users_id_seq OWNED BY "users"."id";

-- CreateTable
CREATE TABLE "story" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "shortDesc" TEXT,
    "detail" TEXT,
    "category" "StoryCategory" NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "level" "StoryLevel" NOT NULL,

    CONSTRAINT "story_pkey" PRIMARY KEY ("id")
);
