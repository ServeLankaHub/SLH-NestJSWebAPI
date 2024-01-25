import { PdfField, PdfFiller, PdfTemplate } from 'simple-pdf-generator';

@PdfTemplate({
    templatePath:
        '/Users/macbook/serve-lanka-hub/SLH-NestJSWebAPI/src/certificate/utils/residentialCertificateTemplate.html',
})
export class ResidentialTemplate extends PdfFiller {
    @PdfField()
    nic: string;
    @PdfField()
    fullName: string;
    @PdfField()
    address: string;
    @PdfField()
    dob: string;
    @PdfField()
    age: number;
    @PdfField()
    civilStatus: string;
    @PdfField()
    isSriLankan: boolean;
    @PdfField()
    religion: string;
    @PdfField()
    occupation: string;
    @PdfField()
    dateOfResidence: string;
    @PdfField()
    noOfElectoralRegister: number;
    @PdfField()
    nameOfFather: string;
    @PdfField()
    addressOfFather: string;
    @PdfField()
    purposeOfCertificate: string;
    @PdfField()
    gramaNiladhariDivName: string;
    @PdfField()
    gramaNiladhariDivNum: string;
    @PdfField()
    district: string;
    @PdfField()
    divisionalSecretariatsDiv: string;
    @PdfField()
    certificateType: string;
}
