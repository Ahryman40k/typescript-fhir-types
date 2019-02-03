
        import { Element } from '../Resource/Element';
import { Extension } from '../Resource/Extension';
import { Period } from '../Resource/Period';

        export enum HumanNameUseKind {
                usual,
official,
temp,
nickname,
anonymous,
old,
maiden
            }

        /**
         * A human's name with the ability to identify parts and usage. 
         */
        export class HumanName  {

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
                 * Identifies the purpose for this name.
                 */
                Use? : HumanNameUseKind;
                

                /**
                 * Extensions for use
                 */
                _use? : Element;
                

                /**
                 * Specifies the entire name as it should be displayed e.g. on an application UI. This may be provided instead of or as well as the specific parts.
                 */
                Text? : String;
                

                /**
                 * Extensions for text
                 */
                _text? : Element;
                

                /**
                 * The part of a name that links to the genealogy. In some cultures (e.g. Eritrea) the family name of a son is the first name of his father.
                 */
                Family? : String;
                

                /**
                 * Extensions for family
                 */
                _family? : Element;
                

                /**
                 * Given name.
                 */
                Given? : Array<String>;
                

                /**
                 * Extensions for given
                 */
                _given? : Array<Element>;
                

                /**
                 * Part of the name that is acquired as a title due to academic, legal, employment or nobility status, etc. and that appears at the start of the name.
                 */
                Prefix? : Array<String>;
                

                /**
                 * Extensions for prefix
                 */
                _prefix? : Array<Element>;
                

                /**
                 * Part of the name that is acquired as a title due to academic, legal, employment or nobility status, etc. and that appears at the end of the name.
                 */
                Suffix? : Array<String>;
                

                /**
                 * Extensions for suffix
                 */
                _suffix? : Array<Element>;
                

                /**
                 * Indicates the period of time when this name was valid for the named person.
                 */
                Period? : Period;
                
        }
        