using Microsoft.Extensions.Configuration;
using Newtonsoft.Json;
using SalesTransaction.Application.DataAccess.Account;
using SalesTransaction.Application.Model.SalesTransaction;
using System;
using System.Collections.Generic;
using System.Data;
using System.Data.SqlClient;
using System.Text;

namespace SalesTransaction.Application.Service.SalesTransaction
{
    public class SalesTransactionService: ISalesTransactionService
    {
        private DataAccessHelper _dataAccess;
        private readonly string _connectionString;
        private readonly int _commandTimeout;
        private IConfiguration _configuration;

        public SalesTransactionService(IConfiguration configuration)
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

        public bool AddSalesTransaction(MvSalesTransaction salesTransaction)
        {
            using (var connection = _dataAccess.GetConnection())
            {
                var jsonNew = JsonConvert.SerializeObject(salesTransaction);
                var command = connection.CreateCommand();
                command.CommandType = CommandType.StoredProcedure;
                command.CommandText = "SpSalesTransactionIns";
                command.Parameters.Add("@json", SqlDbType.NChar).Value = jsonNew;
                command.CommandTimeout = _commandTimeout;

                int rows = command.ExecuteNonQuery();

                if (rows > 0)
                {
                    return true;
                }
                return false;
            }
        }

        public bool UpdateSalesTransaction(MvSalesTransactionUpdate salesTransactionUpdate)
        {
            using (var connection = _dataAccess.GetConnection())
            {
                var jsonNew = JsonConvert.SerializeObject(salesTransactionUpdate);
                var command = connection.CreateCommand();
                command.CommandType = CommandType.StoredProcedure;
                command.CommandText = "SpSalesTransactionUpd";
                command.Parameters.Add("@json", SqlDbType.NChar).Value = jsonNew;
                command.CommandTimeout = _commandTimeout;

                int rows = command.ExecuteNonQuery();

                if (rows > 0)
                {
                    return true;
                }
                return false;


            }
        }

        public dynamic GetAllSalesTransactionDetail()
        {
            using (var connection = _dataAccess.GetConnection())
            {
                var command = connection.CreateCommand();
                command.CommandType = CommandType.StoredProcedure;
                command.CommandText = "SpAllSalesTransactionSel";
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
