using Newtonsoft.Json;
using System;
using System.Data;
using System.Data.SqlClient;

namespace SalesTransaction.Application.DataAccess.Account
{
    public class DataAccessHelper
    {
        private SqlConnection _connection;
        private string _connectionString;

        public DataAccessHelper(string connectionString)
        {
            _connectionString = connectionString;
        }

        public SqlConnection GetConnection()
        {
            try
            {
                //SqlCommand cmd = new SqlCommand("Select * from User as json path", _connection);
                SetConnection();
                //SqlDataReader rdr = cmd.ExecuteReader();
                return _connection;
            }
            catch(Exception e)
            {
                throw e;
            }
        }

        public void SetConnection()
        {
            _connection = new SqlConnection(_connectionString);
            if (_connection.State == ConnectionState.Closed)
            {
                _connection.Open();
            }
            else
            {
                _connection.Close();
                _connection.Open();
            }
        }

    }
}