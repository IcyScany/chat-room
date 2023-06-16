import { NestFactory } from '@nestjs/core'
import { AppModule } from './app.module'
import { NestExpressApplication } from '@nestjs/platform-express'
import { join } from 'path'
import { logger } from './common/middleware/logger.middleware'

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule)

  app.use(logger)

  // 设置跨域
  app.enableCors({
    origin: '*',
    credentials: true,
    allowedHeaders: '*',
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    preflightContinue: false,
    optionsSuccessStatus: 204,
  })

  // 配置静态资源
  app.useStaticAssets(join(__dirname, '../public', '/'), {
    prefix: '/', 
    setHeaders: res => {
      res.set('Cache-Control', 'max-age=2592000')
    }
  })

  await app.listen(3000)
}
bootstrap()
