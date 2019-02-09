
        import { Extension } from '../Resource/Extension';
import { Quantity } from '../Resource/Quantity';
import { Ratio } from '../Resource/Ratio';
import { Timing } from '../Resource/Timing';

        

        /**
         * A request to supply a diet, formula feeding (enteral) or oral nutritional supplement to a patient/resident. 
         */
        export class NutritionOrder_Administration  {

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
                 * The time period and frequency at which the enteral formula should be delivered to the patient.
                 */
                schedule? : Timing;
                

                /**
                 * The volume of formula to provide to the patient per the specified administration schedule.
                 */
                quantity? : Quantity;
                

                /**
                 * The rate of administration of formula via a feeding pump, e.g. 60 mL per hour, according to the specified schedule.
                 */
                rateQuantity? : Quantity;
                

                /**
                 * The rate of administration of formula via a feeding pump, e.g. 60 mL per hour, according to the specified schedule.
                 */
                rateRatio? : Ratio;
                
        }
        