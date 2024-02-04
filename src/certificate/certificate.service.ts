import { Injectable } from '@nestjs/common';
import { generatePdf } from './utils/generatePdf';
import { ResidentialCertificateData } from './dto/ResidentialCertificateData';

@Injectable()
export class CertificateService {
    async residentialCertificate(
        data: ResidentialCertificateData,
    ): Promise<string> {
        const isGenerated = await generatePdf(data);
        if (isGenerated) {
            return 'PDF generated successfully';
        } else {
            throw new Error('Failed to generate PDF');
        }
    }
}
