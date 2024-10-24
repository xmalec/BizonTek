using MailKit.Net.Smtp;
using MailKit.Security;
using Microsoft.Extensions.Logging;
using Microsoft.Extensions.Options;
using MimeKit;
using Web.Models;
using Web.Options;

namespace Web.Services
{
    public interface IEmailService
    {
        Task SendNewContactInfo(ContactFormModel contact);
    }
    internal class EmailService : IEmailService
    {
        private readonly EmailSettingOptions emailSetting;

        public EmailService(IOptionsMonitor<EmailSettingOptions> emailSetting)
        {
            this.emailSetting = emailSetting.CurrentValue;
        }

        public async Task SendNewContactInfo(ContactFormModel contact)
        {
            var email = new MimeMessage();
            email.Sender = MailboxAddress.Parse(emailSetting.Email);
            email.To.Add(MailboxAddress.Parse(emailSetting.LeadTargetEmail));
            email.Subject = "Nový lead | BizonTek";
            email.Body = new TextPart("plain")
            {
                Text = $"Máte nový lead. \n" +
                $"Jméno: {contact.Name}\n" +
                $"E-mail: {contact.Email}\n" +
                $"Zpráva: {contact.Content}"
            };
            email.From.Add(new MailboxAddress(emailSetting.FromDisplayName, emailSetting.FromEmail));
            using var smtp = new SmtpClient();
            smtp.Connect(emailSetting.Host, emailSetting.Port, SecureSocketOptions.Auto);
            smtp.Authenticate(emailSetting.Email, emailSetting.Password);
            var res = await smtp.SendAsync(email);
            smtp.Disconnect(true);
        }
    }
}
