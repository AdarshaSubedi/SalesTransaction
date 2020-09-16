using SalesTransaction.Application.Model.Account;

namespace SalesTransaction.Application.Service.Account
{
    interface IAccountService
    {
        dynamic GetLogin(MvLogin login);
        dynamic GetUserDetail(string json);

    }
}
