import { Injectable } from '@nestjs/common';

@Injectable()
export class CertificateService {
    async residentialCertificate(data: { name: string }): Promise<void> {
        console.log(data.name);
    }
}
