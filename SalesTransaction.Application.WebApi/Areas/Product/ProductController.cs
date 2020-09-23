using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using SalesTransaction.Application.Service.Product;
using SalesTransaction.Application.WebApi.Areas.Base;

namespace SalesTransaction.Application.WebApi.Areas.Product
{
    public class ProductController : BaseController
    {
        private IProductService _productService;
        public ProductController(IProductService accountService)
        {
            _productService = accountService;
        }

        [HttpGet]
        public IActionResult AllProductDetail()
        {
            try
            {
                dynamic jsonString = _productService.GetAllProductDetail();
                return Ok(jsonString);
            }
            catch (Exception e)
            {
                throw e;
            }
        }


    }
}
