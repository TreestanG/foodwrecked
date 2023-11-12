-- CreateTable
CREATE TABLE "Recipe" (
    "id" SERIAL NOT NULL,
    "collections" TEXT[],
    "cooking_time" INTEGER NOT NULL,
    "prep_time" INTEGER NOT NULL,
    "serves" INTEGER NOT NULL,
    "keywords" TEXT[],
    "ratings" INTEGER NOT NULL,
    "nutrition_info" TEXT[],
    "ingredients" TEXT[],
    "courses" TEXT[],
    "cuisine" TEXT NOT NULL,
    "diet_types" TEXT[],
    "skill_level" TEXT NOT NULL,
    "post_dates" TEXT NOT NULL,
    "images" TEXT[],

    CONSTRAINT "Recipe_pkey" PRIMARY KEY ("id")
);
