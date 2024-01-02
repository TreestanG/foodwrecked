export default async function findAcc(prisma, email) {
    const user = await prisma.user.findUnique({
        where: {
            email: email
        }
    })

    if (!user) {
        return null
    }

    const account = await prisma.account.findFirst({
        where: {
            userId: user.id
        }
    })

    if (!account) {
        return null
    }

    return account
}