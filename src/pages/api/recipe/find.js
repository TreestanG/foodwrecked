import findAcc from "../../../../util/findAccFromEmail";

const { prisma } = require("../auth/[...nextauth]");


export default async function handle(req, res) {

    if (req.method === 'POST') {
        const data = req.body
        const id = data.user

        let acc = await findAcc(prisma, id)

        const recipe = await prisma.recipe.findMany({
            where: {
                authorId: acc.id
            }
        })

        res.json(recipe)
    } else {
        const recipes = await prisma.recipe.findMany()
        recipes.sort((a, b) => {
            if (a.reviewCount === b.reviewCount) {
                return b.rating - a.rating; // Sort by rating if review count is the same
            }
            return b.reviewCount - a.reviewCount; // Sort by review count
        })
        
        res.json(recipes)
    }
}