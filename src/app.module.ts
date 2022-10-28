import { Module } from '@nestjs/common'
import { DetailModule } from './modules/detail-page/detail.module'
import { indexModule } from './modules/index-page/index.module'
import { cartModule } from './modules/cart-page/index.module'

@Module({
  imports: [DetailModule, indexModule, cartModule]
  })
export class AppModule {}
