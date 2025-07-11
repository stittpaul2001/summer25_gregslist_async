import { AppState } from "../AppState.js";
import { jobsService } from "../services/JobsService.js";
import { getFormData } from "../utils/FormHandler.js";
import { Pop } from "../utils/Pop.js";




export class JobsController {
  constructor() {

    console.log('My JobController')
    AppState.on('jobs', this.drawJobs)
    AppState.on('identity', this.drawJobs)
    AppState.on('identity', this.drawJobForm)


    this.getJobs()
  }

  async drawJobForm() {
    const jobFormElem = document.getElementById('jobForm')
    jobFormElem.querySelector('h2').classList.add('d-none')
    jobFormElem.querySelector('form').classList.remove('d-none')
  }

  async getJobs() {
    try {
      await jobsService.getJobs()
    } catch (error) {
      console.error('cant get jobs', error)
      Pop.error(error, 'cant get jobs!!!')
    }
  }

  async submitJob() {
    try {
      event.preventDefault()
      const jobForm = event.target
      const jobData = getFormData(jobForm)

      await jobsService.createJob(jobData)
    } catch (error) {
      Pop.error(error, 'cant create a Job')
      console.error(error, 'failed to createJob')
      window.location.reload()
    }
  }

  async deleteJob(jobId) {
    const confirmed = await Pop.confirm('Are you sure you want to delete this job?')
    if (!confirmed) {
      return
    }
    try {
      await jobsService.deleteJob(jobId)
    } catch (error) {
      Pop.error(error, 'can not delete Job')
      console.error('delete Job failed', error)
    }
  }

  drawJobs() {
    console.log('drawing jobs!!!')
    const jobs = AppState.jobs
    let jobContent = ''
    jobs.forEach(Job => jobContent += Job.jobListingTemplate)
    const jobsElem = document.getElementById('jobsListings')
    jobsElem.innerHTML = jobContent
  }

}