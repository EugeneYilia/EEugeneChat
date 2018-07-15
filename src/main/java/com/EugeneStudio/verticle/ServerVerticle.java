package com.EugeneStudio.verticle;

import com.EugeneStudio.controller.UserController;
import io.vertx.core.AbstractVerticle;
import io.vertx.core.http.HttpServerOptions;
import io.vertx.ext.web.Router;
import io.vertx.ext.web.handler.BodyHandler;
import io.vertx.ext.web.handler.CookieHandler;
import io.vertx.ext.web.handler.SessionHandler;
import io.vertx.ext.web.handler.StaticHandler;
import io.vertx.ext.web.sstore.LocalSessionStore;
import io.vertx.ext.web.sstore.SessionStore;

public class ServerVerticle extends AbstractVerticle {
    public static Router router;

    @Override
    public void start() {
        router = Router.router(vertx); // 实例化一个路由器出来，用来路由不同的rest接口
        router.post("/user/login").handler(UserController::handleLogin);// 处理一个get方法的rest接口
        router.route("/*").handler(StaticHandler.create("static").setIndexPage("index.html"));
        vertx.createHttpServer(new HttpServerOptions().setMaxWebsocketFrameSize(1000 * 1000)).requestHandler(router::accept).listen(80);// 创建一个HttpServer，监听80端口，并交由路由器分发处理用户请求
    }

    public static Router getRouter() {
        return router;
    }
}
