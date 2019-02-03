
        import { CodeableConcept } from '../Resource/CodeableConcept';
import { Element } from '../Resource/Element';
import { ExplanationOfBenefit_Financial } from '../Resource/ExplanationOfBenefit_Financial';
import { Extension } from '../Resource/Extension';

        

        /**
         * This resource provides: the claim details; adjudication details from the processing of a Claim; and optionally account balance information, for informing the subscriber of the benefits provided. 
         */
        export class ExplanationOfBenefit_BenefitBalance  {

            constructor() {
                this.Category = new CodeableConcept();
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
                 * Dental, Vision, Medical, Pharmacy, Rehab etc.
                 */
                Category : CodeableConcept;
                

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
                 * A richer description of the benefit, for example 'DENT2 covers 100% of basic, 50% of major but exclused Ortho, Implants and Costmetic services'.
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
                 * The term or period of the values such as 'maximum lifetime benefit' or 'maximum annual vistis'.
                 */
                Term? : CodeableConcept;
                

                /**
                 * Benefits Used to date.
                 */
                Financial? : Array<ExplanationOfBenefit_Financial>;
                
        }
        