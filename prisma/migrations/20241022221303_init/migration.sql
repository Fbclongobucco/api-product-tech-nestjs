-- CreateTable
CREATE TABLE "tb_products" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "brand" TEXT NOT NULL,
    "price" DECIMAL NOT NULL,
    "url_product" TEXT NOT NULL
);
