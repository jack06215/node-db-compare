-- CreateTable
CREATE TABLE "companies" (
    "id" SERIAL NOT NULL,
    "tid" TEXT NOT NULL,
    "company_name" TEXT NOT NULL,
    "subscription" TEXT,
    "revoke" BOOLEAN NOT NULL DEFAULT false,

    CONSTRAINT "companies_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "companies_tid_key" ON "companies"("tid");
