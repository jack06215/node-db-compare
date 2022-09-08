import { PrismaClient } from "@prisma/client";
import { uuid } from '../utils';

const client = new PrismaClient();

// A `main` function so that we can use async/await
async function main() {
    // Seed the database with users and posts
    let new_uuid = uuid();
    const company1 = await client.company.create({
        data: {
            tid: uuid(),
            company_name: "company1",
            subscription: `sub/subscription-${new_uuid}.json`,
        }
    });
    console.log(`created company ${JSON.stringify(company1)}`);

    new_uuid = uuid();
    const company2 = await client.company.create({
        data: {
            tid: new_uuid,
            company_name: "company2",
            subscription: `sub/subscription-${new_uuid}.json`,
        }
    });
    console.log(`created company ${JSON.stringify(company2)}`);
}

main()
    .catch((e) => console.error(e))
    .finally(async () => {
        await client.$disconnect();
    });
