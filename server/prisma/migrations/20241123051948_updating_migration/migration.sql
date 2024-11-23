/*
  Warnings:

  - The values [CASH,CARD,TRANSFER] on the enum `Invoice_paymentType` will be removed. If these variants are still used in the database, this will fail.
  - The values [REFRESHMENT,VAPE,CARWASH] on the enum `Product_type` will be removed. If these variants are still used in the database, this will fail.

*/
-- AlterTable
ALTER TABLE `invoice` MODIFY `paymentType` ENUM('Efectivo', 'Tarjeta', 'Transferencia') NOT NULL;

-- AlterTable
ALTER TABLE `product` MODIFY `type` ENUM('Refrigerio', 'Vaper', 'Carwash') NOT NULL;
