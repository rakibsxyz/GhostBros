/*
  Warnings:

  - Added the required column `rating` to the `movies` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "movies" ADD COLUMN     "rating" INTEGER NOT NULL;
