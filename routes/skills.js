import { Router } from 'express'
import * as skillsCtrl from "../controllers/skills.js"
const router = Router()

/* GET skills listing. */

// localhost:3000/skills - GET
router.get('/', skillsCtrl.index)

// localhost:3000/skills/new - GET
router.get("/new", skillsCtrl.new)

// localhost:3000/skills/:id - GET
router.get("/:id", skillsCtrl.show)

// localhost:3000/skills - POST
router.post("/", skillsCtrl.create)

// localhost:3000/skills/:id - DELETE
router.delete("/:id", skillsCtrl.delete)


export {
  router
}
