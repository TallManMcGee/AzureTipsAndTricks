(window.webpackJsonp=window.webpackJsonp||[]).push([[99],{405:function(e,t,r){"use strict";r.r(t);var a=r(43),i=Object(a.a)({},function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[r("div",{staticClass:"tip custom-block"},[r("p",{staticClass:"custom-block-title"},[e._v("TIP")]),e._v(" "),r("p",[e._v("💡 Learn more : "),r("a",{attrs:{href:"https://docs.microsoft.com/azure/azure-signalr/?WT.mc_id=azure-azuredevtips-micrum",target:"_blank",rel:"noopener noreferrer"}},[e._v("Azure SignalR Service"),r("OutboundLink")],1),e._v(".")])]),e._v(" "),r("h4",{attrs:{id:"easily-add-real-time-web-functionality-to-applications-with-azure-signalr-service"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#easily-add-real-time-web-functionality-to-applications-with-azure-signalr-service","aria-hidden":"true"}},[e._v("#")]),e._v(" Easily add real-time web functionality to applications with Azure SignalR Service")]),e._v(" "),r("p",[e._v("Hi, folks. Today I wanted to chat with you about real-time web functionality. Normally when we think of the web, we think of a mostly passive experience. When you bring up your mail web client and leave it for a while, your mail gets stale. You won’t get your recent emails until you refresh the page, or, if you’re lucky, your client has a timer that automatically refreshes the page for you. But it doesn’t have to be this way. "),r("a",{attrs:{href:"https://docs.microsoft.com/aspnet/core/signalr/introduction?view=aspnetcore-2.1?WT.mc_id=docs-azuredevtips-micrum",target:"_blank",rel:"noopener noreferrer"}},[e._v("SignalR"),r("OutboundLink")],1),e._v(" is a technology that can push new emails to you as soon as they arrive. Using SignalR, you can even have a real-time, two-way conversation with someone over the web. And with "),r("a",{attrs:{href:"https://azure.microsoft.com/services/signalr-service?WT.mc_id=azure-azuredevtips-micrum",target:"_blank",rel:"noopener noreferrer"}},[e._v("Azure SignalR Service"),r("OutboundLink")],1),e._v(", you get a fully managed service that helps you build real-time experiences such as "),r("a",{attrs:{href:"https://github.com/aspnet/SignalR-samples/tree/master/ChatSample?WT.mc_id=github-azuredevtips-micrum",target:"_blank",rel:"noopener noreferrer"}},[e._v("chat"),r("OutboundLink")],1),e._v(", "),r("a",{attrs:{href:"https://github.com/aspnet/SignalR-samples/tree/master/StockTickR?WT.mc_id=github-azuredevtips-micrum",target:"_blank",rel:"noopener noreferrer"}},[e._v("stock tickers"),r("OutboundLink")],1),e._v(", live "),r("a",{attrs:{href:"https://github.com/aspnet/SignalR-samples/tree/master/WhiteBoard?WT.mc_id=github-azuredevtips-micrum",target:"_blank",rel:"noopener noreferrer"}},[e._v("whiteboard"),r("OutboundLink")],1),e._v(", and more.")]),e._v(" "),r("h5",{attrs:{id:"real-time-web-functionality-with-signalr"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#real-time-web-functionality-with-signalr","aria-hidden":"true"}},[e._v("#")]),e._v(" Real-time web functionality with SignalR")]),e._v(" "),r("p",[e._v("SignalR is built on ASP.NET Core, and the secret sauce behind the SignalR architecture is something called "),r("a",{attrs:{href:"https://docs.microsoft.com/aspnet/core/signalr/hubs?view=aspnetcore-2.1?WT.mc_id=docs-azuredevtips-micrum",target:"_blank",rel:"noopener noreferrer"}},[e._v("Hubs"),r("OutboundLink")],1),e._v(". Hubs run on your server and route messages in and out to make sure they get to the intended web recipient in real time. When you develop a Hub in your middleware, there are two pieces of code that tie everything together.")]),e._v(" "),r("div",{staticClass:"language- line-numbers-mode"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[e._v("services.AddSignalR();\n")])]),e._v(" "),r("div",{staticClass:"line-numbers-wrapper"},[r("span",{staticClass:"line-number"},[e._v("1")]),r("br")])]),r("p",[e._v("The first is the "),r("strong",[e._v("AddSignalR")]),e._v(" method, which you call in your web app’s Startup.ConfigureServices method to enable passing SignalR messages to SignalR.")]),e._v(" "),r("div",{staticClass:"language- line-numbers-mode"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[e._v('app.UseSignalR(route =>\n{\n    route.MapHub<ChatHub>("/chathub");\n});\n')])]),e._v(" "),r("div",{staticClass:"line-numbers-wrapper"},[r("span",{staticClass:"line-number"},[e._v("1")]),r("br"),r("span",{staticClass:"line-number"},[e._v("2")]),r("br"),r("span",{staticClass:"line-number"},[e._v("3")]),r("br"),r("span",{staticClass:"line-number"},[e._v("4")]),r("br")])]),r("p",[e._v("The second call is to "),r("strong",[e._v("UseSignalR")]),e._v(", which is placed in your web app’s Startup.Configure method. This makes SignalR aware of your Hub.")]),e._v(" "),r("p",[e._v("I’m telling you about this because these two methods become really important later when you move your SignalR app to Azure SignalR Service, which is really a lot more convenient than provisioning the infrastructure yourself.")]),e._v(" "),r("p",[e._v("By the way (in case you were curious), SignalR supports real-time two-way communication between clients by using "),r("a",{attrs:{href:"https://en.wikipedia.org/wiki/WebSocket",target:"_blank",rel:"noopener noreferrer"}},[e._v("WebSockets"),r("OutboundLink")],1),e._v(" under the hood. But because not all browsers support WebSockets, it can also gracefully degrade to other technologies to support the same behavior. As a last resort, it just uses frequent polling of the server for changes.")]),e._v(" "),r("h5",{attrs:{id:"azure-signalr-service"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#azure-signalr-service","aria-hidden":"true"}},[e._v("#")]),e._v(" Azure SignalR Service")]),e._v(" "),r("p",[e._v("Setting up an Azure SignalR Service instance is straightforward.")]),e._v(" "),r("img",{attrs:{src:e.$withBase("/files/create_resource.png")}}),e._v(" "),r("p",[e._v("In your Azure portal, select "),r("strong",[e._v("Create a resource")]),e._v(" to get started. Search for and select the "),r("strong",[e._v("“SignalR Service”")]),e._v(" template in the Marketplace.")]),e._v(" "),r("img",{attrs:{src:e.$withBase("/files/signalr_template.png")}}),e._v(" "),r("p",[e._v("Click the "),r("strong",[e._v("Create")]),e._v(" button at the bottom of the template panel and fill in the details of your resource, including the resource name, location, and pricing tier (free is just fine for development). Click the second "),r("strong",[e._v("Create")]),e._v(" button at the bottom of the SignalR panel to allocate the service.")]),e._v(" "),r("img",{attrs:{src:e.$withBase("/files/get_secret_key.png")}}),e._v(" "),r("p",[e._v("Once your SignalR resource is created, go into the "),r("strong",[e._v("Keys")]),e._v(" setting and copy your secret key.")]),e._v(" "),r("h5",{attrs:{id:"moving-your-signalr-app-to-your-signalr-service"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#moving-your-signalr-app-to-your-signalr-service","aria-hidden":"true"}},[e._v("#")]),e._v(" Moving your SignalR app to your SignalR Service")]),e._v(" "),r("p",[e._v("You should now develop your SignalR app in either VS Code or, as I do here, in Visual Studio using the ASP.NET Core Web Application project template.")]),e._v(" "),r("img",{attrs:{src:e.$withBase("/files/create_chat_app.png")}}),e._v(" "),r("p",[e._v("There are lots of great "),r("a",{attrs:{href:"https://docs.microsoft.com/aspnet/core/tutorials/signalr?view=aspnetcore-2.1&tabs=visual-studio?WT.mc_id=docs-azuredevtips-micrum",target:"_blank",rel:"noopener noreferrer"}},[e._v("tutorials"),r("OutboundLink")],1),e._v(", and even "),r("a",{attrs:{href:"https://github.com/aspnet/AzureSignalR-samples/tree/master/samples/ChatRoomLocal?WT.mc_id=github-azuredevtips-micrum",target:"_blank",rel:"noopener noreferrer"}},[e._v("completed samples"),r("OutboundLink")],1),e._v(", that will show you how to do this, so I won’t waste your time with it. However, I do want to remind you to do three things before deploying your SignalR app to your SignalR Service.")]),e._v(" "),r("img",{attrs:{src:e.$withBase("/files/manage_secret.png")}}),e._v(" "),r("ol",[r("li",[e._v("The first thing you’ll want to do is store your secret key using the "),r("a",{attrs:{href:"https://docs.microsoft.com/aspnet/core/security/app-secrets?view=aspnetcore-2.1&tabs=windows?WT.mc_id=docs-azuredevtips-micrum",target:"_blank",rel:"noopener noreferrer"}},[e._v("Secret Manager"),r("OutboundLink")],1),e._v(". Right- click your project in Solution Explorer and use the Manage User Secrets option.")])]),e._v(" "),r("p",[e._v("This will store your secret outside of your actual project for added security during development. When you get ready to move to test or production, you will want to use "),r("a",{attrs:{href:"https://docs.microsoft.com/aspnet/core/security/key-vault-configuration?view=aspnetcore-2.1?WT.mc_id=docs-azuredevtips-micrum",target:"_blank",rel:"noopener noreferrer"}},[e._v("Azure Key Vault"),r("OutboundLink")],1),e._v(" instead.")]),e._v(" "),r("ol",{attrs:{start:"2"}},[r("li",[e._v("Next, find your AddSignalR method and append AddAzureSignalR to it like this:")])]),e._v(" "),r("div",{staticClass:"language- line-numbers-mode"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[e._v("services.AddSignalR().AddAzureSignalR();\n")])]),e._v(" "),r("div",{staticClass:"line-numbers-wrapper"},[r("span",{staticClass:"line-number"},[e._v("1")]),r("br")])]),r("ol",{attrs:{start:"3"}},[r("li",[e._v("Finally, find UseSignalR and replace it with")])]),e._v(" "),r("div",{staticClass:"language- line-numbers-mode"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[e._v('//app.UseSignalR(route =>\n//{\n//    route.MapHub<ChatHub>("/chathub");\n//});\napp.UseAzureSignalR(route =>\n{\n    route.MapHub<ChatHub>("/chathub");\n});\n')])]),e._v(" "),r("div",{staticClass:"line-numbers-wrapper"},[r("span",{staticClass:"line-number"},[e._v("1")]),r("br"),r("span",{staticClass:"line-number"},[e._v("2")]),r("br"),r("span",{staticClass:"line-number"},[e._v("3")]),r("br"),r("span",{staticClass:"line-number"},[e._v("4")]),r("br"),r("span",{staticClass:"line-number"},[e._v("5")]),r("br"),r("span",{staticClass:"line-number"},[e._v("6")]),r("br"),r("span",{staticClass:"line-number"},[e._v("7")]),r("br"),r("span",{staticClass:"line-number"},[e._v("8")]),r("br")])]),r("p",[e._v("These steps will switch your app from a standard SignalR application to one that uses Azure SignalR Services.")]),e._v(" "),r("img",{attrs:{src:e.$withBase("/files/publish_chat.png")}}),e._v(" "),r("p",[e._v("Now, select Publish from the Build menu and deploy to your service with the click of (a few) buttons. Your infrastructure provisioning and traffic monitoring are all taken care of.")]),e._v(" "),r("img",{attrs:{src:e.$withBase("/files/lets_chat.png")}})])},[],!1,null,null,null);t.default=i.exports}}]);