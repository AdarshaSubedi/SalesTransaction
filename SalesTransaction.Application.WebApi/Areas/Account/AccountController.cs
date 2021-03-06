﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using SalesTransaction.Application.WebApi.Areas.Base;
using SalesTransaction.Application.Service.Account;
using SalesTransaction.Application.Model.Account;

namespace SalesTransaction.Application.WebApi.Areas.Account
{
    public class AccountController : BaseController
    {
        private IAccountService _accountService;
        public AccountController(IAccountService accountService)
        {
            _accountService = accountService;
        }

        [HttpPost]
        public IActionResult Login([FromBody] MvLogin login)
        {
            try
            {
                dynamic jsonString = _accountService.GetLogin(login);
                return Ok(jsonString);
            }
            catch (Exception e)
            {
                throw e;
            }
        }

        [HttpGet]
        public IActionResult UserDetail(string json)
        {
            try
            {
                dynamic jsonString = _accountService.GetUserDetail(json);
                return Ok(jsonString);
            }
            catch (Exception e)
            {
                throw e;
            }
        }

        [HttpGet]
        public IActionResult AllUserDetail()
        {
            try
            {
                dynamic jsonString = _accountService.GetAllUserDetail();
                return Ok(jsonString);
            }
            catch (Exception e)
            {
                throw e;
            }
        }
    }
}