
        import { Date } from '../Scalar/Date';
import { Element } from '../Resource/Element';
import { Extension } from '../Resource/Extension';
import { ValueSet_Include } from '../Resource/ValueSet_Include';

        

        /**
         * A ValueSet resource instances specifies a set of codes drawn from one or more code systems, intended for use in a particular context. Value sets link between [[[CodeSystem]]] definitions and their use in [coded elements](terminologies.html). 
         */
        export class ValueSet_Compose  {

            constructor() {
                this.include = new Array<ValueSet_Include>();
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
                 * If a locked date is defined, then the Content Logical Definition must be evaluated using the current version as of the locked date for referenced code system(s) and value set instances where ValueSet.compose.include.version is not defined.
                 */
                lockedDate? : Date;
                

                /**
                 * Extensions for lockedDate
                 */
                _lockedDate? : Element;
                

                /**
                 * Whether inactive codes - codes that are not approved for current use - are in the value set. If inactive = true, inactive codes are to be included in the expansion, if inactive = false, the inactive codes will not be included in the expansion. If absent, the behavior is determined by the implementation, or by the applicable $expand parameters (but generally, inactive codes would be expected to be included).
                 */
                inactive? : boolean;
                

                /**
                 * Extensions for inactive
                 */
                _inactive? : Element;
                

                /**
                 * Include one or more codes from a code system or other value set(s).
                 */
                include : ValueSet_Include[];
                

                /**
                 * Exclude one or more codes from the value set based on code system filters and/or other value sets.
                 */
                exclude? : ValueSet_Include[];
                
        }
        