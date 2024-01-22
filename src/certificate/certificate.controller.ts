import { Body, Controller, Post } from '@nestjs/common';
import { CertificateService } from './certificate.service';
import { ResidentialCertificateDataI } from './interfaces/residentialCertificateData';

@Controller('certificate')
export class CertificateController {
    constructor(private certificateService: CertificateService) {}

    @Post('residential-certificate')
    deliveryStatus(@Body() data: ResidentialCertificateDataI): Promise<void> {
        return this.certificateService.residentialCertificate(data);
    }
}
