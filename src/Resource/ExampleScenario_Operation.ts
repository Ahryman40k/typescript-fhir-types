
        import { Element } from '../Resource/Element';
import { ExampleScenario_ContainedInstance } from '../Resource/ExampleScenario_ContainedInstance';
import { Extension } from '../Resource/Extension';
import { Markdown } from '../Scalar/Markdown';

        

        /**
         * Example of workflow instance. 
         */
        export class ExampleScenario_Operation  {

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
                 * The sequential number of the interaction, e.g. 1.2.5.
                 */
                number? : string;
                

                /**
                 * Extensions for number
                 */
                _number? : Element;
                

                /**
                 * The type of operation - CRUD.
                 */
                type? : string;
                

                /**
                 * Extensions for type
                 */
                _type? : Element;
                

                /**
                 * The human-friendly name of the interaction.
                 */
                name? : string;
                

                /**
                 * Extensions for name
                 */
                _name? : Element;
                

                /**
                 * Who starts the transaction.
                 */
                initiator? : string;
                

                /**
                 * Extensions for initiator
                 */
                _initiator? : Element;
                

                /**
                 * Who receives the transaction.
                 */
                receiver? : string;
                

                /**
                 * Extensions for receiver
                 */
                _receiver? : Element;
                

                /**
                 * A comment to be inserted in the diagram.
                 */
                description? : Markdown;
                

                /**
                 * Extensions for description
                 */
                _description? : Element;
                

                /**
                 * Whether the initiator is deactivated right after the transaction.
                 */
                initiatorActive? : boolean;
                

                /**
                 * Extensions for initiatorActive
                 */
                _initiatorActive? : Element;
                

                /**
                 * Whether the receiver is deactivated right after the transaction.
                 */
                receiverActive? : boolean;
                

                /**
                 * Extensions for receiverActive
                 */
                _receiverActive? : Element;
                

                /**
                 * Each resource instance used by the initiator.
                 */
                request? : ExampleScenario_ContainedInstance;
                

                /**
                 * Each resource instance used by the responder.
                 */
                response? : ExampleScenario_ContainedInstance;
                
        }
        