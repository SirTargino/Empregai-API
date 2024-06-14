import { JobListingService } from "../services/joblistings.service.js";

const jobListingService = new JobListingService();

export class JobListingController {

    async registerJob(req, res) {
        try {
            const { title, description, company, location, salary } = req.body;
            const newJob = await jobListingService.createJob(title, description, company, location, salary);
            return res.status(201).json({ job: newJob });
        } catch (error) {
            console.error(error);
            return res.status(400).json({ error: error.message });
        }
    }

    async getAllJobs(req, res) {
        try {
            const jobs = await jobListingService.getAllJobs();
            return res.status(200).json({ jobs });
        } catch (error) {
            console.error(error);
            return res.status(500).json({ error: "Internal Server Error" });
        }
    }

    async getJobByName(req, res) {
        try {
            const { searchKeyword } = req.body;
            const jobs = await jobListingService.getJobByName(searchKeyword);
            return res.status(200).json({ jobs });
        } catch (error) {
            console.error(error);
            return res.status(500).json({ error: "Internal Server Error" });
        }
    }

    async updateJob(req, res) {
        try {
            const { jobId } = req.params;
            const { title, description, company, location, salary } = req.body;
            const updatedJob = await jobListingService.updateJob(jobId, title, description, company, location, salary);
            return res.status(200).json({ job: updatedJob });
        } catch (error) {
            console.error(error);
            return res.status(400).json({ error: error.message });
        }
    }

    async deleteJob(req, res) {
        try {
            const { jobId } = req.params;
            await jobListingService.deleteJob(jobId);
            return res.status(204).send();
        } catch (error) {
            console.error(error);
            return res.status(400).json({ error: error.message });
        }
    }
}