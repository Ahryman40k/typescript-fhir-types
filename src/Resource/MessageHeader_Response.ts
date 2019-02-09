
        import { Element } from '../Resource/Element';
import { Extension } from '../Resource/Extension';
import { Id } from '../Scalar/Id';
import { Reference } from '../Resource/Reference';

        export enum MessageHeaderResponseCodeKind {
                ok,
transientError,
fatalError
            }

        /**
         * The header for a message exchange that is either requesting or responding to an action.  The reference(s) that are the subject of the action as well as other information related to the action are typically transmitted in a bundle in which the MessageHeader resource instance is the first resource in the bundle. 
         */
        export class MessageHeader_Response  {

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
                 * The MessageHeader.id of the message to which this message is a response.
                 */
                identifier? : Id;
                

                /**
                 * Extensions for identifier
                 */
                _identifier? : Element;
                

                /**
                 * Code that identifies the type of response to the message - whether it was successful or not, and whether it should be resent or not.
                 */
                code? : MessageHeaderResponseCodeKind;
                

                /**
                 * Extensions for code
                 */
                _code? : Element;
                

                /**
                 * Full details of any issues found in the message.
                 */
                details? : Reference;
                
        }
        