
        import { Extension } from '../Resource/Extension';
import { Reference } from '../Resource/Reference';
import { TestScript_Rule1 } from '../Resource/TestScript_Rule1';

        

        /**
         * A structured set of tests against a FHIR server or client implementation to determine compliance against the FHIR specification. 
         */
        export class TestScript_Ruleset  {

            constructor() {
                this.resource = new Reference();
this.rule = new Array<TestScript_Rule1>();
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
                 * Reference to the resource (containing the contents of the ruleset needed for assertions).
                 */
                resource : Reference;
                

                /**
                 * The referenced rule within the external ruleset template.
                 */
                rule : TestScript_Rule1[];
                
        }
        