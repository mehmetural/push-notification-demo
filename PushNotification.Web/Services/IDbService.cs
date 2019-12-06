using PushNotification.Web.Models;
using System.Collections.Generic;

namespace PushNotification.Web.Services
{
    public interface IDbService
    {
        void SaveUser(User user);
        IEnumerable<User> GetUsers();
    }
}
