import * as path from 'path';
import { ResidentialCertificateDataI } from '../interfaces/residentialCertificateData';
import { ResidentialTemplate } from './ResidentialTemplate';

export const generatePdf = async (data: ResidentialCertificateDataI) => {
    const doc = new ResidentialTemplate();

    doc.nic = data.nic;
    doc.fullName = data.fullName;
    doc.address = data.address;
    doc.dob = data.dob;
    doc.age = data.age;
    doc.civilStatus = data.civilStatus;
    doc.isSriLankan = data.isSriLankan;
    doc.religion = data.religion;
    doc.occupation = data.occupation;
    doc.dateOfResidence = data.dateOfResidence;
    doc.noOfElectoralRegister = data.noOfElectoralRegister;
    doc.nameOfFather = data.nameOfFather;
    doc.addressOfFather = data.addressOfFather;
    doc.purposeOfCertificate = data.purposeOfCertificate;
    doc.gramaNiladhariDivName = data.gramaNiladhariDivName;
    doc.gramaNiladhariDivNum = data.gramaNiladhariDivNum;
    doc.district = data.district;
    doc.divisionalSecretariatsDiv = data.divisionalSecretariatsDiv;
    doc.certificateType = data.certificateType;

    const now = new Date();
    const year = now.getFullYear();
    const month = now.getMonth() + 1;
    const day = now.getDate();
    const hours = now.getHours();
    const minutes = now.getMinutes();
    const seconds = now.getSeconds();

    const formattedDate = `${year}-${month.toString().padStart(2, '0')}-${day
        .toString()
        .padStart(2, '0')}-${hours.toString().padStart(2, '0')}-${minutes
        .toString()
        .padStart(2, '0')}-${seconds.toString().padStart(2, '0')}`;

    const templateFile = `residentialCert-${formattedDate}.pdf`;

    const fullTemplatePath = path.join(process.env.TEMPLATE_PATH, templateFile);

    const generatedDoc = await doc.fill(fullTemplatePath);
    if (generatedDoc) {
        console.log('PDF generated successfully!');
    }
};
