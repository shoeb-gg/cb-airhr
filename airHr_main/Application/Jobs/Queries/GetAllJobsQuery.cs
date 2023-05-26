using Application.Common.Interfaces;
using Application.Jobs.Commands;
using Domain.Entities.JobPost;
using MediatR;

namespace Application.Jobs.Queries
{
    internal class GetAllJobsQuery : IRequest<IList<JobPost>>
    {
        public class GetAllJobsQueryHandler : IRequestHandler<GetAllJobsQuery, IList<JobPost>>
        {
            private readonly IJobService _jobService;
            public GetAllJobsQueryHandler(IJobService jobService)
            {
                _jobService = jobService;
            }

            public Task<IList<JobPost>> Handle(GetAllJobsQuery request, CancellationToken cancellationToken)
            {
                return null;
            }

        }

    }
}