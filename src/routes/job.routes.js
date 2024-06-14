import { Router } from "express";
import { JobListingController } from "../controllers/joblistings.controller.js";
import { validateJob } from "../middlewares/validations/validateJob.middleware.js";
import { handleValidationResult } from "../middlewares/shared/handleValidations.middleware.js";

export const jobRouter = Router();

const jobListingController = new JobListingController();

jobRouter.post("/", validateJob, handleValidationResult, jobListingController.registerJob);

jobRouter.get("/", jobListingController.getAllJobs);

jobRouter.get("/search", jobListingController.getJobByName);

jobRouter.put("/:jobId", jobListingController.updateJob);

jobRouter.delete("/:jobId", jobListingController.deleteJob);