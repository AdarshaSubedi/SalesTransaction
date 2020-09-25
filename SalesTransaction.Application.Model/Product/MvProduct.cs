using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Text;

namespace SalesTransaction.Application.Model.Product
{
    public class MvProduct
    {
        [Required]
        public string productName { get; set; }
        [Required]
        public string brand { get; set; }
        [Required]
        public string productIdentifier { get; set; }
        [Required]
        public int rate { get; set; }
        [Required]
        public DateTime startDate { get; set; }
        [Required]
        public DateTime endDate { get; set; }
        [Required]
        public int insertPersonId { get; set; }
    }

    public class MvProductUpdate
    {
        [Required]
        public int productId { get; set; }
        [Required]
        public string productName { get; set; }
        [Required]
        public string brand { get; set; }
        [Required]
        public string productIdentifier { get; set; }
        [Required]
        public int rate { get; set; }
        [Required]
        public DateTime startDate { get; set; }
        [Required]
        public DateTime endDate { get; set; }
        [Required]
        public int insertPersonId { get; set; }
    }

}
