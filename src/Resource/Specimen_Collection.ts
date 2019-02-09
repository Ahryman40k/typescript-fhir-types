
        import { CodeableConcept } from '../Resource/CodeableConcept';
import { Duration } from '../Resource/Duration';
import { Element } from '../Resource/Element';
import { Extension } from '../Resource/Extension';
import { Period } from '../Resource/Period';
import { Quantity } from '../Resource/Quantity';
import { Reference } from '../Resource/Reference';

        

        /**
         * A sample to be used for analysis. 
         */
        export class Specimen_Collection  {

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
                 * Person who collected the specimen.
                 */
                collector? : Reference;
                

                /**
                 * Time when specimen was collected from subject - the physiologically relevant time.
                 */
                collectedDateTime? : string;
                

                /**
                 * Extensions for collectedDateTime
                 */
                _collectedDateTime? : Element;
                

                /**
                 * Time when specimen was collected from subject - the physiologically relevant time.
                 */
                collectedPeriod? : Period;
                

                /**
                 * The span of time over which the collection of a specimen occurred.
                 */
                duration? : Duration;
                

                /**
                 * The quantity of specimen collected; for instance the volume of a blood sample, or the physical measurement of an anatomic pathology sample.
                 */
                quantity? : Quantity;
                

                /**
                 * A coded value specifying the technique that is used to perform the procedure.
                 */
                method? : CodeableConcept;
                

                /**
                 * Anatomical location from which the specimen was collected (if subject is a patient). This is the target site.  This element is not used for environmental specimens.
                 */
                bodySite? : CodeableConcept;
                

                /**
                 * Abstinence or reduction from some or all food, drink, or both, for a period of time prior to sample collection.
                 */
                fastingStatusCodeableConcept? : CodeableConcept;
                

                /**
                 * Abstinence or reduction from some or all food, drink, or both, for a period of time prior to sample collection.
                 */
                fastingStatusDuration? : Duration;
                
        }
        