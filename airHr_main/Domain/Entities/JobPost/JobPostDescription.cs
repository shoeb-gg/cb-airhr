namespace Domain.Entities.Job
{
    public class JobPostDescription
    {
        public string JobTitle{ get; set; } 
        public string JobDescription { get; set; }
        public string CompanyName { get; set; }
        public int Salary { get; set;}
        public string SalaryUnit { get; set; }
        public int Department { get; set; }
        public int JobHours { get; set; }
        public int ContactAddress { get; set; }
    }
}
