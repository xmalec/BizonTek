using Microsoft.AspNetCore.Mvc;
using Web.Models;
using Web.Services;

namespace Web.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ContactController : ControllerBase
    {
        private readonly IEmailService emailService;

        public ContactController(IEmailService emailService)
        {
            this.emailService = emailService;
        }

        [HttpPost]
        public async Task<IActionResult> SendEmail([FromBody] ContactFormModel contact)
        {
            if (contact == null)
            {
                return BadRequest();
            }
            await emailService.SendNewContactInfo(contact);
            return Ok();
        }
    }
}
