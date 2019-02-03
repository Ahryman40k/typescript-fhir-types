
        import { CodeableConcept } from '../Resource/CodeableConcept';
import { Extension } from '../Resource/Extension';
import { MeasureReport_Population } from '../Resource/MeasureReport_Population';
import { MeasureReport_Stratifier } from '../Resource/MeasureReport_Stratifier';
import { Quantity } from '../Resource/Quantity';

        

        /**
         * The MeasureReport resource contains the results of the calculation of a measure; and optionally a reference to the resources involved in that calculation. 
         */
        export class MeasureReport_Group  {

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
                 * The meaning of the population group as defined in the measure definition.
                 */
                Code? : CodeableConcept;
                

                /**
                 * The populations that make up the population group, one for each type of population appropriate for the measure.
                 */
                Population? : Array<MeasureReport_Population>;
                

                /**
                 * The measure score for this population group, calculated as appropriate for the measure type and scoring method, and based on the contents of the populations defined in the group.
                 */
                MeasureScore? : Quantity;
                

                /**
                 * When a measure includes multiple stratifiers, there will be a stratifier group for each stratifier defined by the measure.
                 */
                Stratifier? : Array<MeasureReport_Stratifier>;
                
        }
        