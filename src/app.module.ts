import { Module } from '@nestjs/common';
import { UserModule } from './user/user.module';
import { MongooseModule } from '@nestjs/mongoose';
import { ArtistModule } from './artist/artist.module';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost:27017/nest-tests'),
    UserModule,
    ArtistModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
