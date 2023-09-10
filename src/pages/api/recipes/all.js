import { sequelizeModels } from "../../../../data/loader"
import { Op } from "sequelize"

export default async function handler(req, res) {

    const recipes = sequelizeModels[Recipes]

    const allrecipes = recipes.findAll({
        where: {
            cuisine: "Italian"
        }
    })

    try {
        res.status(200).json({
            allrecipes
        })
    } catch {
        res.status(500).json({
            error: "failed to load data"
        })
    }
}