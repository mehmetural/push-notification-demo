using CorePush.Google;
using Microsoft.Extensions.Configuration;
using PushNotification.Web.Services;
using System.Threading.Tasks;

namespace PushNotification.Web
{
    public class PushNotificationService : IPushNotificationService
    {
        private readonly IDbService dbService;
        private readonly string _serverKey;

        public PushNotificationService(IConfiguration configuration, IDbService dbService)
        {
            _serverKey = configuration.GetSection("FCM:ServerKey").Value;
            this.dbService = dbService;
        }

        public async Task RegisterForPush(string username, string token)
        {
            dbService.SaveUser(new Models.User { UserName = username, Token = token });

            if (token != null)
            {
                await SendNotification(new PushNotificationItem()
                {
                    Title = "Notification Test",
                    Body = "Successfuly registered for push notifications"
                });
            }
        }

        public async Task SendNotification(PushNotificationItem notification)
        {
            var users = dbService.GetUsers();

            foreach (var token in users)
            {
                using (var fcm = new FcmSender(_serverKey, token.UserName))
                {
                    await fcm.SendAsync(token.Token,
                         new
                         {
                             notification = new
                             {
                                 title = notification.Title,
                                 body = notification.Body
                             },
                         });
                }
            }
        }
    }
}
