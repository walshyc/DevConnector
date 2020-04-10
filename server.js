const express = require('express')
const connectDB = require('./config/db')
const users = require('./routes/api/users')
const profile = require('./routes/api/profile')
const posts = require('./routes/api/posts')
const auth = require('./routes/api/auth')

const app = express()

// Connect Databade
connectDB()

// Init Middleware
app.use(express.json({
    extended: false
}))

app.get('/', (req, res) => res.send('<h1>API Running</h1>'))

// Define Routes
app.use('/api/users', users)
app.use('/api/profile', profile)
app.use('/api/posts', posts)
app.use('/api/auth', auth)

// Define port
const PORT = process.env.PORT || 5000

app.listen(PORT, () => console.log(`Server Started on ${PORT}`))