using Microsoft.AspNetCore.Mvc;
using PushNotification.Web.Models;
using System.Threading.Tasks;

namespace PushNotification.Web.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class PushNotificationController : ControllerBase
    {
        private readonly IPushNotificationService pushNotificationService;

        public PushNotificationController(IPushNotificationService pushNotificationService)
        {
            this.pushNotificationService = pushNotificationService;
        }

        [HttpPost]
        [Route("register")]
        public async Task Register(User user)
        {
            await pushNotificationService.RegisterForPush("currentUser", user.Token);
        }

        [HttpPost]
        [Route("send")]
        public async Task Send(PushNotificationItem pushNotificationItem)
        {
            await pushNotificationService.SendNotification(pushNotificationItem);
        }
    }
}
