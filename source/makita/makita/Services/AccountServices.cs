using makita.Context;
using makita.Entities;
using makita.Entities.Actions;
using makita.IService;
using System.Security.Cryptography;
using System.Text;

namespace makita.Services
{
    public class AccountServices : IAccountServices
    {
        private readonly MakitaContext _context;
        public AccountServices(MakitaContext context)
        {
            _context = context;
        }

        public int LogIn(string username, string password)
        {
            var check = _context.Accounts.Any(record => record.Username == username);
            if (check)
            {
                var currentAccount = _context.Accounts.FirstOrDefault(record => record.Username == username);
                using (MD5 md5 = MD5.Create())
                {
                    byte[] inputBytes = Encoding.UTF8.GetBytes(password);
                    byte[] hashBytes = md5.ComputeHash(inputBytes);
                    StringBuilder sb = new StringBuilder();
                    for (int i = 0; i < hashBytes.Length; i++)
                    {
                        sb.Append(hashBytes[i].ToString("X2"));
                    }
                    if (sb.ToString() == currentAccount.Password)
                    {
                        return 0;
                    }
                    else
                    {
                        return 1;
                    }
                }
            }
            else
            {
                return 2;
            }
        }
        public int SignUp(string username, string password, string confirmPassword)
        {
            var check = _context.Accounts.Any(record => record.Username == username);
            if (!check)
            {
                if (password == confirmPassword)
                {
                    using (MD5 md5 = MD5.Create())
                    {
                        byte[] inputBytes = Encoding.UTF8.GetBytes(password);
                        byte[] hashBytes = md5.ComputeHash(inputBytes);
                        StringBuilder sb = new StringBuilder();
                        for (int i = 0; i < hashBytes.Length; i++)
                        {
                            sb.Append(hashBytes[i].ToString("X2"));
                        }
                        Account account = new Account()
                        {
                            Username = username,
                            Password = sb.ToString(),
                        };
                        _context.Accounts.Add(account);
                        _context.SaveChangesAsync();
                        return 0;
                    }
                }
                else return 1;
            }
            else return 2;
        }
    }
}
