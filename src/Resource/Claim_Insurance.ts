
        import { Element } from '../Resource/Element';
import { Extension } from '../Resource/Extension';
import { Identifier } from '../Resource/Identifier';
import { PositiveInt } from '../Scalar/PositiveInt';
import { Reference } from '../Resource/Reference';

        

        /**
         * A provider issued list of services and products provided, or to be provided, to a patient which is provided to an insurer for payment recovery. 
         */
        export class Claim_Insurance  {

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
                 * Sequence of coverage which serves to provide a link and convey coordination of benefit order.
                 */
                sequence? : PositiveInt;
                

                /**
                 * Extensions for sequence
                 */
                _sequence? : Element;
                

                /**
                 * A flag to indicate that this Coverage is the focus for adjudication. The Coverage against which the claim is to be adjudicated.
                 */
                focal? : boolean;
                

                /**
                 * Extensions for focal
                 */
                _focal? : Element;
                

                /**
                 * The business identifier for the instance: claim number, pre-determination or pre-authorization number.
                 */
                identifier? : Identifier;
                

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
                 * A list of references from the Insurer to which these services pertain.
                 */
                preAuthRef? : String[];
                

                /**
                 * Extensions for preAuthRef
                 */
                _preAuthRef? : Element[];
                

                /**
                 * The Coverages adjudication details.
                 */
                claimResponse? : Reference;
                
        }
        