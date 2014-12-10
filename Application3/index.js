window.Application3 = window.Application3 || {};

$(function() {
    // Uncomment the line below to disable platform-specific look and feel and to use the Generic theme for all devices
    // DevExpress.devices.current({ platform: "generic" });

    Application3.app = new DevExpress.framework.html.HtmlApplication({
        namespace: Application3,
        navigationType: Application3.config.navigationType,
        navigation: Application3.config.navigation
    });
    Application3.app.router.register(":view/:id", { view: "home", id: undefined });

    Application3.app.navigate();
});
