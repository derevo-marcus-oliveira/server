/*
  Warnings:

  - You are about to alter the column `preco` on the `pet` table. The data in that column could be lost. The data in that column will be cast from `Decimal` to `Float`.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_pet" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "animal" INTEGER NOT NULL,
    "raca" INTEGER NOT NULL,
    "idade" INTEGER NOT NULL,
    "sexo" INTEGER NOT NULL,
    "nome" TEXT,
    "observacao" TEXT,
    "preco" REAL,
    "url" TEXT
);
INSERT INTO "new_pet" ("animal", "id", "idade", "nome", "observacao", "preco", "raca", "sexo", "url") SELECT "animal", "id", "idade", "nome", "observacao", "preco", "raca", "sexo", "url" FROM "pet";
DROP TABLE "pet";
ALTER TABLE "new_pet" RENAME TO "pet";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
