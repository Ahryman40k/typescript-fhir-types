
import * as t from 'io-ts';
import {RTTI_Meta, IMeta} from './RTTI_Meta';
import {RTTI_Element, IElement} from './RTTI_Element';
import {RTTI_Narrative, INarrative} from './RTTI_Narrative';
import { RTTI_ResourceList, IResourceList } from '../Union/RTTI_ResourceList';
import {RTTI_Extension, IExtension} from './RTTI_Extension';
import {RTTI_Identifier, IIdentifier} from './RTTI_Identifier';
import {RTTI_HumanName, IHumanName} from './RTTI_HumanName';
import {RTTI_ContactPoint, IContactPoint} from './RTTI_ContactPoint';
import {RTTI_Address, IAddress} from './RTTI_Address';
import {RTTI_CodeableConcept, ICodeableConcept} from './RTTI_CodeableConcept';
import {RTTI_Attachment, IAttachment} from './RTTI_Attachment';
import {RTTI_Patient_Contact, IPatient_Contact} from './RTTI_Patient_Contact';
import {RTTI_Patient_Communication, IPatient_Communication} from './RTTI_Patient_Communication';
import {RTTI_Reference, IReference} from './RTTI_Reference';
import {RTTI_Patient_Link, IPatient_Link} from './RTTI_Patient_Link';

export enum PatientGenderKind {
                male = 'male',
female = 'female',
other = 'other',
unknown = 'unknown'
            }
