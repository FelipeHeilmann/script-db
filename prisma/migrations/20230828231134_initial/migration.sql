-- CreateTable
CREATE TABLE "Testament" (
    "id" INTEGER NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "min_points" INTEGER NOT NULL,
    "image_url" TEXT NOT NULL,

    CONSTRAINT "Testament_pkey" PRIMARY KEY ("id")
);
