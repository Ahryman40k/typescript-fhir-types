
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
                id? : string;
                

                /**
                 * May be used to represent additional information that is not part of the basic definition of the element. To make the use of extensions safe and manageable, there is a strict set of governance  applied to the definition and use of extensions. Though any implementer can define an extension, there is a set of requirements that SHALL be met as part of the definition of the extension.
                 */
                extension? : Extension[];
                

                /**
                 * Identifies the purpose for this name.
                 */
                use? : HumanNameUseKind;
                

                /**
                 * Extensions for use
                 */
                _use? : Element;
                

                /**
                 * Specifies the entire name as it should be displayed e.g. on an application UI. This may be provided instead of or as well as the specific parts.
                 */
                text? : string;
                

                /**
                 * Extensions for text
                 */
                _text? : Element;
                

                /**
                 * The part of a name that links to the genealogy. In some cultures (e.g. Eritrea) the family name of a son is the first name of his father.
                 */
                family? : string;
                

                /**
                 * Extensions for family
                 */
                _family? : Element;
                

                /**
                 * Given name.
                 */
                given? : String[];
                

                /**
                 * Extensions for given
                 */
                _given? : Element[];
                

                /**
                 * Part of the name that is acquired as a title due to academic, legal, employment or nobility status, etc. and that appears at the start of the name.
                 */
                prefix? : String[];
                

                /**
                 * Extensions for prefix
                 */
                _prefix? : Element[];
                

                /**
                 * Part of the name that is acquired as a title due to academic, legal, employment or nobility status, etc. and that appears at the end of the name.
                 */
                suffix? : String[];
                

                /**
                 * Extensions for suffix
                 */
                _suffix? : Element[];
                

                /**
                 * Indicates the period of time when this name was valid for the named person.
                 */
                period? : Period;
                
        }
        