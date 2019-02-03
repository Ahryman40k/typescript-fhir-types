
        import { CodeableConcept } from '../Resource/CodeableConcept';
import { Element } from '../Resource/Element';
import { Extension } from '../Resource/Extension';
import { PositiveInt } from '../Scalar/PositiveInt';

        

        /**
         * This resource provides the adjudication details from the processing of a Claim resource. 
         */
        export class ClaimResponse_Error  {

            constructor() {
                this.Code = new CodeableConcept();
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
                 * The sequence number of the line item submitted which contains the error. This value is omitted when the error is elsewhere.
                 */
                ItemSequence? : PositiveInt;
                

                /**
                 * Extensions for itemSequence
                 */
                _itemSequence? : Element;
                

                /**
                 * The sequence number of the addition within the line item submitted which contains the error. This value is omitted when the error is not related to an Addition.
                 */
                DetailSequence? : PositiveInt;
                

                /**
                 * Extensions for detailSequence
                 */
                _detailSequence? : Element;
                

                /**
                 * The sequence number of the addition within the line item submitted which contains the error. This value is omitted when the error is not related to an Addition.
                 */
                SubDetailSequence? : PositiveInt;
                

                /**
                 * Extensions for subDetailSequence
                 */
                _subDetailSequence? : Element;
                

                /**
                 * An error code, from a specified code system, which details why the claim could not be adjudicated.
                 */
                Code : CodeableConcept;
                
        }
        