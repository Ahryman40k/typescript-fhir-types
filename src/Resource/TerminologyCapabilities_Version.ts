
        import { Code } from '../Scalar/Code';
import { Element } from '../Resource/Element';
import { Extension } from '../Resource/Extension';
import { TerminologyCapabilities_Filter } from '../Resource/TerminologyCapabilities_Filter';

        

        /**
         * A Terminology Capabilities documents a set of capabilities (behaviors) of a FHIR Server that may be used as a statement of actual server functionality or a statement of required or desired server implementation. 
         */
        export class TerminologyCapabilities_Version  {

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
                 * For version-less code systems, there should be a single version with no identifier.
                 */
                Code? : String;
                

                /**
                 * Extensions for code
                 */
                _code? : Element;
                

                /**
                 * If this is the default version for this code system.
                 */
                IsDefault? : Boolean;
                

                /**
                 * Extensions for isDefault
                 */
                _isDefault? : Element;
                

                /**
                 * If the compositional grammar defined by the code system is supported.
                 */
                Compositional? : Boolean;
                

                /**
                 * Extensions for compositional
                 */
                _compositional? : Element;
                

                /**
                 * Language Displays supported.
                 */
                Language? : Array<Code>;
                

                /**
                 * Extensions for language
                 */
                _language? : Array<Element>;
                

                /**
                 * Filter Properties supported.
                 */
                Filter? : Array<TerminologyCapabilities_Filter>;
                

                /**
                 * Properties supported for $lookup.
                 */
                Property? : Array<Code>;
                

                /**
                 * Extensions for property
                 */
                _property? : Array<Element>;
                
        }
        