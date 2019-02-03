
        import { ClaimResponse_Adjudication } from '../Resource/ClaimResponse_Adjudication';
import { ClaimResponse_SubDetail } from '../Resource/ClaimResponse_SubDetail';
import { Element } from '../Resource/Element';
import { Extension } from '../Resource/Extension';
import { PositiveInt } from '../Scalar/PositiveInt';

        

        /**
         * This resource provides the adjudication details from the processing of a Claim resource. 
         */
        export class ClaimResponse_Detail  {

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
                 * A service line number.
                 */
                DetailSequence? : PositiveInt;
                

                /**
                 * Extensions for detailSequence
                 */
                _detailSequence? : Element;
                

                /**
                 * A list of note references to the notes provided below.
                 */
                NoteNumber? : Array<PositiveInt>;
                

                /**
                 * Extensions for noteNumber
                 */
                _noteNumber? : Array<Element>;
                

                /**
                 * The adjudication results.
                 */
                Adjudication? : Array<ClaimResponse_Adjudication>;
                

                /**
                 * The third-tier service adjudications for submitted services.
                 */
                SubDetail? : Array<ClaimResponse_SubDetail>;
                
        }
        