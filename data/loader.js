const { Sequelize, DataTypes } = require('sequelize')
require('dotenv').config()
const sequelize = new Sequelize(process.env.DATABASE_URL, { logging: false })
const fs = require('node:fs')
const path = require('node:path')

let models = []

const modelPath = path.join(__dirname, 'models')
const modelFiles = fs.readdirSync(modelPath).filter(f => f.endsWith('.js'))

for (const file of modelFiles) {
    const model = require(path.join(modelPath, file)).load(DataTypes)
    models.push(model)
}

const sequelizeModels = []

for (const model of models) {
    sequelizeModels.push(sequelize.define(model.name, model.attributes, model.options))
}

sequelize.sync({ alter: true })

module.exports = sequelize