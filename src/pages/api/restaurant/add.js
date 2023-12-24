import { prisma } from "../auth/[...nextauth]";

export default async function handle(req, res) {
    if (req.method === 'POST') {
        
        const {data, email} = req.body   
        try {
            const user = await prisma.user.findUnique({
                where: {
                    email: email
                }
            
            })

            if (!user) {
                console.log('user not found')

                res.status(404).json({ error: 'User not found' });
                return;
            }

            const account = await prisma.account.findFirst({
                where: {
                    userId: user.id
                }
            })

            if (!account) {
                console.log('not found')
                res.status(404).json({ error: 'Account not found' });
                return;
            }
            
            const restaurant = await prisma.restaurant.create({
                data: {
                    ...data, 
                    author: {
                        connect: {
                            id: account.id
                        }
                    },
                },
            });

            res.status(200).json({ id: restaurant.id });


            
        } catch (error) {
            console.log("Error occured ", error);
            res.status(500).json({ error });
        } finally {
            await prisma.$disconnect();
        }
    } else {
        res.status(405).json({ error: 'Method not allowed' });
    }
}