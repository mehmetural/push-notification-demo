using LiteDB;
using PushNotification.Web.Models;
using System.Collections.Generic;

namespace PushNotification.Web.Services
{
    public class DbService : IDbService
    {
        private const string _dbName = "TempDb.db";
        private const string _usersDocumentName = "user";

        public IEnumerable<User> GetUsers()
        {
            IEnumerable<User> user = null;

            using (var db = new LiteDatabase(_dbName))
            {
                var users = db.GetCollection<User>(_usersDocumentName);

                user = users.FindAll();
            }

            return user;
        }

        public void SaveUser(User user)
        {
            using (var db = new LiteDatabase(_dbName))
            {
                var users = db.GetCollection<User>(_usersDocumentName);

                users.Insert(user);
            }
        }
    }
}
