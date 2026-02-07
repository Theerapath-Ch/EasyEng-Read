-- CreateTable
CREATE TABLE "storydetail" (
    "id" SERIAL NOT NULL,
    "idstory" INTEGER NOT NULL,
    "shortDesc" TEXT,
    "detail" TEXT,

    CONSTRAINT "storydetail_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "storydetail" ADD CONSTRAINT "storydetail_idstory_fkey" FOREIGN KEY ("idstory") REFERENCES "story"("id") ON DELETE CASCADE ON UPDATE CASCADE;
