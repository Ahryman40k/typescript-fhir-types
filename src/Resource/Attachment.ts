
        import { Base64Binary } from '../Scalar/Base64Binary';
import { Code } from '../Scalar/Code';
import { DateTime } from '../Scalar/DateTime';
import { Element } from '../Resource/Element';
import { Extension } from '../Resource/Extension';
import { UnsignedInt } from '../Scalar/UnsignedInt';
import { Url } from '../Scalar/Url';

        

        /**
         * For referring to data content defined in other formats. 
         */
        export class Attachment  {

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
                 * Identifies the type of the data in the attachment and allows a method to be chosen to interpret or render the data. Includes mime type parameters such as charset where appropriate.
                 */
                contentType? : Code;
                

                /**
                 * Extensions for contentType
                 */
                _contentType? : Element;
                

                /**
                 * The human language of the content. The value can be any valid value according to BCP 47.
                 */
                language? : Code;
                

                /**
                 * Extensions for language
                 */
                _language? : Element;
                

                /**
                 * The actual data of the attachment - a sequence of bytes, base64 encoded.
                 */
                data? : Base64Binary;
                

                /**
                 * Extensions for data
                 */
                _data? : Element;
                

                /**
                 * A location where the data can be accessed.
                 */
                url? : Url;
                

                /**
                 * Extensions for url
                 */
                _url? : Element;
                

                /**
                 * The number of bytes of data that make up this attachment (before base64 encoding, if that is done).
                 */
                size? : UnsignedInt;
                

                /**
                 * Extensions for size
                 */
                _size? : Element;
                

                /**
                 * The calculated hash of the data using SHA-1. Represented using base64.
                 */
                hash? : Base64Binary;
                

                /**
                 * Extensions for hash
                 */
                _hash? : Element;
                

                /**
                 * A label or set of text to display in place of the data.
                 */
                title? : string;
                

                /**
                 * Extensions for title
                 */
                _title? : Element;
                

                /**
                 * The date that the attachment was first created.
                 */
                creation? : DateTime;
                

                /**
                 * Extensions for creation
                 */
                _creation? : Element;
                
        }
        