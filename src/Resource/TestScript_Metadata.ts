
        import { Extension } from '../Resource/Extension';
import { TestScript_Capability } from '../Resource/TestScript_Capability';
import { TestScript_Link } from '../Resource/TestScript_Link';

        

        /**
         * A structured set of tests against a FHIR server or client implementation to determine compliance against the FHIR specification. 
         */
        export class TestScript_Metadata  {

            constructor() {
                this.Capability = new Array<TestScript_Capability>();
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
                 * A link to the FHIR specification that this test is covering.
                 */
                Link? : Array<TestScript_Link>;
                

                /**
                 * Capabilities that must exist and are assumed to function correctly on the FHIR server being tested.
                 */
                Capability : Array<TestScript_Capability>;
                
        }
        