
module.exports = {
    load(DataTypes) {
        return {
            name: 'user_recipes',
            attributes: {
                id: {
                    type: DataTypes.INTEGER,
                    primaryKey: true,
                    autoIncrement: true,
                },
                user_id: {
                    type: DataTypes.UUID,
                    allowNull: false,
                    references: {
                        model: 'accounts',
                        key: 'id'
                    },
                },
                title: {
                    type: DataTypes.STRING,
                    allowNull: false,
                    unique: true,
                },
                description: {
                    type: DataTypes.STRING,
                    allowNull: false,
                },
                collections: DataTypes.ARRAY(DataTypes.STRING),
                cooking_time: DataTypes.INTEGER,
                prep_time: DataTypes.INTEGER,
                serves: DataTypes.INTEGER,
                nutrition_info: DataTypes.ARRAY(DataTypes.STRING),
                ingredients: DataTypes.ARRAY(DataTypes.STRING),
                instructions: {
                    type: DataTypes.STRING,
                    allowNull: true,
                },
                image: {
                    type: DataTypes.STRING,
                    allowNull: true,
                },
                courses: DataTypes.ARRAY(DataTypes.STRING),
                cuisine: DataTypes.STRING,
                diet_types: DataTypes.ARRAY(DataTypes.STRING),
                skill_level: DataTypes.STRING,
                keywords: DataTypes.ARRAY(DataTypes.STRING),
                images: {
                    type: DataTypes.ARRAY(DataTypes.STRING),
                    allowNull: true,
                }
            },
            options: {
                timestamps: true,
            }
        }
    }
}