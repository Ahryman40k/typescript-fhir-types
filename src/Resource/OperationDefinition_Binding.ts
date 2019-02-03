
        import { Canonical } from '../Scalar/Canonical';
import { Element } from '../Resource/Element';
import { Extension } from '../Resource/Extension';

        export enum OperationDefinition_BindingStrengthKind {
                required,
extensible,
preferred,
example
            }

        /**
         * A formal computable definition of an operation (on the RESTful interface) or a named query (using the search interaction). 
         */
        export class OperationDefinition_Binding  {

            constructor() {
                this.ValueSet = new Canonical();
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
                 * Indicates the degree of conformance expectations associated with this binding - that is, the degree to which the provided value set must be adhered to in the instances.
                 */
                Strength? : OperationDefinition_BindingStrengthKind;
                

                /**
                 * Extensions for strength
                 */
                _strength? : Element;
                

                /**
                 * Points to the value set or external definition (e.g. implicit value set) that identifies the set of codes to be used.
                 */
                ValueSet : Canonical;
                
        }
        