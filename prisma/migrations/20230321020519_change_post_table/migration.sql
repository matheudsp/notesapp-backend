/*
  Warnings:

  - You are about to drop the column `name` on the `Post` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Post" DROP COLUMN "name",
ADD COLUMN     "title" TEXT;
