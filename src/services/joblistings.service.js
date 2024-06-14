import { db } from "../database/connection.js";
import { formatedDate } from "../middlewares/util/generateDate.middleware.js";

export class JobListingService {

    async createJob(title, description, company, location, salary) {
        return new Promise((resolve, reject) => {
            db.query(`INSERT INTO job_listings (title, description, company, location, salary, publication_date)
                      VALUES (
                      "${title}", 
                      "${description}", 
                      "${company}", 
                      "${location}", 
                      "${salary}", 
                      '${formatedDate}')`,
                (err, rows) => {
                    if (err) {
                        reject(err);
                    } else {
                        resolve(rows);
                    }
                });
        });
    }

    async getAllJobs() {
        return new Promise((resolve, reject) => {
            db.query("SELECT * FROM job_listings",
                (err, rows) => {
                    if (err) {
                        reject(err);
                    } else {
                        resolve(rows);
                    }
                });
        });
    }

    async getJobByName(searchKeyword) {
        return new Promise((resolve, reject) => {
            db.query(`SELECT * FROM job_listings WHERE title LIKE '%${searchKeyword}%'`,
                (err, rows) => {
                    if (err) {
                        reject(err);
                    } else {
                        resolve(rows);
                    }
                });
        });
    }

    async updateJob(jobId, newTitle, newDescription, newCompany, newLocation, newSalary) {
        return new Promise((resolve, reject) => {
            db.query(`UPDATE job_listings 
                     SET title = "${newTitle}", 
                         description = "${newDescription}", 
                         company = "${newCompany}", 
                         location = "${newLocation}", 
                         salary = "${newSalary}" 
                     WHERE id = ${jobId}`,
                (err, rows) => {
                    if (err) {
                        reject(err);
                    } else {
                        resolve(rows);
                    }
                });
        });
    }

    async deleteJob(jobId) {
        return new Promise((resolve, reject) => {
            db.query(`DELETE FROM job_listings WHERE id = ${jobId}`,
                (err, rows) => {
                    if (err) {
                        reject(err);
                    } else {
                        resolve(rows);
                    }
                });
        });
    }
}
