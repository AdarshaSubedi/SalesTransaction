using SalesTransaction.Application.DataAccess.Account;
using System;


namespace DebugClassLibrary
{
    class Program
    {
        static void Main(string[] args)
        {
            TestClassLibrary();
        }

        private static void TestClassLibrary()
        {
            DataAccessHelper _da = new DataAccessHelper("Data Source=10.6.0.246;Initial Catalog=Adarsha;User ID=intern;Password=intern001;Connect Timeout=30;Encrypt=False;TrustServerCertificate=False;ApplicationIntent=ReadWrite;MultiSubnetFailover=False");
            _da.GetConnection();
        }
    }
}
