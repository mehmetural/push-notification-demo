using System.Threading.Tasks;

namespace PushNotification.Web
{
    public interface IPushNotificationService
    {
        Task SendNotification(PushNotificationItem notification);
        Task RegisterForPush(string username, string token);
    }
}