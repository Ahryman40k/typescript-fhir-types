
        import { CodeableConcept } from '../Resource/CodeableConcept';
import { Dosage_DoseAndRate } from '../Resource/Dosage_DoseAndRate';
import { Element } from '../Resource/Element';
import { Extension } from '../Resource/Extension';
import { Integer } from '../Scalar/Integer';
import { Quantity } from '../Resource/Quantity';
import { Ratio } from '../Resource/Ratio';
import { Timing } from '../Resource/Timing';

        

        /**
         * Indicates how the medication is/was taken or should be taken by the patient. 
         */
        export class Dosage  {

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
                 * Indicates the order in which the dosage instructions should be applied or interpreted.
                 */
                Sequence? : Integer;
                

                /**
                 * Extensions for sequence
                 */
                _sequence? : Element;
                

                /**
                 * Free text dosage instructions e.g. SIG.
                 */
                Text? : String;
                

                /**
                 * Extensions for text
                 */
                _text? : Element;
                

                /**
                 * Supplemental instructions to the patient on how to take the medication  (e.g. "with meals" or"take half to one hour before food") or warnings for the patient about the medication (e.g. "may cause drowsiness" or "avoid exposure of skin to direct sunlight or sunlamps").
                 */
                AdditionalInstruction? : Array<CodeableConcept>;
                

                /**
                 * Instructions in terms that are understood by the patient or consumer.
                 */
                PatientInstruction? : String;
                

                /**
                 * Extensions for patientInstruction
                 */
                _patientInstruction? : Element;
                

                /**
                 * When medication should be administered.
                 */
                Timing? : Timing;
                

                /**
                 * Indicates whether the Medication is only taken when needed within a specific dosing schedule (Boolean option), or it indicates the precondition for taking the Medication (CodeableConcept).
                 */
                AsNeededBoolean? : Boolean;
                

                /**
                 * Extensions for asNeededBoolean
                 */
                _asNeededBoolean? : Element;
                

                /**
                 * Indicates whether the Medication is only taken when needed within a specific dosing schedule (Boolean option), or it indicates the precondition for taking the Medication (CodeableConcept).
                 */
                AsNeededCodeableConcept? : CodeableConcept;
                

                /**
                 * Body site to administer to.
                 */
                Site? : CodeableConcept;
                

                /**
                 * How drug should enter body.
                 */
                Route? : CodeableConcept;
                

                /**
                 * Technique for administering medication.
                 */
                Method? : CodeableConcept;
                

                /**
                 * The amount of medication administered.
                 */
                DoseAndRate? : Array<Dosage_DoseAndRate>;
                

                /**
                 * Upper limit on medication per unit of time.
                 */
                MaxDosePerPeriod? : Ratio;
                

                /**
                 * Upper limit on medication per administration.
                 */
                MaxDosePerAdministration? : Quantity;
                

                /**
                 * Upper limit on medication per lifetime of the patient.
                 */
                MaxDosePerLifetime? : Quantity;
                
        }
        