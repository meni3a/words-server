"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const app_module_1 = require("./app/app.module");
const nest_openapi_gen_1 = require("nest-openapi-gen");
const swagger_1 = require("@nestjs/swagger");
const common_1 = require("@nestjs/common");
const helmet = require("helmet");
async function bootstrap() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule);
    const PORT = process.env.PORT || 3000;
    if (process.env.NODE_ENV === 'development' && process.env.OPEN_API_GEN === 'true') {
        try {
            await (0, nest_openapi_gen_1.generate)();
            const swaggerDocument = require('../openapi.schema.json');
            swagger_1.SwaggerModule.setup("api", app, swaggerDocument);
        }
        catch (e) {
            console.log(e);
        }
    }
    app.useGlobalPipes(new common_1.ValidationPipe());
    function shadowPowerByHeader(req, res, next) {
        app.getHttpAdapter().getInstance().disable('x-powered-by');
        res.setHeader('X-Powered-By', 'ASP.NET');
        next();
    }
    app.use(shadowPowerByHeader);
    app.use(helmet.crossOriginEmbedderPolicy());
    app.use(helmet.crossOriginOpenerPolicy());
    app.use(helmet.crossOriginResourcePolicy());
    app.use(helmet.dnsPrefetchControl());
    app.use(helmet.expectCt());
    app.use(helmet.frameguard());
    app.use(helmet.hidePoweredBy());
    app.use(helmet.hsts());
    app.use(helmet.ieNoOpen());
    app.use(helmet.noSniff());
    app.use(helmet.originAgentCluster());
    app.use(helmet.permittedCrossDomainPolicies());
    app.use(helmet.referrerPolicy());
    app.use(helmet.xssFilter());
    app.enableCors();
    await app.listen(PORT);
}
bootstrap();
//# sourceMappingURL=main.js.map