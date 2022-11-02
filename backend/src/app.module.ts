import { Module } from '@nestjs/common'
import { ConfigModule, ConfigService } from '@nestjs/config'

import { AppController } from './app.controller'
import { AppService } from './app.service'
import { ProjectModule } from './project/project.module'
import { AuthModule } from './auth/auth.module'
import { getMongoConfig } from './config/mongo.config'
import { UserModule } from './user/user.module'
import { TypegooseModule } from 'nestjs-typegoose'
import { CategoryModule } from './category/category.module'

@Module({
	imports: [
		ConfigModule.forRoot(),
		TypegooseModule.forRootAsync({
			imports: [ConfigModule],
			inject: [ConfigService],
			useFactory: getMongoConfig,
		}),
		ProjectModule,
		UserModule,
		AuthModule,
		CategoryModule,
	],
	controllers: [AppController],
	providers: [AppService],
})
export class AppModule {}
