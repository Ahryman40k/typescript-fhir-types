
        import { CodeableConcept } from '../Resource/CodeableConcept';
import { Extension } from '../Resource/Extension';
import { MedicinalProductClinicals_OtherTherapy } from '../Resource/MedicinalProductClinicals_OtherTherapy';
import { MedicinalProductClinicals_Population } from '../Resource/MedicinalProductClinicals_Population';
import { MedicinalProductClinicals_UndesirableEffects } from '../Resource/MedicinalProductClinicals_UndesirableEffects';
import { Quantity } from '../Resource/Quantity';

        

        /**
         * The clinical particulars - indications, contraindications etc. of a medicinal product, including for regulatory purposes. 
         */
        export class MedicinalProductClinicals_TherapeuticIndication  {

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
                 * The disease, symptom or procedure that is the indication for treatment.
                 */
                diseaseSymptomProcedure? : CodeableConcept;
                

                /**
                 * The status of the disease or symptom for which the indication applies.
                 */
                diseaseStatus? : CodeableConcept;
                

                /**
                 * Comorbidity (concurrent condition) or co-infection as part of the indication.
                 */
                comorbidity? : CodeableConcept[];
                

                /**
                 * The intended effect, aim or strategy to be achieved by the indication.
                 */
                intendedEffect? : CodeableConcept;
                

                /**
                 * Timing or duration information as part of the indication.
                 */
                duration? : Quantity;
                

                /**
                 * Information about the use of the medicinal product in relation to other therapies as part of the indication.
                 */
                undesirableEffects? : MedicinalProductClinicals_UndesirableEffects[];
                

                /**
                 * Information about the use of the medicinal product in relation to other therapies described as part of the indication.
                 */
                otherTherapy? : MedicinalProductClinicals_OtherTherapy[];
                

                /**
                 * The population group to which this applies.
                 */
                population? : MedicinalProductClinicals_Population[];
                
        }
        