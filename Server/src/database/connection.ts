import {Sequelize} from 'sequelize-typescript';


const sequelize = new Sequelize({
    database : process.env.DB_NAME,
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD || '',
    host: process.env.DB_HOST,
    dialect: 'mysql',
    port: Number(process.env.DB_PORT),
    models: [__dirname + '/models'], // Path to your models
})

sequelize.authenticate()
    .then(() => {  
        console.log('Database connection has been established successfully.');
    })
    .catch((error) => {
        console.error('Unable to connect to the database:', error);
    }); 

    sequelize.sync({ force: true })
    .then(() => {
        console.log('Database synchronized successfully.');
    })

    export default sequelize;