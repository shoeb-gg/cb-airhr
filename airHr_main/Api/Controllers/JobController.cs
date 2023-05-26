using Application.Jobs.Commands;
using Domain.Entities.JobPost;
using Microsoft.AspNetCore.Mvc;

namespace Api.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class JobController : ApiControllerBase
    {
        //[HttpGet("all")
        //public async Task<ActionResult<IList<JobPost>>> GetAllJobs()
        //{

        //}

        [HttpPost]
        public async Task<ActionResult<bool>> CreateJob([FromBody] CreateJobCommand createJobCommand)
        {
            return Ok(await Mediator.Send(createJobCommand));
        }


    }
}
