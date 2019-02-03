
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
                 * The sequential number of the interaction, e.g. 1.2.5.
                 */
                Number? : String;
                

                /**
                 * Extensions for number
                 */
                _number? : Element;
                

                /**
                 * The type of operation - CRUD.
                 */
                Type? : String;
                

                /**
                 * Extensions for type
                 */
                _type? : Element;
                

                /**
                 * The human-friendly name of the interaction.
                 */
                Name? : String;
                

                /**
                 * Extensions for name
                 */
                _name? : Element;
                

                /**
                 * Who starts the transaction.
                 */
                Initiator? : String;
                

                /**
                 * Extensions for initiator
                 */
                _initiator? : Element;
                

                /**
                 * Who receives the transaction.
                 */
                Receiver? : String;
                

                /**
                 * Extensions for receiver
                 */
                _receiver? : Element;
                

                /**
                 * A comment to be inserted in the diagram.
                 */
                Description? : Markdown;
                

                /**
                 * Extensions for description
                 */
                _description? : Element;
                

                /**
                 * Whether the initiator is deactivated right after the transaction.
                 */
                InitiatorActive? : Boolean;
                

                /**
                 * Extensions for initiatorActive
                 */
                _initiatorActive? : Element;
                

                /**
                 * Whether the receiver is deactivated right after the transaction.
                 */
                ReceiverActive? : Boolean;
                

                /**
                 * Extensions for receiverActive
                 */
                _receiverActive? : Element;
                

                /**
                 * Each resource instance used by the initiator.
                 */
                Request? : ExampleScenario_ContainedInstance;
                

                /**
                 * Each resource instance used by the responder.
                 */
                Response? : ExampleScenario_ContainedInstance;
                
        }
        