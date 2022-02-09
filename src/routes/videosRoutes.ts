import { Router } from "express";
const router = Router();

import * as videoCtrl from "./videosController";

// routes
// getting all videos
router.get("/videos", videoCtrl.getVideos);

// getting 1 video
router.get("/videos/:id", videoCtrl.getVideo);

// creating a video
router.post("/videos", videoCtrl.createVideo);

// deleting a video
router.delete("/videos/:id", videoCtrl.deleteVideo);

// updating a video
router.put("/videos/:id", videoCtrl.updateVideo);

export default router;
