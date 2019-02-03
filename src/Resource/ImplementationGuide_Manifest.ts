
        import { Element } from '../Resource/Element';
import { Extension } from '../Resource/Extension';
import { ImplementationGuide_Page1 } from '../Resource/ImplementationGuide_Page1';
import { ImplementationGuide_Resource1 } from '../Resource/ImplementationGuide_Resource1';
import { Url } from '../Scalar/Url';

        

        /**
         * A set of rules of how FHIR is used to solve a particular problem. This resource is used to gather all the parts of an implementation guide into a logical whole and to publish a computable definition of all the parts. 
         */
        export class ImplementationGuide_Manifest  {

            constructor() {
                this.Resource = new Array<ImplementationGuide_Resource1>();
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
                 * A pointer to official web page, PDF or other rendering of the implementation guide.
                 */
                Rendering? : Url;
                

                /**
                 * Extensions for rendering
                 */
                _rendering? : Element;
                

                /**
                 * A resource that is part of the implementation guide. Conformance resources (value set, structure definition, capability statements etc.) are obvious candidates for inclusion, but any kind of resource can be included as an example resource.
                 */
                Resource : Array<ImplementationGuide_Resource1>;
                

                /**
                 * Information about a page within the IG.
                 */
                Page? : Array<ImplementationGuide_Page1>;
                

                /**
                 * Indicates a relative path to an image that exists within the IG.
                 */
                Image? : Array<String>;
                

                /**
                 * Extensions for image
                 */
                _image? : Array<Element>;
                

                /**
                 * Indicates the relative path of an additional non-page, non-image file that is part of the IG - e.g. zip, jar and similar files that could be the target of a hyperlink in a derived IG.
                 */
                Other? : Array<String>;
                

                /**
                 * Extensions for other
                 */
                _other? : Array<Element>;
                
        }
        