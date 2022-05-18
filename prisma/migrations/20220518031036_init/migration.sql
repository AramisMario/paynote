/*
  Warnings:

  - Added the required column `paymentCompleteDate` to the `Loan` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `Loan` ADD COLUMN `loanDate` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    ADD COLUMN `paymentCompleteDate` DATETIME(3) NOT NULL;

-- AlterTable
ALTER TABLE `Payment` ADD COLUMN `payType` ENUM('INTERES', 'ABONO') NOT NULL DEFAULT 'INTERES',
    ADD COLUMN `paymentDate` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3);
