import { Injectable } from '@nestjs/common';
import { ResidentialCertificateDataI } from './interfaces/residentialCertificateData';
import { generatePdf } from './utils/generatePdf';

@Injectable()
export class CertificateService {
    async residentialCertificate(
        data: ResidentialCertificateDataI,
    ): Promise<void> {
        generatePdf();
    }
}
