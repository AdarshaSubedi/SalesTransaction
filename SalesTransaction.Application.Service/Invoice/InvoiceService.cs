using Microsoft.Extensions.Configuration;
using SalesTransaction.Application.DataAccess.Account;
using System;
using System.Collections.Generic;
using System.Data;
using System.Data.SqlClient;
using System.Text;

namespace SalesTransaction.Application.Service.Invoice
{
    public class InvoiceService: IInvoiceService
    {
        private DataAccessHelper _dataAccess;
        private readonly string _connectionString;
        private readonly int _commandTimeout;
        private IConfiguration _configuration;

        public InvoiceService(IConfiguration configuration)
        {
            _configuration = configuration;
            dynamic connectionString = _configuration.GetSection("ConnectionString");
            _connectionString = connectionString["DefaultConnection"];

            if (_connectionString != null)
            {
                _dataAccess = new DataAccessHelper(_connectionString);
            }
            _commandTimeout = Convert.ToInt32(connectionString["CommandTimeout"]);
        }

        public dynamic GetAllInvoiceDetail()
        {
            using (var connection = _dataAccess.GetConnection())
            {
                var command = connection.CreateCommand();
                command.CommandType = CommandType.StoredProcedure;
                command.CommandText = "SpAllInvoiceSel";
                command.CommandTimeout = _commandTimeout;

                using (SqlDataReader reader = command.ExecuteReader())
                {
                    try
                    {
                        if (reader.HasRows)
                        {
                            return _dataAccess.GetJson(reader);
                        }
                        else
                        {
                            return null;
                        }
                    }
                    catch (Exception e)
                    {
                        throw e;
                    }
                }
            }
        }
    }
}
