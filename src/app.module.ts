import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { CertificateModule } from './certificate/certificate.module';

@Module({
    imports: [CertificateModule, ConfigModule.forRoot()],
})
export class AppModule {}
