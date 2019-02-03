
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
                 * Person who collected the specimen.
                 */
                Collector? : Reference;
                

                /**
                 * Time when specimen was collected from subject - the physiologically relevant time.
                 */
                CollectedDateTime? : String;
                

                /**
                 * Extensions for collectedDateTime
                 */
                _collectedDateTime? : Element;
                

                /**
                 * Time when specimen was collected from subject - the physiologically relevant time.
                 */
                CollectedPeriod? : Period;
                

                /**
                 * The span of time over which the collection of a specimen occurred.
                 */
                Duration? : Duration;
                

                /**
                 * The quantity of specimen collected; for instance the volume of a blood sample, or the physical measurement of an anatomic pathology sample.
                 */
                Quantity? : Quantity;
                

                /**
                 * A coded value specifying the technique that is used to perform the procedure.
                 */
                Method? : CodeableConcept;
                

                /**
                 * Anatomical location from which the specimen was collected (if subject is a patient). This is the target site.  This element is not used for environmental specimens.
                 */
                BodySite? : CodeableConcept;
                

                /**
                 * Abstinence or reduction from some or all food, drink, or both, for a period of time prior to sample collection.
                 */
                FastingStatusCodeableConcept? : CodeableConcept;
                

                /**
                 * Abstinence or reduction from some or all food, drink, or both, for a period of time prior to sample collection.
                 */
                FastingStatusDuration? : Duration;
                
        }
        