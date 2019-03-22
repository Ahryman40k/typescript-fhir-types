import * as t from 'io-ts'
import * as fs from 'fs';
import * as path from 'path';

import { RTTI_Account, RTTI_AdverseEvent, RTTI_AllergyIntolerance, RTTI_AppointmentResponse, RTTI_Appointment, RTTI_AuditEvent, 
    RTTI_Basic, RTTI_Binary, RTTI_CapabilityStatement, RTTI_Bundle, RTTI_CarePlan, RTTI_Claim, RTTI_Questionnaire, 
    RTTI_StructureDefinition, RTTI_ActivityDefinition, RTTI_CodeSystem, RTTI_BodyStructure, RTTI_BiologicallyDerivedProduct, RTTI_ValueSet 
} from '../R4/Resource';


const cases = [
    ['Account', RTTI_Account],
    ['ActivityDefinition', RTTI_ActivityDefinition],
    ['AdverseEvent', RTTI_AdverseEvent],
    ['AllergyIntolerance', RTTI_AllergyIntolerance],
    ['Appointment', RTTI_Appointment],
    ['AppointmentResponse', RTTI_AppointmentResponse],
    ['AuditEvent', RTTI_AuditEvent],
    ['Basic', RTTI_Basic],
    ['Binary', RTTI_Binary],
    ['BiologicallyDerivedProduct', RTTI_BiologicallyDerivedProduct],
    ['BodyStructure', RTTI_BodyStructure],
    // ['Bundle', RTTI_Bundle],
    // ['CapabilityStatement', RTTI_CapabilityStatement],
    ['CarePlan', RTTI_CarePlan],
    ['Claim', RTTI_Claim],
    // ['CodeSystem', RTTI_CodeSystem],
    // ['Questionnaire', RTTI_Questionnaire],
    // ['StructureDefinition', RTTI_StructureDefinition],
    // ['ValueSet', RTTI_ValueSet],
];


describe.each<any>(cases)(
    'Validate %s',
    (domain: string, RTTI: any) => {
        const files = fs.readdirSync(path.join(__dirname, `samples/${domain}`))
        const filesContent = files.map((f: string) => { return [
            f, 
            fs.readFileSync(path.join(__dirname, `samples/${domain}`, f), 'utf8'),
            RTTI
        ] });

        test.each(filesContent)(`should decode file %s`, (filename, fileContent, RTTI) => {
            const result = RTTI.decode(JSON.parse(fileContent));
            expect(result._tag).toBe('Right');
        })
    })