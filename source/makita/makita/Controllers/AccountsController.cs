using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using makita.Context;
using makita.Entities;
using makita.Entities.Actions;
using makita.Services;
using makita.IService;

namespace makita.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class AccountsController : ControllerBase
    {
        private readonly MakitaContext _context;
        private readonly IAccountServices _accountServices;

        public AccountsController(MakitaContext context, IAccountServices accountServices)
        {
            _context = context;
            _accountServices = accountServices;
        }

        // GET: api/Accounts
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Account>>> GetAccounts()
        {
            return await _context.Accounts.ToListAsync();
        }

        // GET: api/Accounts/5
        [HttpGet("{id}")]
        public async Task<ActionResult<Account>> GetAccount(int id)
        {
            var account = await _context.Accounts.FindAsync(id);

            if (account == null)
            {
                return NotFound();
            }

            return account;
        }
        
        // POST: api/Accounts
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        public async Task<ActionResult<Account>> SignUp(Input input)
        {
            string[] para = input.Parameters.Split(";");
            var res = _accountServices.SignUp(para[0], para[1], para[2]);

            return Ok(new Output()
            {
                Res = res,
                Note = res == 0 ? "Đăng ký thành công" : res == 1 ? "Mật khẩu không hợp lệ" : "Tên tài khoản đã được sử dụng",
            });
        }

        [HttpPost("login")]
        public async Task<ActionResult<Account>> LogIn(Input input)
        {
            string[] para = input.Parameters.Split(";");
            var res = _accountServices.LogIn(para[0], para[1]);

            return Ok(new Output()
            {
                Res = res,
                Note = res == 0 ? "Đăng nhập thành công" : res == 1 ? "Mật khẩu không hợp lệ" : "Tên tài khoản không tồn tại",
            });
        }

        // DELETE: api/Accounts/5
        [HttpPost("{id}")]
        public async Task<IActionResult> DeleteAccount(int id)
        {
            var account = await _context.Accounts.FindAsync(id);
            if (account == null)
            {
                return NotFound();
            }

            _context.Accounts.Remove(account);
            await _context.SaveChangesAsync();

            return NoContent();
        }
    }
}
