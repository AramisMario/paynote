/*
  Warnings:

  - You are about to alter the column `amount` on the `Loan` table. The data in that column could be lost. The data in that column will be cast from `Decimal(65,30)` to `Decimal(10,3)`.

*/
-- AlterTable
ALTER TABLE `Loan` MODIFY `amount` DECIMAL(10, 3) NOT NULL DEFAULT 0;
