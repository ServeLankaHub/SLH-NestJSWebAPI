import { Body, Controller, Post } from '@nestjs/common';
import { CertificateService } from './certificate.service';

@Controller('certificate')
export class CertificateController {
    constructor(private certificateService: CertificateService) {}

    @Post('residential-certificate')
    deliveryStatus(@Body() data): Promise<void> {
        return this.certificateService.residentialCertificate(data);
    }
}
