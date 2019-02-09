
        import { Element } from '../Resource/Element';
import { Extension } from '../Resource/Extension';
import { PositiveInt } from '../Scalar/PositiveInt';
import { Reference } from '../Resource/Reference';

        

        /**
         * This resource provides the adjudication details from the processing of a Claim resource. 
         */
        export class ClaimResponse_Insurance  {

            constructor() {
                this.coverage = new Reference();
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
                 * A service line item.
                 */
                sequence? : PositiveInt;
                

                /**
                 * Extensions for sequence
                 */
                _sequence? : Element;
                

                /**
                 * The instance number of the Coverage which is the focus for adjudication. The Coverage against which the claim is to be adjudicated.
                 */
                focal? : boolean;
                

                /**
                 * Extensions for focal
                 */
                _focal? : Element;
                

                /**
                 * Reference to the program or plan identification, underwriter or payor.
                 */
                coverage : Reference;
                

                /**
                 * The contract number of a business agreement which describes the terms and conditions.
                 */
                businessArrangement? : string;
                

                /**
                 * Extensions for businessArrangement
                 */
                _businessArrangement? : Element;
                

                /**
                 * The Coverages adjudication details.
                 */
                claimResponse? : Reference;
                
        }
        