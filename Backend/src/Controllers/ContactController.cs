using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Web.Models;

namespace Web.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ContactController : ControllerBase
    {
        [HttpGet]
        public IActionResult Get()
        {
            return Ok("Contact Controller");
        }

        [HttpPost]
        public IActionResult SendEmail([FromBody] ContactFormModel contact)
        {
            if (contact == null)
            {
                return BadRequest();
            }

            // Save contact to database
            return Ok();
        }
    }
}
