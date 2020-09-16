using System;
using System.Collections.Generic;
using System.Text;

namespace SalesTransaction.Application.Model.Account
{
    class MvAccount
    {
    }
    public class MvUser
    {
        public int UserId { get; set; }
        public string FirstName { get; set; }
        public string MiddleName { get; set; }
        public string LastName { get; set; }
        public string Email { get; set; }
        public string Password { get; set; }
    }
}
