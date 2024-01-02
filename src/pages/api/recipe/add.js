import { prisma } from "../auth/[...nextauth]";
import { Formidable } from 'formidable'
import { renameSync } from "fs";
import path from 'path'
import findAcc from "../../../../util/findAccFromEmail";

export const config = {
    api: {
        bodyParser: false,
    }
}

export default async function handle(req, res) {
    if (req.method === 'POST') {
        const data = await new Promise((res, rej) => {
            const form = new Formidable()
            form.parse(req, (err, fields, files) => {
                if (err) rej(err)
                res({ fields, files })
            })
        })

        let jsonData = Object.entries(data.fields).map(([k, v]) => {
            v = v[0]
            if (v.split(',').length > 1) {
                return [k, v.split(',')]
            }
            if (['collections', 'instructions', 'keywords', 'nutrition_info', 'ingredients', 'courses'].includes(k)) {
                return [k, [v]]
            }
            if (['prep_time', 'cooking_time', 'serves', 'rating'].includes(k)) {
                return [k, parseInt(v)]
            }
            return [k, v]
        })

        jsonData = Object.fromEntries(jsonData)

        try {
            
            const acc = await findAcc(prisma, jsonData.author)

            const file = data.files.image
            if (file) {
                const tempPath = file[0].filepath;
                const fileExt = path.extname(file[0].originalFilename).toLowerCase();

                renameSync(tempPath, `./public/uploads/${file[0].newFilename}${fileExt}`, (err) => {
                    if (err) {
                        console.log(err);
                        res.status(500).json({ error: 'Could not save file.' });
                        return;
                    }
                })
            }
            const recipe = await prisma.recipe.create({
                data: {
                    ...jsonData,
                    author: {
                        connect: {
                            id: acc.id
                        }
                    },
                    images: file ? `/uploads/${file[0].newFilename}${fileExt}`:"",
                },
            });

            res.status(200).json({ id: recipe.id });



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