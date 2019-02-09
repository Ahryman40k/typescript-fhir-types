
        import { CodeableConcept } from '../Resource/CodeableConcept';
import { Extension } from '../Resource/Extension';
import { Identifier } from '../Resource/Identifier';
import { Reference } from '../Resource/Reference';

        

        /**
         * An interaction between a patient and healthcare provider(s) for the purpose of providing healthcare service(s) or assessing the health status of a patient. 
         */
        export class Encounter_Hospitalization  {

            constructor() {
                
            }

            
                /**
                 * Unique id for the element within a resource (for internal references). This may be any string value that does not contain spaces.
                 */
                id? : string;
                

                /**
                 * May be used to represent additional information that is not part of the basic definition of the element. To make the use of extensions safe and manageable, there is a strict set of governance  applied to the definition and use of extensions. Though any implementer can define an extension, there is a set of requirements that SHALL be met as part of the definition of the extension.
                 */
                extension? : Extension[];
                

                /**
                 * May be used to represent additional information that is not part of the basic definition of the element and that modifies the understanding of the element in which it is contained. Usually modifier elements provide negation or qualification. To make the use of extensions safe and manageable, there is a strict set of governance applied to the definition and use of extensions. Though any implementer can define an extension, there is a set of requirements that SHALL be met as part of the definition of the extension. Applications processing a resource are required to check for modifier extensions.

Modifier extensions SHALL NOT change the meaning of any elements on Resource or DomainResource (including cannot change the meaning of modifierExtension itself).
                 */
                modifierExtension? : Extension[];
                

                /**
                 * Pre-admission identifier.
                 */
                preAdmissionIdentifier? : Identifier;
                

                /**
                 * The location/organization from which the patient came before admission.
                 */
                origin? : Reference;
                

                /**
                 * From where patient was admitted (physician referral, transfer).
                 */
                admitSource? : CodeableConcept;
                

                /**
                 * Whether this hospitalization is a readmission and why if known.
                 */
                reAdmission? : CodeableConcept;
                

                /**
                 * Diet preferences reported by the patient.
                 */
                dietPreference? : CodeableConcept[];
                

                /**
                 * Special courtesies (VIP, board member).
                 */
                specialCourtesy? : CodeableConcept[];
                

                /**
                 * Any special requests that have been made for this hospitalization encounter, such as the provision of specific equipment or other things.
                 */
                specialArrangement? : CodeableConcept[];
                

                /**
                 * Location/organization to which the patient is discharged.
                 */
                destination? : Reference;
                

                /**
                 * Category or kind of location after discharge.
                 */
                dischargeDisposition? : CodeableConcept;
                
        }
        