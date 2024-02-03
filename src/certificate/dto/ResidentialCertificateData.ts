import { IsNotEmpty, IsString, IsNumber, IsBoolean } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
import { CivilStatus } from '../enums/CivilStatus';
import { Religion } from '../enums/Religion';
import { District } from '../enums/District';

export class ResidentialCertificateData {
    @ApiProperty()
    @IsNotEmpty()
    @IsString()
    nic: string;

    @ApiProperty()
    @IsNotEmpty()
    @IsString()
    fullName: string;

    @ApiProperty()
    @IsNotEmpty()
    @IsString()
    address: string;

    @ApiProperty()
    @IsNotEmpty()
    @IsNumber()
    age: number;

    @ApiProperty()
    @IsNotEmpty()
    civilStatus: CivilStatus;

    @ApiProperty()
    @IsNotEmpty()
    @IsBoolean()
    isSriLankan: boolean;

    @ApiProperty()
    @IsNotEmpty()
    religion: Religion;

    @ApiProperty()
    @IsNotEmpty()
    @IsString()
    occupation: string;

    @ApiProperty()
    @IsNotEmpty()
    @IsString()
    periodsOfResidence: string;

    @ApiProperty()
    @IsNotEmpty()
    @IsString()
    electoralRegisterNumber: string;

    @ApiProperty()
    @IsNotEmpty()
    @IsString()
    nameOfFather: string;

    @ApiProperty()
    @IsNotEmpty()
    @IsString()
    addressOfFather: string;

    @ApiProperty()
    @IsNotEmpty()
    @IsString()
    purposeOfCertificate: string;

    @ApiProperty()
    @IsNotEmpty()
    @IsString()
    gramaNiladhariDivName: string;

    @ApiProperty()
    @IsNotEmpty()
    @IsString()
    gramaNiladhariDivNum: string;

    @ApiProperty()
    @IsNotEmpty()
    district: District;

    @ApiProperty()
    @IsNotEmpty()
    @IsString()
    divisionalSecretariatsDiv: string;

    @ApiProperty()
    @IsNotEmpty()
    @IsString()
    certificateType: string;

    @ApiProperty()
    @IsNotEmpty()
    @IsString()
    gender: string;

    @ApiProperty()
    @IsNotEmpty()
    @IsString()
    sinceWhenKnown: string;

    @ApiProperty()
    @IsNotEmpty()
    @IsBoolean()
    personallyKnown: boolean;

    @ApiProperty()
    @IsNotEmpty()
    @IsBoolean()
    convictedByCourtOfLaw: boolean;

    @ApiProperty()
    @IsNotEmpty()
    @IsBoolean()
    takenPartInPublicActivities: boolean;

    @ApiProperty()
    @IsNotEmpty()
    @IsString()
    character: string;

    @ApiProperty()
    @IsNotEmpty()
    @IsString()
    remarks: string;
}
