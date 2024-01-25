import { PdfField, PdfFiller, PdfTemplate } from 'simple-pdf-generator';

@PdfTemplate({
    templatePath:
        '/Users/macbook/serve-lanka-hub/SLH-NestJSWebAPI/src/certificate/utils/residentialCertificateTemplate.html',
})
export class ResidentialTemplate extends PdfFiller {
    @PdfField()
    firstName: string;

    @PdfField()
    secondName: string;
}
