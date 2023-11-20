import { prisma } from "../auth/[...nextauth]";

export default async function handle(req, res) {
    if (req.method === 'POST') {

        const jsonData = req.body;
        console.log(jsonData)

        try {
            const user = await prisma.user.findUnique({
                where: {
                    email: jsonData.author
                }
            
            })

            if (!user) {
                res.status(404).json({ error: 'User not found' });
                return;
            }

            const account = await prisma.account.findFirst({
                where: {
                    userId: user.id
                }
            })

            if (!account) {
                res.status(404).json({ error: 'Account not found' });
                return;
            }

            const recipe = await prisma.recipe.create({
                data: {
                    ...jsonData.recipe, author: {
                        connect: {
                            id: account.id
                        }
                    }
                },

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
    }
}