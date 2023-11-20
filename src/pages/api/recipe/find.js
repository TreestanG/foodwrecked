const { prisma } = require("../auth/[...nextauth]");

export default async function handle(req, res) {
    console.log(req.body)
    const recipes = await prisma.recipe.findMany()
    res.json(recipes)


}