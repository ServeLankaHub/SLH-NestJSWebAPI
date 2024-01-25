import { ResidentialCertificateDataI } from '../interfaces/residentialCertificateData';
import { ResidentialTemplate } from './ResidentialTemplate';

export const generatePdf = async (data: ResidentialCertificateDataI) => {
    const doc = new ResidentialTemplate();

    doc.firstName = data.fullName;
    doc.secondName = data.district;

    const generatedDoc = await doc.fill(
        '/Users/macbook/serve-lanka-hub/SLH-NestJSWebAPI/src/certificate/utils/files/doc.pdf',
    );
    if (generatedDoc) {
        console.log('PDF generated successfully!');
    }
};
