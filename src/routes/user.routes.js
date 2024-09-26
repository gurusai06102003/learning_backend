import {Router} from "express";
import { registerUser } from "../controllers/user.controller.js";
console.log("this is userroute oae");
console.log(registerUser);
const router = Router();

router.route("/resgister").post(registerUser);
export default router
