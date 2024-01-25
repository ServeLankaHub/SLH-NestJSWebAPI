import { ResidentialTemplate } from './ResidentialTemplate';

export const generatePdf = async () => {
    const doc = new ResidentialTemplate();
    console.log('doc :', doc);

    doc.firstName = 'Sujeewa';
    doc.secondName = 'Sandeepa';

    await doc.fill(
        '/Users/macbook/serve-lanka-hub/SLH-NestJSWebAPI/src/certificate/utils/files/doc.pdf',
    );
};
