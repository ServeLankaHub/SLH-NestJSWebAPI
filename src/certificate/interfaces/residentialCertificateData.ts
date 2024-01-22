import { CivilStatus } from '../enums/CivilStatus';
import { District } from '../enums/District';
import { Nationality } from '../enums/Nationality';
import { Religion } from '../enums/Religion';

export interface ResidentialCertificateDataI {
    nic: string;
    fullName: string;
    address: string;
    dob: string;
    age: number;
    civilStatus: CivilStatus;
    nationality: Nationality;
    religion: Religion;
    occupation: string;
    dateOfResidence: string;
    noOfElectoralRegister: number;
    nameOfFather: string;
    addressOfFather: string;
    purposeOfCertificate: string;
    gramaNiladhariDivName: string;
    gramaNiladhariDivNum: string;
    district: District;
    divisionalSecretariatsDiv: string;
    certificateType: string;
}
