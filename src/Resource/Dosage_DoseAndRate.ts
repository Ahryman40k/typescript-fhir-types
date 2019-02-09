
        import { CodeableConcept } from '../Resource/CodeableConcept';
import { Extension } from '../Resource/Extension';
import { Quantity } from '../Resource/Quantity';
import { Range } from '../Resource/Range';
import { Ratio } from '../Resource/Ratio';

        

        /**
         * Indicates how the medication is/was taken or should be taken by the patient. 
         */
        export class Dosage_DoseAndRate  {

            constructor() {
                this.type = new CodeableConcept();
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
                 * The kind of dose or rate specified, for example, ordered or calculated.
                 */
                type : CodeableConcept;
                

                /**
                 * Amount of medication per dose.
                 */
                doseRange? : Range;
                

                /**
                 * Amount of medication per dose.
                 */
                doseQuantity? : Quantity;
                

                /**
                 * Amount of medication per unit of time.
                 */
                rateRatio? : Ratio;
                

                /**
                 * Amount of medication per unit of time.
                 */
                rateRange? : Range;
                

                /**
                 * Amount of medication per unit of time.
                 */
                rateQuantity? : Quantity;
                
        }
        