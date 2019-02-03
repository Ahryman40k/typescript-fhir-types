
        import { CodeableConcept } from '../Resource/CodeableConcept';
import { Element } from '../Resource/Element';
import { Extension } from '../Resource/Extension';
import { Quantity } from '../Resource/Quantity';
import { Timing } from '../Resource/Timing';

        

        /**
         * A request to supply a diet, formula feeding (enteral) or oral nutritional supplement to a patient/resident. 
         */
        export class NutritionOrder_Supplement  {

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
                 * The kind of nutritional supplement product required such as a high protein or pediatric clear liquid supplement.
                 */
                Type? : CodeableConcept;
                

                /**
                 * The product or brand name of the nutritional supplement such as "Acme Protein Shake".
                 */
                ProductName? : String;
                

                /**
                 * Extensions for productName
                 */
                _productName? : Element;
                

                /**
                 * The time period and frequency at which the supplement(s) should be given.  The supplement should be given for the combination of all schedules if more than one schedule is present.
                 */
                Schedule? : Array<Timing>;
                

                /**
                 * The amount of the nutritional supplement to be given.
                 */
                Quantity? : Quantity;
                

                /**
                 * Free text or additional instructions or information pertaining to the oral supplement.
                 */
                Instruction? : String;
                

                /**
                 * Extensions for instruction
                 */
                _instruction? : Element;
                
        }
        