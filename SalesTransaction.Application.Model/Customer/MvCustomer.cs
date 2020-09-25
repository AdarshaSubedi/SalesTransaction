using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Text;

namespace SalesTransaction.Application.Model.Customer
{
    public class MvCustomer
    {
        [Required]
        public string firstName { get; set; }
        [Required]
        public string middleName { get; set; }
        [Required]
        public string lastName { get; set; }
        [Required]
        public string email { get; set; }
        [Required]
        public string contact { get; set; }
        [Required]
        public int insertPersonId { get; set; }
    }

    public class MvCustomerUpdate
    {
        [Required]
        public int customerId  { get; set; }
        [Required]
        public string firstName { get; set; }
        [Required]
        public string middleName { get; set; }
        [Required]
        public string lastName { get; set; }
        [Required]
        public string email { get; set; }
        [Required]
        public string contact { get; set; }
        [Required]
        public int insertPersonId { get; set; }
    }
}
