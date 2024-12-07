import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function incrementAllUserCurrency() {
  try {
    const result = await prisma.user.updateMany({
      data: {
        currency: { increment: 1 },
      },
    });

    console.log(`Successfully incremented currency for ${result.count} users`);
  } catch (error) {
    console.error("Error incrementing currency:", error);
    process.exit(1);
  } finally {
    await prisma.$disconnect();
  }
}
export default incrementAllUserCurrency;
