using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Text;

namespace SalesTransaction.Application.Model.SalesTransaction
{
    public class MvSalesTransaction
    {
        [Required]
        public int customerId { get; set; }
        [Required]
        public int productId { get; set; }
        [Required]
        public int quantity { get; set; }
        [Required]
        public int insertPersonId { get; set; }
    }

    public class MvSalesTransactionUpdate
    {
        [Required]
        public int salesTransactionId { get; set; }
        [Required]
        public int customerId { get; set; }
        [Required]
        public int productId { get; set; }
        [Required]
        public int quantity { get; set; }
        [Required]
        public int insertPersonId { get; set; }
    }
}
