import { PdfField, PdfFiller, PdfTemplate } from 'simple-pdf-generator';

@PdfTemplate({
    templatePath:
        '/Users/macbook/serve-lanka-hub/SLH-NestJSWebAPI/src/certificate/utils/residentialCertificateTemplate.html',
    includes: [
        {
            path: '/Users/macbook/serve-lanka-hub/SLH-NestJSWebAPI/src/certificate/utils/template.css',
        },
    ],
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
    isSriLankan: string;
    @PdfField()
    religion: string;
    @PdfField()
    occupation: string;
    @PdfField()
    periodOfResidence: number;
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
    date: string;
    @PdfField()
    sex: string;
    @PdfField()
    sinceWhenKnown: string;
    @PdfField()
    personallyKnown: string;
    @PdfField()
    convictedByCourtOfLaw: string;
    @PdfField()
    takenPartInPublicActivities: string;
    @PdfField()
    character: string;
    @PdfField()
    remark: string;
}
