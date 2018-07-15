package com.EugeneStudio.bootstrap;

import com.EugeneStudio.dao.MysqlConfiguration;
import com.EugeneStudio.verticle.ServerVerticle;
import io.vertx.core.Vertx;
import io.vertx.core.VertxOptions;
import io.vertx.core.WorkerExecutor;
import io.vertx.ext.web.sstore.SessionStore;

public class Bootstrap {

    private static Vertx vertx;

    public static void main(String[] args) {
        vertx = Vertx.vertx(new VertxOptions()
                .setWorkerPoolSize(40)
        );

        MysqlConfiguration.configure();
        vertx.deployVerticle(new ServerVerticle()); // 部署发布rest服务
    }

    public static Vertx getVertx() {
        return vertx;
    }
}
