import { NestFactory } from '@nestjs/core';
import { AppModule } from './app/app.module';
import { generate as generateOpenAPI } from 'nest-openapi-gen';
import { SwaggerModule } from "@nestjs/swagger";
import { ValidationPipe } from '@nestjs/common';
import * as helmet from "helmet";


async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const PORT = process.env.PORT || 3000;


  if (process.env.NODE_ENV === 'development' && process.env.OPEN_API_GEN === 'true') {
    try {
      await generateOpenAPI();
      const swaggerDocument = require('../openapi.schema.json');
      SwaggerModule.setup("api", app, swaggerDocument);
    }
    catch (e) {
      console.log(e);
    }

  }

  app.useGlobalPipes(new ValidationPipe());
  function shadowPowerByHeader(req, res, next) {
    // Switch off the default 'X-Powered-By: Express' header
    app.getHttpAdapter().getInstance().disable('x-powered-by');
    // OR set your own header here
    res.setHeader('X-Powered-By', 'ASP.NET');

    next();
  }

  app.use(shadowPowerByHeader);


  // app.use(helmet.contentSecurityPolicy());
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

  // app.useGlobalGuards(new RolesGuard());

  app.enableCors()
  await app.listen(PORT);
}

bootstrap();
