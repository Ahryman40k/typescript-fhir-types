
        import { CoverageEligibilityResponse_Item } from '../Resource/CoverageEligibilityResponse_Item';
import { Element } from '../Resource/Element';
import { Extension } from '../Resource/Extension';
import { Reference } from '../Resource/Reference';

        

        /**
         * This resource provides eligibility and plan details from the processing of an CoverageEligibilityRequest resource. 
         */
        export class CoverageEligibilityResponse_Insurance  {

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
                 * A suite of updated or additional Coverages from the Insurer.
                 */
                Coverage? : Reference;
                

                /**
                 * The contract resource which may provide more detailed information.
                 */
                Contract? : Reference;
                

                /**
                 * Flag indicating if the coverage provided is inforce currently  if no service date(s) specified or for the whole duration of the service dates.
                 */
                Inforce? : Boolean;
                

                /**
                 * Extensions for inforce
                 */
                _inforce? : Element;
                

                /**
                 * Benefits and optionally current balances by Category or Service.
                 */
                Item? : Array<CoverageEligibilityResponse_Item>;
                
        }
        