
        import { Canonical } from '../Scalar/Canonical';
import { Element } from '../Resource/Element';
import { Extension } from '../Resource/Extension';
import { Integer } from '../Scalar/Integer';
import { Uri } from '../Scalar/Uri';

        

        /**
         * A structured set of tests against a FHIR server or client implementation to determine compliance against the FHIR specification. 
         */
        export class TestScript_Capability  {

            constructor() {
                this.Capabilities = new Canonical();
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
                 * Whether or not the test execution will require the given capabilities of the server in order for this test script to execute.
                 */
                Required? : Boolean;
                

                /**
                 * Extensions for required
                 */
                _required? : Element;
                

                /**
                 * Whether or not the test execution will validate the given capabilities of the server in order for this test script to execute.
                 */
                Validated? : Boolean;
                

                /**
                 * Extensions for validated
                 */
                _validated? : Element;
                

                /**
                 * Description of the capabilities that this test script is requiring the server to support.
                 */
                Description? : String;
                

                /**
                 * Extensions for description
                 */
                _description? : Element;
                

                /**
                 * Which origin server these requirements apply to.
                 */
                Origin? : Array<Integer>;
                

                /**
                 * Extensions for origin
                 */
                _origin? : Array<Element>;
                

                /**
                 * Which server these requirements apply to.
                 */
                Destination? : Integer;
                

                /**
                 * Extensions for destination
                 */
                _destination? : Element;
                

                /**
                 * Links to the FHIR specification that describes this interaction and the resources involved in more detail.
                 */
                Link? : Array<Uri>;
                

                /**
                 * Extensions for link
                 */
                _link? : Array<Element>;
                

                /**
                 * Minimum capabilities required of server for test script to execute successfully.   If server does not meet at a minimum the referenced capability statement, then all tests in this script are skipped.
                 */
                Capabilities : Canonical;
                
        }
        