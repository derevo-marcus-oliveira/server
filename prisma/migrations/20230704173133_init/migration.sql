-- CreateTable
CREATE TABLE "pet" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "animal" INTEGER NOT NULL,
    "raca" INTEGER NOT NULL,
    "idade" INTEGER NOT NULL,
    "sexo" INTEGER NOT NULL,
    "nome" TEXT,
    "observacao" TEXT,
    "preco" DECIMAL,
    "url" TEXT
);
