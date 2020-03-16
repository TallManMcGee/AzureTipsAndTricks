(window.webpackJsonp=window.webpackJsonp||[]).push([[185],{465:function(t,e,a){"use strict";a.r(e);var s=a(43),n=Object(s.a)({},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("div",{staticClass:"tip custom-block"},[a("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),a("p",[t._v("💡 Learn more : "),a("a",{attrs:{href:"https://docs.microsoft.com/azure/app-service?WT.mc_id=docs-azuredevtips-micrum",target:"_blank",rel:"noopener noreferrer"}},[t._v("App Service Documentation"),a("OutboundLink")],1),t._v(".")])]),t._v(" "),a("h4",{attrs:{id:"using-application-insights-with-azure-app-service"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#using-application-insights-with-azure-app-service","aria-hidden":"true"}},[t._v("#")]),t._v(" Using Application Insights with Azure App Service")]),t._v(" "),a("p",[a("strong",[t._v("Application Insights")]),t._v(" is a simple way to detect and diagnose exceptions and application performance issues in your web apps and web services. In this blog post, I'll walk you through adding it to an ASP.NET MVC application.")]),t._v(" "),a("p",[t._v("In order to take advantage of this, you'll need to log into your Azure account and go to your App Service that you created and look under "),a("strong",[t._v("Monitoring")]),t._v(" then you will see "),a("strong",[t._v("Application Insights")]),t._v(". Open it and create a new resource and press OK as shown below.")]),t._v(" "),a("img",{attrs:{src:t.$withBase("/files/appinsight1.png")}}),t._v(" "),a("p",[t._v("It will bring you to a page with no data but will present you with the following prompt:")]),t._v(" "),a("img",{attrs:{src:t.$withBase("/files/appinsight2.png")}}),t._v(" "),a("p",[t._v("You'll see that you can automatically instrument your ASP.NET app with a restart. "),a("strong",[t._v("Yes, please")]),t._v(". Go ahead, and click on the orange banner to restart your app.")]),t._v(" "),a("p",[t._v("Once complete, go and visit your app and refresh a couple of times and then go back and take a look at the live stream. I've included a sample below:")]),t._v(" "),a("img",{attrs:{src:t.$withBase("/files/appinsight3.gif")}}),t._v(" "),a("p",[t._v("It is working as expected, but let's add an error into our application. Go to your "),a("strong",[t._v("appname/Controllers/HomeController.cs")]),t._v(" and add the following code:")]),t._v(" "),a("div",{staticClass:"language-csharp line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-csharp"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("ActionResult")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("ThrowNewError")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("throw")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("InvalidOperationException")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"The app just threw an error!"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" \n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br")])]),a("p",[t._v("You'll need to go back to your site and depending on where you placed it, you can invoke the code by going to *.azurewebsites.net/"),a("strong",[t._v("Home/ThrowNewError")]),t._v(". If you switch back over to Application Insights, then you'll see the errors are being reported.")]),t._v(" "),a("img",{attrs:{src:t.$withBase("/files/appinsight4.png")}}),t._v(" "),a("p",[t._v("You can drill deeper down by clicking on "),a("strong",[t._v("Open in Application Insights")]),t._v(". From here you can see how many "),a("strong",[t._v("Failed Request")]),t._v(" were reported.")]),t._v(" "),a("img",{attrs:{src:t.$withBase("/files/appinsight5.png")}}),t._v(" "),a("p",[t._v("You can even drill down on what URL was called to trigger the error.")]),t._v(" "),a("img",{attrs:{src:t.$withBase("/files/appinsight6.png")}}),t._v(" "),a("p",[t._v("If you add Application Insights to your Visual Studio project by right-clicking the project and then adding "),a("strong",[t._v("Configure Application Insights")]),t._v(", then you can add code to collect exception telemetry. You can learn more about that by "),a("a",{attrs:{href:"https://docs.microsoft.com/azure/application-insights/app-insights-asp-net-exceptions?WT.mc_id=docs-azuredevtips-micrum",target:"_blank",rel:"noopener noreferrer"}},[t._v("clicking here"),a("OutboundLink")],1),t._v(".")])])},[],!1,null,null,null);e.default=n.exports}}]);