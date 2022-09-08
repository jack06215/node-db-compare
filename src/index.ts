import { PrismaClient } from '@prisma/client'
import { uuid } from './utils';

const prisma = new PrismaClient()

type Subscription = {
    max_user: number
    storage_capacity_bytes: number
    agree_tou: boolean
    agree_tou_timestamp: string
}

async function main() {
    await prisma.$connect()
    // Seed the database with users and posts
    let new_uuid = uuid();
    let sub: Subscription = {
        max_user: 50,
        storage_capacity_bytes: 512000,
        agree_tou: false,
        agree_tou_timestamp: new Date().toISOString(),
    }
    const company1 = await prisma.company.create({
        data: {
            tid: uuid(),
            company_name: "company1",
            subscription: `sub/subscription-${new_uuid}.json`,
            json_field: sub
        }
    });
    console.log(`created company ${JSON.stringify(company1)}`);

    new_uuid = uuid();
    sub = {
        max_user: 50,
        storage_capacity_bytes: 1024000,
        agree_tou: false,
        agree_tou_timestamp: new Date().toISOString(),
    }
    const company2 = await prisma.company.create({
        data: {
            tid: new_uuid,
            company_name: "company2",
            subscription: `sub/subscription-${new_uuid}.json`,
            json_field: sub
        }
    });
    console.log(`created company ${JSON.stringify(company2)}`);
}

main()
    .then(async () => {
        await prisma.$disconnect()
    })
    .catch(async (e) => {
        console.error(e)
        await prisma.$disconnect()
        process.exit(1)
    })