import * as path from 'path';
import { PdfField, PdfFiller, PdfTemplate } from 'simple-pdf-generator';

@PdfTemplate({
    templatePath: path.join(
        process.cwd(),
        '/src/certificate/utils/residentialCertificateTemplate.html',
    ),
    includes: [
        {
            path: path.join(
                process.cwd(),
                '/src/certificate/utils/template.css',
            ),
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
    periodOfResidence: string;
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
