
        import { CodeableConcept } from '../Resource/CodeableConcept';
import { CoverageEligibilityRequest_Diagnosis } from '../Resource/CoverageEligibilityRequest_Diagnosis';
import { Element } from '../Resource/Element';
import { Extension } from '../Resource/Extension';
import { Money } from '../Resource/Money';
import { PositiveInt } from '../Scalar/PositiveInt';
import { Quantity } from '../Resource/Quantity';
import { Reference } from '../Resource/Reference';

        

        /**
         * The CoverageEligibilityRequest provides patient and insurance coverage information to an insurer for them to respond, in the form of an CoverageEligibilityResponse, with information regarding whether the stated coverage is valid and in-force and optionally to provide the insurance details of the policy. 
         */
        export class CoverageEligibilityRequest_Item  {

            constructor() {
                
            }

            
                /**
                 * Unique id for the element within a resource (for internal references). This may be any string value that does not contain spaces.
                 */
                Id? : String;
                

                /**
                 * May be used to represent additional information that is not part of the basic definition of the element. To make the use of extensions safe and manageable, there is a strict set of governance  applied to the definition and use of extensions. Though any implementer can define an extension, there is a set of requirements that SHALL be met as part of the definition of the extension.
                 */
                Extension? : Array<Extension>;
                

                /**
                 * May be used to represent additional information that is not part of the basic definition of the element and that modifies the understanding of the element in which it is contained. Usually modifier elements provide negation or qualification. To make the use of extensions safe and manageable, there is a strict set of governance applied to the definition and use of extensions. Though any implementer can define an extension, there is a set of requirements that SHALL be met as part of the definition of the extension. Applications processing a resource are required to check for modifier extensions.

Modifier extensions SHALL NOT change the meaning of any elements on Resource or DomainResource (including cannot change the meaning of modifierExtension itself).
                 */
                ModifierExtension? : Array<Extension>;
                

                /**
                 * Exceptions, special conditions and supporting information pplicable for this service or product line.
                 */
                SupportingInformationSequence? : Array<PositiveInt>;
                

                /**
                 * Extensions for supportingInformationSequence
                 */
                _supportingInformationSequence? : Array<Element>;
                

                /**
                 * Dental: basic, major, ortho; Vision exam, glasses, contacts; etc.
                 */
                Category? : CodeableConcept;
                

                /**
                 * A code to indicate the Professional Service or Product supplied (e.g. CTP, HCPCS,USCLS,ICD10, NCPDP,DIN,ACHI,CCI).
                 */
                Billcode? : CodeableConcept;
                

                /**
                 * Item typification or modifiers codes, e.g. for Oral whether the treatment is cosmetic or associated with TMJ, or for medical whether the treatment was outside the clinic or out of office hours.
                 */
                Modifier? : Array<CodeableConcept>;
                

                /**
                 * The practitioner who is responsible for the services rendered to the patient.
                 */
                Provider? : Reference;
                

                /**
                 * The number of repetitions of a service or product.
                 */
                Quantity? : Quantity;
                

                /**
                 * The fee for an additional service or product or charge.
                 */
                UnitPrice? : Money;
                

                /**
                 * Facility where the services were provided.
                 */
                Facility? : Reference;
                

                /**
                 * List of patient diagnosis for which care is sought.
                 */
                Diagnosis? : Array<CoverageEligibilityRequest_Diagnosis>;
                

                /**
                 * The plan/proposal/order describing the proposed service in detail.
                 */
                Detail? : Array<Reference>;
                
        }
        