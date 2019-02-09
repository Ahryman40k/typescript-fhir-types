
        import { Attachment } from '../Resource/Attachment';
import { Element } from '../Resource/Element';
import { Extension } from '../Resource/Extension';
import { Reference } from '../Resource/Reference';

        

        /**
         * A request to convey information; e.g. the CDS system proposes that an alert be sent to a responsible provider, the CDS system proposes that the public health agency be notified about a reportable condition. 
         */
        export class CommunicationRequest_Payload  {

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
                 * The communicated content (or for multi-part communications, one portion of the communication).
                 */
                contentString? : string;
                

                /**
                 * Extensions for contentString
                 */
                _contentString? : Element;
                

                /**
                 * The communicated content (or for multi-part communications, one portion of the communication).
                 */
                contentAttachment? : Attachment;
                

                /**
                 * The communicated content (or for multi-part communications, one portion of the communication).
                 */
                contentReference? : Reference;
                
        }
        