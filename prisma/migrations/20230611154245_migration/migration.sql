-- CreateTable
CREATE TABLE "Text" (
    "id" SERIAL NOT NULL,
    "language" TEXT NOT NULL,
    "translatedText" TEXT NOT NULL,

    CONSTRAINT "Text_pkey" PRIMARY KEY ("id")
);