const PatientGenderKindKeys = t.keyof({
                [PatientGenderKind.male]: null,
[PatientGenderKind.female]: null,
[PatientGenderKind.other]: null,
[PatientGenderKind.unknown]: null
            });


            export interface IPatient {
                
                    /**
                     * This is a Patient resource
                     */
                    resourceType: 'Patient';
                    
                
                    /**
                     * The logical id of the resource, as used in the URL for the resource. Once assigned, this value never changes.
                     */
                    id? : string;
                    

                    /**
                     * The metadata about the resource. This is content that is maintained by the infrastructure. Changes to the content might not always be associated with version changes to the resource.
                     */
                    meta? : IMeta;
                    

                    /**
                     * A reference to a set of rules that were followed when the resource was constructed, and which must be understood when processing the content. Often, this is a reference to an implementation guide that defines the special rules along with other profiles etc.
                     */
                    implicitRules? : string;
                    

                    /**
                     * Extensions for implicitRules
                     */
                    _implicitRules? : IElement;
                    

                    /**
                     * The base language in which the resource is written.
                     */
                    language? : string;
                    

                    /**
                     * Extensions for language
                     */
                    _language? : IElement;
                    

                    /**
                     * A human-readable narrative that contains a summary of the resource and can be used to represent the content of the resource to a human. The narrative need not encode all the structured data, but is required to contain sufficient detail to make it "clinically safe" for a human to just read the narrative. Resource definitions may define what content should be represented in the narrative to ensure clinical safety.
                     */
                    text? : INarrative;
                    

                    /**
                     * These resources do not have an independent existence apart from the resource that contains them - they cannot be identified independently, and nor can they have their own independent transaction scope.
                     */
                    contained? : IResourceList[];
                    

                    /**
                     * May be used to represent additional information that is not part of the basic definition of the resource. To make the use of extensions safe and manageable, there is a strict set of governance  applied to the definition and use of extensions. Though any implementer can define an extension, there is a set of requirements that SHALL be met as part of the definition of the extension.
                     */
                    extension? : IExtension[];
                    

                    /**
                     * May be used to represent additional information that is not part of the basic definition of the resource, and that modifies the understanding of the element that contains it. Usually modifier elements provide negation or qualification. To make the use of extensions safe and manageable, there is a strict set of governance applied to the definition and use of extensions. Though any implementer is allowed to define an extension, there is a set of requirements that SHALL be met as part of the definition of the extension. Applications processing a resource are required to check for modifier extensions.

Modifier extensions SHALL NOT change the meaning of any elements on Resource or DomainResource (including cannot change the meaning of modifierExtension itself).
                     */
                    modifierExtension? : IExtension[];
                    

                    /**
                     * An identifier for this patient.
                     */
                    identifier? : IIdentifier[];
                    

                    /**
                     * Whether this patient record is in active use. 
Many systems use this property to mark as non-current patients, such as those that have not been seen for a period of time based on an organization's business rules.

It is often used to filter patient lists to exclude inactive patients

Deceased patients may also be marked as inactive for the same reasons, but may be active for some time after death.
                     */
                    active? : boolean;
                    

                    /**
                     * Extensions for active
                     */
                    _active? : IElement;
                    

                    /**
                     * A name associated with the individual.
                     */
                    name? : IHumanName[];
                    

                    /**
                     * A contact detail (e.g. a telephone number or an email address) by which the individual may be contacted.
                     */
                    telecom? : IContactPoint[];
                    

                    /**
                     * Administrative Gender - the gender that the patient is considered to have for administration and record keeping purposes.
                     */
                    gender? : PatientGenderKind;
                    

                    /**
                     * Extensions for gender
                     */
                    _gender? : IElement;
                    

                    /**
                     * The date of birth for the individual.
                     */
                    birthDate? : string;
                    

                    /**
                     * Extensions for birthDate
                     */
                    _birthDate? : IElement;
                    

                    /**
                     * Indicates if the individual is deceased or not.
                     */
                    deceasedBoolean? : boolean;
                    

                    /**
                     * Extensions for deceasedBoolean
                     */
                    _deceasedBoolean? : IElement;
                    

                    /**
                     * Indicates if the individual is deceased or not.
                     */
                    deceasedDateTime? : string;
                    

                    /**
                     * Extensions for deceasedDateTime
                     */
                    _deceasedDateTime? : IElement;
                    

                    /**
                     * An address for the individual.
                     */
                    address? : IAddress[];
                    

                    /**
                     * This field contains a patient's most recent marital (civil) status.
                     */
                    maritalStatus? : ICodeableConcept;
                    

                    /**
                     * Indicates whether the patient is part of a multiple (boolean) or indicates the actual birth order (integer).
                     */
                    multipleBirthBoolean? : boolean;
                    

                    /**
                     * Extensions for multipleBirthBoolean
                     */
                    _multipleBirthBoolean? : IElement;
                    

                    /**
                     * Indicates whether the patient is part of a multiple (boolean) or indicates the actual birth order (integer).
                     */
                    multipleBirthInteger? : number;
                    

                    /**
                     * Extensions for multipleBirthInteger
                     */
                    _multipleBirthInteger? : IElement;
                    

                    /**
                     * Image of the patient.
                     */
                    photo? : IAttachment[];
                    

                    /**
                     * A contact party (e.g. guardian, partner, friend) for the patient.
                     */
                    contact? : IPatient_Contact[];
                    

                    /**
                     * A language which may be used to communicate with the patient about his or her health.
                     */
                    communication? : IPatient_Communication[];
                    

                    /**
                     * Patient's nominated care provider.
                     */
                    generalPractitioner? : IReference[];
                    

                    /**
                     * Organization that is the custodian of the patient record.
                     */
                    managingOrganization? : IReference;
                    

                    /**
                     * Link to another patient resource that concerns the same actual patient.
                     */
                    link? : IPatient_Link[];
                    
            }
        


        export const RTTI_Patient: t.Type<IPatient> = t.recursion( 'IPatient', () =>
            t.intersection([
                
        t.type({
           resourceType: t.literal('Patient')
        })
        ,
                
        t.partial({
            id: t.string,
meta: RTTI_Meta,
implicitRules: t.string,
_implicitRules: RTTI_Element,
language: t.string,
_language: RTTI_Element,
text: RTTI_Narrative,
contained: t.array(RTTI_ResourceList),
extension: t.array(RTTI_Extension),
modifierExtension: t.array(RTTI_Extension),
identifier: t.array(RTTI_Identifier),
active: t.boolean,
_active: RTTI_Element,
name: t.array(RTTI_HumanName),
telecom: t.array(RTTI_ContactPoint),
gender: PatientGenderKindKeys,
_gender: RTTI_Element,
birthDate: t.string,
_birthDate: RTTI_Element,
deceasedBoolean: t.boolean,
_deceasedBoolean: RTTI_Element,
deceasedDateTime: t.string,
_deceasedDateTime: RTTI_Element,
address: t.array(RTTI_Address),
maritalStatus: RTTI_CodeableConcept,
multipleBirthBoolean: t.boolean,
_multipleBirthBoolean: RTTI_Element,
multipleBirthInteger: t.number,
_multipleBirthInteger: RTTI_Element,
photo: t.array(RTTI_Attachment),
contact: t.array(RTTI_Patient_Contact),
communication: t.array(RTTI_Patient_Communication),
generalPractitioner: t.array(RTTI_Reference),
managingOrganization: RTTI_Reference,
link: t.array(RTTI_Patient_Link)
        })
        
            ])
        );
        

        