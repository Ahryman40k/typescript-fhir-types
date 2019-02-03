
        import { DateTime } from '../Scalar/DateTime';
import { Element } from '../Resource/Element';
import { Extension } from '../Resource/Extension';
import { Markdown } from '../Scalar/Markdown';
import { Reference } from '../Resource/Reference';

        

        /**
         * A  text note which also  contains information about who made the statement and when. 
         */
        export class Annotation  {

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
                 * The individual responsible for making the annotation.
                 */
                AuthorReference? : Reference;
                

                /**
                 * The individual responsible for making the annotation.
                 */
                AuthorString? : String;
                

                /**
                 * Extensions for authorString
                 */
                _authorString? : Element;
                

                /**
                 * Indicates when this particular annotation was made.
                 */
                Time? : DateTime;
                

                /**
                 * Extensions for time
                 */
                _time? : Element;
                

                /**
                 * The text of the annotation in markdown format.
                 */
                Text? : Markdown;
                

                /**
                 * Extensions for text
                 */
                _text? : Element;
                
        }
        