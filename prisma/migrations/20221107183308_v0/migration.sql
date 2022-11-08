/*
  Warnings:

  - You are about to drop the column `grade` on the `Profile` table. All the data in the column will be lost.
  - Added the required column `password` to the `Profile` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Profile" DROP COLUMN "grade",
ADD COLUMN     "password" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "Student" ADD COLUMN     "grade" "Grade" NOT NULL DEFAULT 'FRESHMAN';
