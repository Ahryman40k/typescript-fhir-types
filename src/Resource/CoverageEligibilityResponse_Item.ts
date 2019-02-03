
        import { CodeableConcept } from '../Resource/CodeableConcept';
import { CoverageEligibilityResponse_Benefit } from '../Resource/CoverageEligibilityResponse_Benefit';
import { Element } from '../Resource/Element';
import { Extension } from '../Resource/Extension';
import { Reference } from '../Resource/Reference';
import { Uri } from '../Scalar/Uri';

        

        /**
         * This resource provides eligibility and plan details from the processing of an CoverageEligibilityRequest resource. 
         */
        export class CoverageEligibilityResponse_Item  {

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
                 * High-level Dental, Vision, Medical, Pharmacy, Rehab etc. and detailed types of services: Dental: basic, major, ortho; Vision exam, glasses, contacts; etc.
                 */
                Category? : CodeableConcept;
                

                /**
                 * A code to indicate the Professional Service or Product supplied (eg. CTP, HCPCS,USCLS,ICD10, NCPDP,DIN,ACHI,CCI).
                 */
                Billcode? : CodeableConcept;
                

                /**
                 * Item typification or modifiers codes, eg for Oral whether the treatment is cosmetic or associated with TMJ, or for medical whether the treatment was outside the clinic or out of office hours.
                 */
                Modifier? : Array<CodeableConcept>;
                

                /**
                 * The practitioner who is responsible for the services rendered to the patient.
                 */
                Provider? : Reference;
                

                /**
                 * True if the indicated class of service is excluded from the plan, missing or False indicated the service is included in the coverage.
                 */
                Excluded? : Boolean;
                

                /**
                 * Extensions for excluded
                 */
                _excluded? : Element;
                

                /**
                 * A short name or tag for the benefit, for example MED01, or DENT2.
                 */
                Name? : String;
                

                /**
                 * Extensions for name
                 */
                _name? : Element;
                

                /**
                 * A richer description of the benefit, for example 'DENT2 covers 100% of basic, 50% of major but excludes Ortho, Implants and Cosmetic services'.
                 */
                Description? : String;
                

                /**
                 * Extensions for description
                 */
                _description? : Element;
                

                /**
                 * Network designation.
                 */
                Network? : CodeableConcept;
                

                /**
                 * Unit designation: individual or family.
                 */
                Unit? : CodeableConcept;
                

                /**
                 * The term or period of the values such as 'maximum lifetime benefit' or 'maximum annual visits'.
                 */
                Term? : CodeableConcept;
                

                /**
                 * Benefits used to date.
                 */
                Benefit? : Array<CoverageEligibilityResponse_Benefit>;
                

                /**
                 * A boolean flag indicating whether a prior authorization or pre-authorization is required prior to actual service delivery.
                 */
                AuthorizationRequired? : Boolean;
                

                /**
                 * Extensions for authorizationRequired
                 */
                _authorizationRequired? : Element;
                

                /**
                 * Codes or comments regarding information or actions assciated with the pre-authorization.
                 */
                AuthorizationSupporting? : Array<CodeableConcept>;
                

                /**
                 * A descriptive document location.
                 */
                AuthorizationUrl? : Uri;
                

                /**
                 * Extensions for authorizationUrl
                 */
                _authorizationUrl? : Element;
                
        }
        