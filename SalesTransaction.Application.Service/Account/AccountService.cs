using System;
using System.Collections.Generic;
using System.Text;
using Microsoft.Extensions.Configuration;
using SalesTransaction.Application.DataAccess.Account;
using SalesTransaction.Application.Model.Account;

namespace SalesTransaction.Application.Service.Account
{
    class AccountService
    {
        private  DataAccessHelper _dataAccess;
        private readonly string _connectionString;
        private readonly int _commandTimeout;
        private IConfiguration _configuraiton;

        public AccountService(IConfiguration configuration)
        {
            _configuraiton = configuration;
            dynamic connectionString = _configuraiton.GetSection("ConnectionString");
            _connectionString = connectionString["DefaultConnection"];

            if (_connectionString != null)
            {
                _dataAccess = new DataAccessHelper(_connectionString);
            }

            _commandTimeout = Convert.ToInt32(connectionString["CommandTimeout"]);
        }


        public dynamic GetLogin(MvLogin login)
        {
            using (var connection = _dataAccess.GetConnection())
            {
                var command = connection.CreateCommand();
            }

            return 0;
        }

    }
}
