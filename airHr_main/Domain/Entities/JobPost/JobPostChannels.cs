namespace Domain.Entities.JobPost
{
    internal class JobPostChannels
    {
        public string ChannelTitle { get; set; }
        public string ChannelPageName { get; set; }
        public int ChannelExpectedReach { get; set; }
        public int ChannelAverageCost { get; set; }
        public string ChannelAverageCostUnit { get; set; }
        public bool ChannelEnabled { get; set; }
    }
}
