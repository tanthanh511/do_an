using Northwind.Shared;

namespace Northwind.WebApi.model;

    public class AccountModel
    {
        public string? Email { get; set; }
        public string? Username { get; set; }
        public string? Password { get; set; }
        public string? Bio { get; set; }
        public string? Avata { get; set; }
        public int? Status { get; set; }


        public AccountModel(Account account)
        {
            Email = account.Email;
            Username = account.Username;
            Bio = account.Bio;
            Password = account.Password;
            Avata = account.Avatar;
            Status = account.Status;
        }
    }



