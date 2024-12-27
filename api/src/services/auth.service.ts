import { compareSync, hashSync } from "bcrypt"
import prisma from "../prisma/prismaClient"
import { generateToken } from "../utils/jwt"

const login = async (email: string, password: string) => {
    const user = await prisma.user.findUnique({ where: { email } })
    if (!user) {
        throw Error("Invalid Email")
    } else if (!compareSync(password, user.password)) {
        throw Error("Invalid Password!")
    }
    return generateToken(user.id)

}

const register = async (name: string, email: string, password: string) => {
    const user = await prisma.user.findUnique({ where: { email } })
    if (user) throw Error("Email already exist!")

    await prisma.user.create({
        data: { name, email, password: hashSync(password, 10) }
    })
}

export default {
    login, register
}