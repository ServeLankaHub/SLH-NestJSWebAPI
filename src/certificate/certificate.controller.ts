import { Body, Controller, Post } from '@nestjs/common';
import { CertificateService } from './certificate.service';
import { ResidentialCertificateData } from './dto/ResidentialCertificateData';

@Controller('certificate')
export class CertificateController {
    constructor(private certificateService: CertificateService) {}

    @Post('residential-certificate')
    deliveryStatus(@Body() data: ResidentialCertificateData): Promise<void> {
        return this.certificateService.residentialCertificate(data);
    }
}
