/*
  Warnings:

  - A unique constraint covering the columns `[product_id]` on the table `stock` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "stock_product_id_key" ON "stock"("product_id");
