
        import { CodeableConcept } from '../Resource/CodeableConcept';
import { Duration } from '../Resource/Duration';
import { Extension } from '../Resource/Extension';
import { MedicinalProductPharmaceutical_TargetSpecies } from '../Resource/MedicinalProductPharmaceutical_TargetSpecies';
import { Quantity } from '../Resource/Quantity';
import { Ratio } from '../Resource/Ratio';

        

        /**
         * A pharmaceutical product described in terms of its composition and dose form. 
         */
        export class MedicinalProductPharmaceutical_RouteOfAdministration  {

            constructor() {
                this.Code = new CodeableConcept();
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
                 * Coded expression for the route.
                 */
                Code : CodeableConcept;
                

                /**
                 * The first dose (dose quantity) administered in humans can be specified, for a product under investigation, using a numerical value and its unit of measurement.
                 */
                FirstDose? : Quantity;
                

                /**
                 * The maximum single dose that can be administered as per the protocol of a clinical trial can be specified using a numerical value and its unit of measurement.
                 */
                MaxSingleDose? : Quantity;
                

                /**
                 * The maximum dose per day (maximum dose quantity to be administered in any one 24-h period) that can be administered as per the protocol referenced in the clinical trial authorisation.
                 */
                MaxDosePerDay? : Quantity;
                

                /**
                 * The maximum dose per treatment period that can be administered as per the protocol referenced in the clinical trial authorisation.
                 */
                MaxDosePerTreatmentPeriod? : Ratio;
                

                /**
                 * The maximum treatment period during which an Investigational Medicinal Product can be administered as per the protocol referenced in the clinical trial authorisation.
                 */
                MaxTreatmentPeriod? : Duration;
                

                /**
                 * A species for which this route applies.
                 */
                TargetSpecies? : Array<MedicinalProductPharmaceutical_TargetSpecies>;
                
        }
        