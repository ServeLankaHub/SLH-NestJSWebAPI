import { Injectable } from '@nestjs/common';
import { generatePdf } from './utils/generatePdf';
import { ResidentialCertificateData } from './dto/ResidentialCertificateData';

@Injectable()
export class CertificateService {
    async residentialCertificate(
        data: ResidentialCertificateData,
    ): Promise<void> {
        generatePdf(data);
    }
}
