import { RequestHandler } from "express";
import Video from "./Video";

// controllers
// creating a video
export const createVideo: RequestHandler = async (req, res) => {
  const videoFound = await Video.findOne({ url: req.body.url });
  if (videoFound) {
    return res.status(301).json({ message: "The URL already exists" });
  }
  const video = new Video(req.body);
  const savedVideo = await video.save();
  res.json(savedVideo);
};

// getting all videos
export const getVideos: RequestHandler = async (req, res) => {
  try {
    const videos = await Video.find();
    return res.json(videos);
  } catch (err) {
    res.json(err);
  }
};

// getting 1 video
export const getVideo: RequestHandler = async (req, res) => {
  const videoFound = await Video.findById(req.params.id);
  if (!videoFound) {
    return res.status(204).json();
  }
  return res.json(videoFound);
};

// deleting a video
export const deleteVideo: RequestHandler = async (req, res) => {
  const videoFound = await Video.findByIdAndDelete(req.params.id);
  if (!videoFound) {
    return res.status(204).json();
  }
  return res.json(videoFound);
};

// updating a video
export const updateVideo: RequestHandler = async (req, res) => {
  const videoUpdated = await Video.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
  });
  if (!videoUpdated) {
    return res.status(204).json();
  }
  return res.json(videoUpdated);
};
