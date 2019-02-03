
        import { CodeableConcept } from '../Resource/CodeableConcept';
import { Element } from '../Resource/Element';
import { Extension } from '../Resource/Extension';
import { Reference } from '../Resource/Reference';

        

        /**
         * Describes the event of a patient being administered a vaccine or a record of an immunization as reported by a patient, a clinician or another party. 
         */
        export class Immunization_ProtocolApplied  {

            constructor() {
                this.TargetDisease = new CodeableConcept();
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
                 * One possible path to achieve presumed immunity against a disease - within the context of an authority.
                 */
                Series? : String;
                

                /**
                 * Extensions for series
                 */
                _series? : Element;
                

                /**
                 * Indicates the authority who published the protocol (e.g. ACIP) that is being followed.
                 */
                Authority? : Reference;
                

                /**
                 * The vaccine preventable disease the dose is being administered against.
                 */
                TargetDisease : CodeableConcept;
                

                /**
                 * Nominal position in a series.
                 */
                DoseNumberPositiveInt? : Number;
                

                /**
                 * Extensions for doseNumberPositiveInt
                 */
                _doseNumberPositiveInt? : Element;
                

                /**
                 * Nominal position in a series.
                 */
                DoseNumberString? : String;
                

                /**
                 * Extensions for doseNumberString
                 */
                _doseNumberString? : Element;
                
        }
        