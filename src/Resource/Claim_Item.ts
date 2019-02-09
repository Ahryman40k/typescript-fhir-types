
        import { Address } from '../Resource/Address';
import { Claim_Detail } from '../Resource/Claim_Detail';
import { CodeableConcept } from '../Resource/CodeableConcept';
import { Decimal } from '../Scalar/Decimal';
import { Element } from '../Resource/Element';
import { Extension } from '../Resource/Extension';
import { Money } from '../Resource/Money';
import { Period } from '../Resource/Period';
import { PositiveInt } from '../Scalar/PositiveInt';
import { Quantity } from '../Resource/Quantity';
import { Reference } from '../Resource/Reference';

        

        /**
         * A provider issued list of services and products provided, or to be provided, to a patient which is provided to an insurer for payment recovery. 
         */
        export class Claim_Item  {

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
                 * A service line number.
                 */
                sequence? : PositiveInt;
                

                /**
                 * Extensions for sequence
                 */
                _sequence? : Element;
                

                /**
                 * CareTeam applicable for this service or product line.
                 */
                careTeamSequence? : PositiveInt[];
                

                /**
                 * Extensions for careTeamSequence
                 */
                _careTeamSequence? : Element[];
                

                /**
                 * Diagnosis applicable for this service or product line.
                 */
                diagnosisSequence? : PositiveInt[];
                

                /**
                 * Extensions for diagnosisSequence
                 */
                _diagnosisSequence? : Element[];
                

                /**
                 * Procedures applicable for this service or product line.
                 */
                procedureSequence? : PositiveInt[];
                

                /**
                 * Extensions for procedureSequence
                 */
                _procedureSequence? : Element[];
                

                /**
                 * Exceptions, special conditions and supporting information applicable for this service or product line.
                 */
                informationSequence? : PositiveInt[];
                

                /**
                 * Extensions for informationSequence
                 */
                _informationSequence? : Element[];
                

                /**
                 * The type of revenue or cost center providing the product and/or service.
                 */
                revenue? : CodeableConcept;
                

                /**
                 * Health Care Service Type Codes  to identify the classification of service or benefits.
                 */
                category? : CodeableConcept;
                

                /**
                 * If this is an actual service or product line, i.e. not a Group, then use code to indicate the Professional Service or Product supplied (e.g. CTP, HCPCS,USCLS,ICD10, NCPDP,DIN,RxNorm,ACHI,CCI). If a grouping item then use a group code to indicate the type of thing being grouped e.g. 'glasses' or 'compound'.
                 */
                billcode? : CodeableConcept;
                

                /**
                 * Item typification or modifiers codes, e.g. for Oral whether the treatment is cosmetic or associated with TMJ, or for medical whether the treatment was outside the clinic or out of office hours.
                 */
                modifier? : CodeableConcept[];
                

                /**
                 * For programs which require reason codes for the inclusion or covering of this billed item under the program or sub-program.
                 */
                programCode? : CodeableConcept[];
                

                /**
                 * The date or dates when the service or product was supplied, performed or completed.
                 */
                servicedDate? : string;
                

                /**
                 * Extensions for servicedDate
                 */
                _servicedDate? : Element;
                

                /**
                 * The date or dates when the service or product was supplied, performed or completed.
                 */
                servicedPeriod? : Period;
                

                /**
                 * Where the service was provided.
                 */
                locationCodeableConcept? : CodeableConcept;
                

                /**
                 * Where the service was provided.
                 */
                locationAddress? : Address;
                

                /**
                 * Where the service was provided.
                 */
                locationReference? : Reference;
                

                /**
                 * The number of repetitions of a service or product.
                 */
                quantity? : Quantity;
                

                /**
                 * If the item is a node then this is the fee for the product or service, otherwise this is the total of the fees for the children of the group.
                 */
                unitPrice? : Money;
                

                /**
                 * A real number that represents a multiplier used in determining the overall value of services delivered and/or goods received. The concept of a Factor allows for a discount or surcharge multiplier to be applied to a monetary amount.
                 */
                factor? : Decimal;
                

                /**
                 * Extensions for factor
                 */
                _factor? : Element;
                

                /**
                 * The quantity times the unit price for an additional service or product or charge. For example, the formula: unit Quantity * unit Price (Cost per Point) * factor Number  * points = net Amount. Quantity, factor and points are assumed to be 1 if not supplied.
                 */
                net? : Money;
                

                /**
                 * List of Unique Device Identifiers associated with this line item.
                 */
                udi? : Reference[];
                

                /**
                 * Physical service site on the patient (limb, tooth, etc.).
                 */
                bodySite? : CodeableConcept;
                

                /**
                 * A region or surface of the site, e.g. limb region or tooth surface(s).
                 */
                subSite? : CodeableConcept[];
                

                /**
                 * A billed item may include goods or services provided in multiple encounters.
                 */
                encounter? : Reference[];
                

                /**
                 * Second tier of goods and services.
                 */
                detail? : Claim_Detail[];
                
        }
        