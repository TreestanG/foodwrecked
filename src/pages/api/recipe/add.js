import { prisma } from "../auth/[...nextauth]";

export default async function handle(req, res) {
    console.log(req.body)

   /* if (req.method === 'POST') {
        const jsonData = req.body;

        try {
            const recipe = await prisma.recipe.create({
                data: jsonData,
            });

            res.status(200).json({ id: recipe.id });
             console.log('worked')
        } catch (error) {
            res.status(500).json({ error: 'Unable to create recipe' });
            console.log(error)
        } finally {
            await prisma.$disconnect();
        }
    } else {
        res.status(405).json({ error: 'Method not allowed' });
    } */
}