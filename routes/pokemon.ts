import express, { Router, Request, Response } from "express"
import axios from "axios"

const router: Router = express.Router()

router.get("/", async (req: Request, res: Response) => {
    try {
        const { data } = await axios.get("https://pokeapi.co/api/v2/pokemon")
        res.json(data.results)
    } catch (err) {
        console.error("Error fetching pokemons", err)
        res.status(400).send(err)
    }
})

export default router