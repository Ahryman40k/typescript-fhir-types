
        import { Code } from '../Scalar/Code';
import { Element } from '../Resource/Element';
import { Extension } from '../Resource/Extension';
import { Uri } from '../Scalar/Uri';
import { ValueSet_Designation } from '../Resource/ValueSet_Designation';

        

        /**
         * A ValueSet resource instances specifies a set of codes drawn from one or more code systems, intended for use in a particular context. Value sets link between [[[CodeSystem]]] definitions and their use in [coded elements](terminologies.html). 
         */
        export class ValueSet_Contains  {

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
                 * An absolute URI which is the code system in which the code for this item in the expansion is defined.
                 */
                System? : Uri;
                

                /**
                 * Extensions for system
                 */
                _system? : Element;
                

                /**
                 * If true, this entry is included in the expansion for navigational purposes, and the user cannot select the code directly as a proper value.
                 */
                Abstract? : Boolean;
                

                /**
                 * Extensions for abstract
                 */
                _abstract? : Element;
                

                /**
                 * If the concept is inactive in the code system that defines it. Inactive codes are those that are no longer to be used, but are maintained by the code system for understanding legacy data. It might not be known or specified whether an concept is inactive (and it may depend on the context of use).
                 */
                Inactive? : Boolean;
                

                /**
                 * Extensions for inactive
                 */
                _inactive? : Element;
                

                /**
                 * The version of the code system from this code was taken. Note that a well-maintained code system does not need the version reported, because the meaning of codes is consistent across versions. However this cannot consistently be assured, and when the meaning is not guaranteed to be consistent, the version SHOULD be exchanged.
                 */
                Version? : String;
                

                /**
                 * Extensions for version
                 */
                _version? : Element;
                

                /**
                 * The code for this item in the expansion hierarchy. If this code is missing the entry in the hierarchy is a place holder (abstract) and does not represent a valid code in the value set.
                 */
                Code? : Code;
                

                /**
                 * Extensions for code
                 */
                _code? : Element;
                

                /**
                 * The recommended display for this item in the expansion.
                 */
                Display? : String;
                

                /**
                 * Extensions for display
                 */
                _display? : Element;
                

                /**
                 * Additional representations for this item - other languages, aliases, specialized purposes, used for particular purposes, etc. These are relevant when the conditions of the expansion do not fix to a single correct representation.
                 */
                Designation? : Array<ValueSet_Designation>;
                

                /**
                 * Other codes and entries contained under this entry in the hierarchy.
                 */
                Contains? : Array<ValueSet_Contains>;
                
        }
        