import { HttpStatus, Injectable } from '@nestjs/common';
import { generatePdf } from './utils/generatePdf';
import { ResidentialCertificateData } from './dto/ResidentialCertificateData';

type Response = {
    status: HttpStatus;
    message: string;
};

@Injectable()
export class CertificateService {
    async residentialCertificate(
        data: ResidentialCertificateData,
    ): Promise<Response> {
        const isGenerated = await generatePdf(data);
        if (isGenerated) {
            return {
                status: HttpStatus.OK,
                message: 'PDF generated successfully',
            };
        } else {
            throw new Error('Failed to generate PDF');
        }
    }
}
