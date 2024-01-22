import { Injectable } from '@nestjs/common';
import { ResidentialCertificateDataI } from './interfaces/residentialCertificateData';

@Injectable()
export class CertificateService {
    async residentialCertificate(
        data: ResidentialCertificateDataI,
    ): Promise<void> {
        console.log(data);
    }
}
