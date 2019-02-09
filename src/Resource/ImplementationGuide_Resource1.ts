
        import { Element } from '../Resource/Element';
import { Extension } from '../Resource/Extension';
import { Reference } from '../Resource/Reference';
import { Url } from '../Scalar/Url';

        

        /**
         * A set of rules of how FHIR is used to solve a particular problem. This resource is used to gather all the parts of an implementation guide into a logical whole and to publish a computable definition of all the parts. 
         */
        export class ImplementationGuide_Resource1  {

            constructor() {
                this.reference = new Reference();
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
                 * Where this resource is found.
                 */
                reference : Reference;
                

                /**
                 * If true or a reference, indicates the resource is an example instance.  If a reference is present, indicates that the example is an example of the specified profile.
                 */
                exampleBoolean? : boolean;
                

                /**
                 * Extensions for exampleBoolean
                 */
                _exampleBoolean? : Element;
                

                /**
                 * If true or a reference, indicates the resource is an example instance.  If a reference is present, indicates that the example is an example of the specified profile.
                 */
                exampleCanonical? : string;
                

                /**
                 * Extensions for exampleCanonical
                 */
                _exampleCanonical? : Element;
                

                /**
                 * The relative path for primary page for this resource within the IG.
                 */
                relativePath? : Url;
                

                /**
                 * Extensions for relativePath
                 */
                _relativePath? : Element;
                
        }
        