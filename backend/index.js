require('dotenv').config()

const errorLogger = require('./middleware/errorLogger')
const errorHandler = require('./middleware/errorHandler')

const express = require('express')
const cors = require('cors')
const mongoose = require('mongoose')

const authRoutes = require('./routes/auth')
const projectsRoutes = require('./routes/projects')
const iterationsRoutes = require('./routes/iterations')
const tasksRoutes = require('./routes/tasks')

const app = express()

app.use(express.json());
app.use(cors())

app.use('/api/projects', projectsRoutes)
app.use('/api/iterations', iterationsRoutes)
app.use('/api/tasks', tasksRoutes)
app.use('/api/auth', authRoutes)

app.use((req, res) => {
    res.status(404).send("Page not found")
})

app.use(errorLogger);
app.use(errorHandler);

mongoose.connect(process.env.DB_URL)
.then(res => {
    console.log("Connected!")
    app.listen(process.env.PORT || 5000)
})
.catch(err => console.log(err))
