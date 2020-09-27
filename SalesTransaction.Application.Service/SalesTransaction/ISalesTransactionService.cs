using SalesTransaction.Application.Model.SalesTransaction;
using System;
using System.Collections.Generic;
using System.Text;

namespace SalesTransaction.Application.Service.SalesTransaction
{
    public interface ISalesTransactionService
    {
        bool AddSalesTransaction(MvSalesTransaction salesTransaction);
        bool UpdateSalesTransaction(MvSalesTransactionUpdate salesTransaction);
        dynamic GetAllSalesTransactionDetail();
    }
}
