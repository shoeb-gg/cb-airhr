using Domain.Entities;
using Domain.Entities.JobPost;
using Microsoft.EntityFrameworkCore;
using System.Security.Policy;

namespace Application.Common.Interfaces
{
    public interface IApplicationDbContext
    {
        DbSet<JobPost> JobPost { get; }
        Task<int> SaveChangesAsync(CancellationToken cancellationToken);

    }
}