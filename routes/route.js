import express from "express";
import { eventPost, eventChange, eventGet, eventDelete } from '../controller/eventController'
const Router = express.Router();

Router.route("/events").post(eventPost).get(eventGet)

Router.route("/events/:id").put(eventChange).delete(eventDelete)

export default Router;