/*
  Warnings:

  - Made the column `authorId` on table `Report` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "Report" ALTER COLUMN "authorId" SET NOT NULL;
