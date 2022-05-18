/*
  Warnings:

  - Added the required column `type` to the `Type` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `Type` ADD COLUMN `type` VARCHAR(191) NOT NULL;
