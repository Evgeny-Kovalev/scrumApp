const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const User = require('../models/user')

const tokenExpiresIn = 1000 * 60 * 60 * 24 // DAY IN MS
// const tokenExpiresIn = 5000

exports.postSignup = async (req, res, next) => {
    try {
        const {email, password, name} = req.body

        const user = await User.findOne({email})
        if (user) return res.status(401).json({message: "User already exists"})
        
        const hashedPassword = await bcrypt.hash(password, 12)

        const newUser = new User({ name, email, password: hashedPassword })
        await newUser.save()

        const token = jwt.sign(
            {
                email: newUser.email,
                userId: newUser._id.toString(),
            },
            process.env.SECRET_KEY,
            {expiresIn: tokenExpiresIn}
        )

        return res.status(200).json({
            user: {
                _id: newUser._id,
                name: newUser.name,
                email: newUser.email,
                token,
                expiresIn: tokenExpiresIn
            }
        })
    }
    catch(err) {
        res.status(401).json({message: "Signup failed"})
    }
}

exports.postLogin = async (req, res, next) => {
    try {
        const {email, password} = req.body
        let loadedUser

        const user = await User.findOne({email})
        if (!user) return res.status(401).json({message: "User not found"})
        loadedUser = user

        const isEqual = await bcrypt.compare(password, user.password)
        if (!isEqual) return res.status(401).json({message: "Email or password is not correct"})

        const token = jwt.sign(
            {
                email: loadedUser.email,
                userId: loadedUser._id.toString(),
            },
            process.env.SECRET_KEY,
            {expiresIn: tokenExpiresIn}
        )

        res.status(200).json({
            user: {
                _id: loadedUser._id,
                name: loadedUser.name,
                email: loadedUser.email,
                token,
                expiresIn: tokenExpiresIn
            }
        })
            
    }
    catch(err) {
        res.status(401).json({message: "Login failed"})
    }
}