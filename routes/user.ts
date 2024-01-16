import express, { Router, Request, Response } from "express"
import { PrismaClient } from "@prisma/client"

const prisma = new PrismaClient()
const router: Router = express.Router()

router.get("/", async function (req: Request, res: Response) {

    try {

        const users = await prisma.user.findMany()

        return res.status(200).send({
            message: "OK",
            users: users
        })

    } catch (err: any) {
        return res.status(500).send({
            message: "ERROR",
            users: JSON.stringify(err)
        })
    }

})

export default router