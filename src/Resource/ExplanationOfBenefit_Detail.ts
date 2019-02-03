
        import { CodeableConcept } from '../Resource/CodeableConcept';
import { Decimal } from '../Scalar/Decimal';
import { Element } from '../Resource/Element';
import { ExplanationOfBenefit_Adjudication } from '../Resource/ExplanationOfBenefit_Adjudication';
import { ExplanationOfBenefit_SubDetail } from '../Resource/ExplanationOfBenefit_SubDetail';
import { Extension } from '../Resource/Extension';
import { Money } from '../Resource/Money';
import { PositiveInt } from '../Scalar/PositiveInt';
import { Quantity } from '../Resource/Quantity';
import { Reference } from '../Resource/Reference';

        

        /**
         * This resource provides: the claim details; adjudication details from the processing of a Claim; and optionally account balance information, for informing the subscriber of the benefits provided. 
         */
        export class ExplanationOfBenefit_Detail  {

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
                 * A service line number.
                 */
                Sequence? : PositiveInt;
                

                /**
                 * Extensions for sequence
                 */
                _sequence? : Element;
                

                /**
                 * The type of revenue or cost center providing the product and/or service.
                 */
                Revenue? : CodeableConcept;
                

                /**
                 * Health Care Service Type Codes to identify the classification of service or benefits.
                 */
                Category? : CodeableConcept;
                

                /**
                 * If this is an actual service or product line, i.e. not a Group, then use code to indicate the Professional Service or Product supplied (e.g. CTP, HCPCS,USCLS,ICD10, NCPDP,DIN,ACHI,CCI). If a grouping item then use a group code to indicate the type of thing being grouped eg. 'glasses' or 'compound'.
                 */
                Billcode? : CodeableConcept;
                

                /**
                 * Item typification or modifiers codes, e.g. for Oral whether the treatment is cosmetic or associated with TMJ, or for medical whether the treatment was outside the clinic or out of office hours.
                 */
                Modifier? : Array<CodeableConcept>;
                

                /**
                 * For programs which require reson codes for the inclusion, covering, of this billed item under the program or sub-program.
                 */
                ProgramCode? : Array<CodeableConcept>;
                

                /**
                 * The number of repetitions of a service or product.
                 */
                Quantity? : Quantity;
                

                /**
                 * If the item is a node then this is the fee for the product or service, otherwise this is the total of the fees for the children of the group.
                 */
                UnitPrice? : Money;
                

                /**
                 * A real number that represents a multiplier used in determining the overall value of services delivered and/or goods received. The concept of a Factor allows for a discount or surcharge multiplier to be applied to a monetary amount.
                 */
                Factor? : Decimal;
                

                /**
                 * Extensions for factor
                 */
                _factor? : Element;
                

                /**
                 * The quantity times the unit price for an additional service or product or charge. For example, the formula: unit Quantity * unit Price (Cost per Point) * factor Number  * points = net Amount. Quantity, factor and points are assumed to be 1 if not supplied.
                 */
                Net? : Money;
                

                /**
                 * List of Unique Device Identifiers associated with this line item.
                 */
                Udi? : Array<Reference>;
                

                /**
                 * A list of note references to the notes provided below.
                 */
                NoteNumber? : Array<PositiveInt>;
                

                /**
                 * Extensions for noteNumber
                 */
                _noteNumber? : Array<Element>;
                

                /**
                 * The adjudication results.
                 */
                Adjudication? : Array<ExplanationOfBenefit_Adjudication>;
                

                /**
                 * Third-tier of goods and services.
                 */
                SubDetail? : Array<ExplanationOfBenefit_SubDetail>;
                
        }
        