using Domain.Common;
using Domain.Entities.Job;

namespace Domain.Entities.JobPost
{
    public class JobPost : AuditableEntity
    {
        public JobPostDescription JobDescription { get; set; }
        public JobPostSelectionCriteria JobSelectionCriteria { get; set; }
        public IList<JobPostChannels>  JobChannels { get; set; }
        public JobPostSchedule JobSchedule { get; set; }
    }
}