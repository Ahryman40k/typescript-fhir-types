
        import { CodeableConcept } from '../Resource/CodeableConcept';
import { Element } from '../Resource/Element';
import { Extension } from '../Resource/Extension';
import { Observation_ReferenceRange } from '../Resource/Observation_ReferenceRange';
import { Period } from '../Resource/Period';
import { Quantity } from '../Resource/Quantity';
import { Range } from '../Resource/Range';
import { Ratio } from '../Resource/Ratio';
import { SampledData } from '../Resource/SampledData';

        

        /**
         * Measurements and simple assertions made about a patient, device or other subject. 
         */
        export class Observation_Component  {

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
                 * Describes what was observed. Sometimes this is called the observation "code".
                 */
                Code : CodeableConcept;
                

                /**
                 * The information determined as a result of making the observation, if the information has a simple value.
                 */
                ValueQuantity? : Quantity;
                

                /**
                 * The information determined as a result of making the observation, if the information has a simple value.
                 */
                ValueCodeableConcept? : CodeableConcept;
                

                /**
                 * The information determined as a result of making the observation, if the information has a simple value.
                 */
                ValueString? : String;
                

                /**
                 * Extensions for valueString
                 */
                _valueString? : Element;
                

                /**
                 * The information determined as a result of making the observation, if the information has a simple value.
                 */
                ValueBoolean? : Boolean;
                

                /**
                 * Extensions for valueBoolean
                 */
                _valueBoolean? : Element;
                

                /**
                 * The information determined as a result of making the observation, if the information has a simple value.
                 */
                ValueInteger? : Number;
                

                /**
                 * Extensions for valueInteger
                 */
                _valueInteger? : Element;
                

                /**
                 * The information determined as a result of making the observation, if the information has a simple value.
                 */
                ValueRange? : Range;
                

                /**
                 * The information determined as a result of making the observation, if the information has a simple value.
                 */
                ValueRatio? : Ratio;
                

                /**
                 * The information determined as a result of making the observation, if the information has a simple value.
                 */
                ValueSampledData? : SampledData;
                

                /**
                 * The information determined as a result of making the observation, if the information has a simple value.
                 */
                ValueTime? : String;
                

                /**
                 * Extensions for valueTime
                 */
                _valueTime? : Element;
                

                /**
                 * The information determined as a result of making the observation, if the information has a simple value.
                 */
                ValueDateTime? : String;
                

                /**
                 * Extensions for valueDateTime
                 */
                _valueDateTime? : Element;
                

                /**
                 * The information determined as a result of making the observation, if the information has a simple value.
                 */
                ValuePeriod? : Period;
                

                /**
                 * Provides a reason why the expected value in the element Observation.component.value[x] is missing.
                 */
                DataAbsentReason? : CodeableConcept;
                

                /**
                 * A categorical assessment of an observation value.  For example, high, low, normal.
                 */
                Interpretation? : Array<CodeableConcept>;
                

                /**
                 * Guidance on how to interpret the value by comparison to a normal or recommended range.
                 */
                ReferenceRange? : Array<Observation_ReferenceRange>;
                
        }
        