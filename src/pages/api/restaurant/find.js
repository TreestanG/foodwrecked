import findAcc from "../../../../util/findAccFromEmail";

const { prisma } = require("../auth/[...nextauth]");

export default async function handle(req, res) {
    if (req.method === 'POST') {
        const data = req.body
        const id = data.user

        let acc = await findAcc(prisma, id)

        const restaurants = await prisma.restaurant.findMany({
            where: {
                authorId: acc.id
            },
        })

        
        res.status(200).json(restaurants)
    } else {
        const restaurants = await prisma.restaurant.findMany({
            take: 10
        })

        res.status(200).json(restaurants)
    }
}