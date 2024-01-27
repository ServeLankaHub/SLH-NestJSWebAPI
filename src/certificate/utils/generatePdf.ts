import * as path from 'path';
import { ResidentialTemplate } from './ResidentialTemplate';
import { ResidentialCertificateData } from '../dto/ResidentialCertificateData';

export const generatePdf = async (data: ResidentialCertificateData) => {
    const doc = new ResidentialTemplate();

    const now = new Date();
    const year = now.getFullYear();
    const month = now.getMonth() + 1;
    const day = now.getDate();
    const hours = now.getHours();
    const minutes = now.getMinutes();
    const seconds = now.getSeconds();

    const residenceDate = new Date(data.dateOfResidence);

    doc.nic = data.nic;
    doc.fullName = data.fullName;
    doc.address = data.address;
    doc.dob = data.dob;
    doc.age = data.age;
    doc.civilStatus = data.civilStatus;
    doc.isSriLankan = Boolean(data.isSriLankan) ? 'yes' : 'no';
    doc.religion = data.religion;
    doc.occupation = data.occupation;
    doc.periodOfResidence = year - residenceDate.getFullYear();
    doc.noOfElectoralRegister = data.noOfElectoralRegister;
    doc.nameOfFather = data.nameOfFather;
    doc.addressOfFather = data.addressOfFather;
    doc.purposeOfCertificate = data.purposeOfCertificate;
    doc.gramaNiladhariDivName = data.gramaNiladhariDivName;
    doc.gramaNiladhariDivNum = data.gramaNiladhariDivNum;
    doc.district = data.district;
    doc.divisionalSecretariatsDiv = data.divisionalSecretariatsDiv;
    doc.date = `${year}-${month}-${day}`;
    doc.sex = data.sex;
    doc.sinceWhenKnown = data.sinceWhenKnown;
    doc.personallyKnown = Boolean(data.personallyKnown) ? 'yes' : 'no';
    doc.convictedByCourtOfLaw = Boolean(data.convictedByCourtOfLaw)
        ? 'yes'
        : 'no';
    doc.takenPartInPublicActivities = Boolean(data.convictedByCourtOfLaw)
        ? 'yes'
        : 'no';
    doc.character = data.character;
    doc.remark = data.remark;

    const formattedDate = `${year}-${month.toString().padStart(2, '0')}-${day
        .toString()
        .padStart(2, '0')}-${hours.toString().padStart(2, '0')}-${minutes
        .toString()
        .padStart(2, '0')}-${seconds.toString().padStart(2, '0')}`;

    const templateFile = `residentialCert-${formattedDate}.pdf`;

    const fullTemplatePath = path.join(process.env.DOWNLOAD_PATH, templateFile);

    const generatedDoc = await doc.fill(fullTemplatePath);
    if (generatedDoc) {
        console.log('PDF generated successfully!');
    }
};
