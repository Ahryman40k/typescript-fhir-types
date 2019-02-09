
        import { CodeableConcept } from '../Resource/CodeableConcept';
import { Decimal } from '../Scalar/Decimal';
import { Element } from '../Resource/Element';
import { Extension } from '../Resource/Extension';
import { Period } from '../Resource/Period';
import { Range } from '../Resource/Range';

        

        /**
         * An assessment of the likely outcome(s) for a patient or other subject as well as the likelihood of each outcome. 
         */
        export class RiskAssessment_Prediction  {

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
                 * One of the potential outcomes for the patient (e.g. remission, death,  a particular condition).
                 */
                outcome? : CodeableConcept;
                

                /**
                 * Indicates how likely the outcome is (in the specified timeframe).
                 */
                probabilityDecimal? : number;
                

                /**
                 * Extensions for probabilityDecimal
                 */
                _probabilityDecimal? : Element;
                

                /**
                 * Indicates how likely the outcome is (in the specified timeframe).
                 */
                probabilityRange? : Range;
                

                /**
                 * Indicates how likely the outcome is (in the specified timeframe), expressed as a qualitative value (e.g. low, medium, or high).
                 */
                qualitativeRisk? : CodeableConcept;
                

                /**
                 * Indicates the risk for this particular subject (with their specific characteristics) divided by the risk of the population in general.  (Numbers greater than 1 = higher risk than the population, numbers less than 1 = lower risk.).
                 */
                relativeRisk? : Decimal;
                

                /**
                 * Extensions for relativeRisk
                 */
                _relativeRisk? : Element;
                

                /**
                 * Indicates the period of time or age range of the subject to which the specified probability applies.
                 */
                whenPeriod? : Period;
                

                /**
                 * Indicates the period of time or age range of the subject to which the specified probability applies.
                 */
                whenRange? : Range;
                

                /**
                 * Additional information explaining the basis for the prediction.
                 */
                rationale? : string;
                

                /**
                 * Extensions for rationale
                 */
                _rationale? : Element;
                
        }
        