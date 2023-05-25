namespace Domain.Common
{
    public abstract class AuditableEntity
    {
        public Guid Id { get; set; }
        public DateTime Created { get; set; }
        public DateTime? LastModified { get; set; }
        public string? EntityId { get; set; }
        public string? Entity { get; set; }

    }
}
