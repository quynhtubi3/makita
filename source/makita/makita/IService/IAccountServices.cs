namespace makita.IService
{
    public interface IAccountServices
    {
        int LogIn(string username, string password);
        int SignUp(string username, string password, string confirmPassword);
    }
}
