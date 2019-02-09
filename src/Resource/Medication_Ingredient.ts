
        import { CodeableConcept } from '../Resource/CodeableConcept';
import { Element } from '../Resource/Element';
import { Extension } from '../Resource/Extension';
import { Ratio } from '../Resource/Ratio';
import { Reference } from '../Resource/Reference';

        

        /**
         * This resource is primarily used for the identification and definition of a medication for the purposes of prescribing, dispensing, and administering a medication as well as for making statements about medication use. 
         */
        export class Medication_Ingredient  {

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
                 * The actual ingredient - either a substance (simple ingredient) or another medication of a medication.
                 */
                itemCodeableConcept? : CodeableConcept;
                

                /**
                 * The actual ingredient - either a substance (simple ingredient) or another medication of a medication.
                 */
                itemReference? : Reference;
                

                /**
                 * Indication of whether this ingredient affects the therapeutic action of the drug.
                 */
                isActive? : boolean;
                

                /**
                 * Extensions for isActive
                 */
                _isActive? : Element;
                

                /**
                 * Specifies how many (or how much) of the items there are in this Medication.  For example, 250 mg per tablet.  This is expressed as a ratio where the numerator is 250mg and the denominator is 1 tablet.
                 */
                amount? : Ratio;
                
        }
        