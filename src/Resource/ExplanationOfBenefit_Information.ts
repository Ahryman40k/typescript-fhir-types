
        import { Attachment } from '../Resource/Attachment';
import { CodeableConcept } from '../Resource/CodeableConcept';
import { Coding } from '../Resource/Coding';
import { Element } from '../Resource/Element';
import { Extension } from '../Resource/Extension';
import { Period } from '../Resource/Period';
import { PositiveInt } from '../Scalar/PositiveInt';
import { Quantity } from '../Resource/Quantity';
import { Reference } from '../Resource/Reference';

        

        /**
         * This resource provides: the claim details; adjudication details from the processing of a Claim; and optionally account balance information, for informing the subscriber of the benefits provided. 
         */
        export class ExplanationOfBenefit_Information  {

            constructor() {
                this.Category = new CodeableConcept();
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
                 * Sequence of the information element which serves to provide a link.
                 */
                Sequence? : PositiveInt;
                

                /**
                 * Extensions for sequence
                 */
                _sequence? : Element;
                

                /**
                 * The general class of the information supplied: information; exception; accident, employment; onset, etc.
                 */
                Category : CodeableConcept;
                

                /**
                 * System and code pertaining to the specific information regarding special conditions relating to the setting, treatment or patient  for which care is sought which may influence the adjudication.
                 */
                Code? : CodeableConcept;
                

                /**
                 * The date when or period to which this information refers.
                 */
                TimingDate? : String;
                

                /**
                 * Extensions for timingDate
                 */
                _timingDate? : Element;
                

                /**
                 * The date when or period to which this information refers.
                 */
                TimingPeriod? : Period;
                

                /**
                 * Additional data or information such as resources, documents, images etc. including references to the data or the actual inclusion of the data.
                 */
                ValueBoolean? : Boolean;
                

                /**
                 * Extensions for valueBoolean
                 */
                _valueBoolean? : Element;
                

                /**
                 * Additional data or information such as resources, documents, images etc. including references to the data or the actual inclusion of the data.
                 */
                ValueString? : String;
                

                /**
                 * Extensions for valueString
                 */
                _valueString? : Element;
                

                /**
                 * Additional data or information such as resources, documents, images etc. including references to the data or the actual inclusion of the data.
                 */
                ValueQuantity? : Quantity;
                

                /**
                 * Additional data or information such as resources, documents, images etc. including references to the data or the actual inclusion of the data.
                 */
                ValueAttachment? : Attachment;
                

                /**
                 * Additional data or information such as resources, documents, images etc. including references to the data or the actual inclusion of the data.
                 */
                ValueReference? : Reference;
                

                /**
                 * For example, provides the reason for: the additional stay, or missing tooth or any other situation where a reason code is required in addition to the content.
                 */
                Reason? : Coding;
                
        }
        