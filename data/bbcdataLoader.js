const bbcdata = require('./datasets/bbcdata.json')
require('dotenv').config()

const sequelize = require('./loader.js')

let i = 0;

(async () => {
    await sequelize.authenticate()
    console.log('Connection has been established successfully.')

    bbcdata.forEach(async recipe => {

        const {
            page: {
                article: {
                    description
                },
                recipe: {
                    collections,
                    cooking_time,
                    prep_time,
                    serves,
                    keywords,
                    nutrition_info,
                    ingredients,
                    courses,
                    cusine,
                    diet_types,
                    skill_level,
                },
                title
            }
        } = recipe

        const failed = []

        await sequelize.models.recipes.create({
            title,
            description,
            collections,
            cooking_time,
            prep_time,
            serves,
            keywords,
            nutrition_info,
            ingredients,
            courses,
            cuisine: cusine,
            diet_types,
            skill_level,
        }).then(() => {
            console.log('created recipe', i)
            i++
        }).catch(e => {
            console.log(e)
            failed.push(title)
            console.log('failed to create recipe', i)
        })
        console.log(failed)
    })
})()
