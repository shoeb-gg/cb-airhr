using MediatR;
using Domain.Entities.JobPost;
using Application.Common.Interfaces;

namespace Application.Jobs.Commands
{
    public class CreateJobCommand : IRequest<bool>
    {
        public JobPost NewJob { get; set; }
    }

    public class CreateJobCommandHandler : IRequestHandler<CreateJobCommand, bool>
    {
        private readonly IJobService _jobService;
        public CreateJobCommandHandler(IJobService jobService)
        {
            _jobService = jobService;
        }
        public Task<bool> Handle(CreateJobCommand request, CancellationToken cancellationToken)
        {
            throw new NotImplementedException();
        }
    }
}
