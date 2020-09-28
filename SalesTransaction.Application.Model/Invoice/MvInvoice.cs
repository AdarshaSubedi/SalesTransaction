using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Text;

namespace SalesTransaction.Application.Model.Invoice
{
    class MvInvoice
    {
        [Required]
        public int customerId { get; set; }
        [Required]
        public string customerName { get; set; }
        [Required]
        public int amount { get; set; }
        [Required]
        public int amountAfterDiscount { get; set; }
        [Required]
        public int insertPersonId { get; set; }
    }
}
