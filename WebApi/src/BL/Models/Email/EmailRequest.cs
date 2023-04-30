﻿using BL.Enums;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace BL.Models.Email
{
    public class EmailRequest
    {
        public string ToEmail { get; set; }
        public string Subject { get; set; }
        public EmailType EmailType { get; set; }
        public EmailBodyModel EmailBodyModel { get; set; }
    }
}
