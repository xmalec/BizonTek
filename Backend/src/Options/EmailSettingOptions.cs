namespace Web.Options
{
    public class EmailSettingOptions
    {
        public const string SectionName = "EmailSetting";

        public string Email { get; set; }
        public string FromEmail { get; set; }
        public string FromDisplayName { get; set; }
        public string Password { get; set; }
        public string Host { get; set; }
        public int Port { get; set; }
        public string LeadTargetEmail { get; set; }
    }
}
