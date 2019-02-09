
        import { Element } from '../Resource/Element';
import { ExampleScenario_Alternative } from '../Resource/ExampleScenario_Alternative';
import { ExampleScenario_Operation } from '../Resource/ExampleScenario_Operation';
import { ExampleScenario_Process } from '../Resource/ExampleScenario_Process';
import { Extension } from '../Resource/Extension';

        

        /**
         * Example of workflow instance. 
         */
        export class ExampleScenario_Step  {

            constructor() {
                
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
                 * Nested process.
                 */
                process? : ExampleScenario_Process[];
                

                /**
                 * If there is a pause in the flow.
                 */
                pause? : boolean;
                

                /**
                 * Extensions for pause
                 */
                _pause? : Element;
                

                /**
                 * Each interaction or action.
                 */
                operation? : ExampleScenario_Operation;
                

                /**
                 * Each interaction in the workflow.
                 */
                alternative? : ExampleScenario_Alternative;
                
        }
        