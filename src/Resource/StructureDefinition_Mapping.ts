
        import { Element } from '../Resource/Element';
import { Extension } from '../Resource/Extension';
import { Id } from '../Scalar/Id';
import { Uri } from '../Scalar/Uri';

        

        /**
         * A definition of a FHIR structure. This resource is used to describe the underlying resources, data types defined in FHIR, and also for describing extensions and constraints on resources and data types. 
         */
        export class StructureDefinition_Mapping  {

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
                 * An Internal id that is used to identify this mapping set when specific mappings are made.
                 */
                Identity? : Id;
                

                /**
                 * Extensions for identity
                 */
                _identity? : Element;
                

                /**
                 * An absolute URI that identifies the specification that this mapping is expressed to.
                 */
                Uri? : Uri;
                

                /**
                 * Extensions for uri
                 */
                _uri? : Element;
                

                /**
                 * A name for the specification that is being mapped to.
                 */
                Name? : String;
                

                /**
                 * Extensions for name
                 */
                _name? : Element;
                

                /**
                 * Comments about this mapping, including version notes, issues, scope limitations, and other important notes for usage.
                 */
                Comment? : String;
                

                /**
                 * Extensions for comment
                 */
                _comment? : Element;
                
        }
        