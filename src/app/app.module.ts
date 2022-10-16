import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { ThrottlerGuard, ThrottlerModule } from '@nestjs/throttler';
import { APP_GUARD } from '@nestjs/core';
import { CatsModule } from '../cats/cats.module';
import { MongooseModule } from '@nestjs/mongoose';
import { AuthModule } from 'src/auth/auth.module';
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';
import { MailModule } from 'src/mail/mail.module';



// const CONNECTION_STRING = process.env.MONGO_CONNECTION_STRING;
// console.log(CONNECTION_STRING);
// if (!CONNECTION_STRING) {
//   throw new Error('MONGO_CONNECTION_STRING is not set');
// }


@Module({
  imports: [
    MailModule, // 👈 global module
    ConfigModule.forRoot(),
    ThrottlerModule.forRoot({
      ttl: 10,
      limit: 10,
    }),
    ServeStaticModule.forRoot({
      serveRoot: '/public',
      rootPath: join(__dirname, '../../../public'),
    }),

    ServeStaticModule.forRoot({
      serveRoot: '/client',
      rootPath: join(__dirname, '../../../client'),
    }),


    MongooseModule.forRoot('mongodb://localhost:27017', {
      dbName: 'test',
    }),
    CatsModule,
    AuthModule
    // MongooseModule.forRoot(CONNECTION_STRING)
  ],
  controllers: [AppController],
  providers:
    [
      AppService,
      {
        provide: APP_GUARD,
        useClass: ThrottlerGuard,
      },

    ],
})
export class AppModule { }
