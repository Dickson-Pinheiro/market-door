-- CreateTable
CREATE TABLE "stock" (
    "id" SERIAL NOT NULL,
    "quantity" INTEGER NOT NULL,
    "store_id" INTEGER NOT NULL,

    CONSTRAINT "stock_pk" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "stock" ADD CONSTRAINT "stock_store_id_fkey" FOREIGN KEY ("store_id") REFERENCES "store"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;
