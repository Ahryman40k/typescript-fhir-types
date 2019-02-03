
        import { CodeableConcept } from '../Resource/CodeableConcept';
import { Element } from '../Resource/Element';
import { Extension } from '../Resource/Extension';
import { ImmunizationRecommendation_DateCriterion } from '../Resource/ImmunizationRecommendation_DateCriterion';
import { Reference } from '../Resource/Reference';

        

        /**
         * A patient's point-in-time set of recommendations (i.e. forecasting) according to a published schedule with optional supporting justification. 
         */
        export class ImmunizationRecommendation_Recommendation  {

            constructor() {
                this.ForecastStatus = new CodeableConcept();
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
                 * Vaccine(s) or vaccine group that pertain to the recommendation.
                 */
                VaccineCode? : Array<CodeableConcept>;
                

                /**
                 * The targeted disease for the recommendation.
                 */
                TargetDisease? : CodeableConcept;
                

                /**
                 * Vaccine(s) which should not be used to fulfill the recommendation.
                 */
                ContraindicatedVaccineCode? : Array<CodeableConcept>;
                

                /**
                 * Indicates the patient status with respect to the path to immunity for the target disease.
                 */
                ForecastStatus : CodeableConcept;
                

                /**
                 * The reason for the assigned forecast status.
                 */
                ForecastReason? : Array<CodeableConcept>;
                

                /**
                 * Vaccine date recommendations.  For example, earliest date to administer, latest date to administer, etc.
                 */
                DateCriterion? : Array<ImmunizationRecommendation_DateCriterion>;
                

                /**
                 * Contains the description about the protocol under which the vaccine was administered.
                 */
                Description? : String;
                

                /**
                 * Extensions for description
                 */
                _description? : Element;
                

                /**
                 * One possible path to achieve presumed immunity against a disease - within the context of an authority.
                 */
                Series? : String;
                

                /**
                 * Extensions for series
                 */
                _series? : Element;
                

                /**
                 * Nominal position of the recommended dose in a series (e.g. dose 2 is the next recommended dose).
                 */
                DoseNumberPositiveInt? : Number;
                

                /**
                 * Extensions for doseNumberPositiveInt
                 */
                _doseNumberPositiveInt? : Element;
                

                /**
                 * Nominal position of the recommended dose in a series (e.g. dose 2 is the next recommended dose).
                 */
                DoseNumberString? : String;
                

                /**
                 * Extensions for doseNumberString
                 */
                _doseNumberString? : Element;
                

                /**
                 * The recommended number of doses to achieve immunity.
                 */
                SeriesDosesPositiveInt? : Number;
                

                /**
                 * Extensions for seriesDosesPositiveInt
                 */
                _seriesDosesPositiveInt? : Element;
                

                /**
                 * The recommended number of doses to achieve immunity.
                 */
                SeriesDosesString? : String;
                

                /**
                 * Extensions for seriesDosesString
                 */
                _seriesDosesString? : Element;
                

                /**
                 * Immunization event history and/or evaluation that supports the status and recommendation.
                 */
                SupportingImmunization? : Array<Reference>;
                

                /**
                 * Patient Information that supports the status and recommendation.  This includes patient observations, adverse reactions and allergy/intolerance information.
                 */
                SupportingPatientInformation? : Array<Reference>;
                
        }
        