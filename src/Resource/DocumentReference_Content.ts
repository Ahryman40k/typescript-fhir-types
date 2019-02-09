
        import { Attachment } from '../Resource/Attachment';
import { Coding } from '../Resource/Coding';
import { Extension } from '../Resource/Extension';

        

        /**
         * A reference to a document. 
         */
        export class DocumentReference_Content  {

            constructor() {
                this.attachment = new Attachment();
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
                 * The document or URL of the document along with critical metadata to prove content has integrity.
                 */
                attachment : Attachment;
                

                /**
                 * An identifier of the document encoding, structure, and template that the document conforms to beyond the base format indicated in the mimeType.
                 */
                format? : Coding;
                
        }
        