
        import { CodeableConcept } from '../Resource/CodeableConcept';
import { Element } from '../Resource/Element';
import { Extension } from '../Resource/Extension';

        

        /**
         * The clinical particulars - indications, contraindications etc. of a medicinal product, including for regulatory purposes. 
         */
        export class MedicinalProductClinicals_Interactions  {

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
                 * The interaction described.
                 */
                Interaction? : String;
                

                /**
                 * Extensions for interaction
                 */
                _interaction? : Element;
                

                /**
                 * The specific medication, food or laboratory test that interacts.
                 */
                Interactant? : Array<CodeableConcept>;
                

                /**
                 * The type of the interaction.
                 */
                Type? : CodeableConcept;
                

                /**
                 * The effect of the interaction.
                 */
                Effect? : CodeableConcept;
                

                /**
                 * The incidence of the interaction.
                 */
                Incidence? : CodeableConcept;
                

                /**
                 * Actions for managing the interaction.
                 */
                Management? : CodeableConcept;
                
        }
        