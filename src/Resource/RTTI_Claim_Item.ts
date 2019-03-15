
import * as t from 'io-ts';
import {RTTI_Extension, IExtension} from './RTTI_Extension';
import {RTTI_Element, IElement} from './RTTI_Element';

import {RTTI_CodeableConcept, ICodeableConcept} from './RTTI_CodeableConcept';
import {RTTI_Period, IPeriod} from './RTTI_Period';
import {RTTI_Address, IAddress} from './RTTI_Address';
import {RTTI_Reference, IReference} from './RTTI_Reference';
import {RTTI_Quantity, IQuantity} from './RTTI_Quantity';
import {RTTI_Money, IMoney} from './RTTI_Money';
import {RTTI_Claim_Detail, IClaim_Detail} from './RTTI_Claim_Detail';




            export interface IClaim_Item {
                
                
                    /**
                     * Unique id for the element within a resource (for internal references). This may be any string value that does not contain spaces.
                     */
                    id? : string;
                    

                    /**
                     * May be used to represent additional information that is not part of the basic definition of the element. To make the use of extensions safe and manageable, there is a strict set of governance  applied to the definition and use of extensions. Though any implementer can define an extension, there is a set of requirements that SHALL be met as part of the definition of the extension.
                     */
                    extension? : IExtension[];
                    

                    /**
                     * May be used to represent additional information that is not part of the basic definition of the element and that modifies the understanding of the element in which it is contained. Usually modifier elements provide negation or qualification. To make the use of extensions safe and manageable, there is a strict set of governance applied to the definition and use of extensions. Though any implementer can define an extension, there is a set of requirements that SHALL be met as part of the definition of the extension. Applications processing a resource are required to check for modifier extensions.

Modifier extensions SHALL NOT change the meaning of any elements on Resource or DomainResource (including cannot change the meaning of modifierExtension itself).
                     */
                    modifierExtension? : IExtension[];
                    

                    /**
                     * A service line number.
                     */
                    sequence? : number;
                    

                    /**
                     * Extensions for sequence
                     */
                    _sequence? : IElement;
                    

                    /**
                     * CareTeam applicable for this service or product line.
                     */
                    careTeamSequence? : number[]
                    

                    /**
                     * Extensions for careTeamSequence
                     */
                    _careTeamSequence? : IElement[];
                    

                    /**
                     * Diagnosis applicable for this service or product line.
                     */
                    diagnosisSequence? : number[]
                    

                    /**
                     * Extensions for diagnosisSequence
                     */
                    _diagnosisSequence? : IElement[];
                    

                    /**
                     * Procedures applicable for this service or product line.
                     */
                    procedureSequence? : number[]
                    

                    /**
                     * Extensions for procedureSequence
                     */
                    _procedureSequence? : IElement[];
                    

                    /**
                     * Exceptions, special conditions and supporting information applicable for this service or product line.
                     */
                    informationSequence? : number[]
                    

                    /**
                     * Extensions for informationSequence
                     */
                    _informationSequence? : IElement[];
                    

                    /**
                     * The type of revenue or cost center providing the product and/or service.
                     */
                    revenue? : ICodeableConcept;
                    

                    /**
                     * Health Care Service Type Codes  to identify the classification of service or benefits.
                     */
                    category? : ICodeableConcept;
                    

                    /**
                     * If this is an actual service or product line, i.e. not a Group, then use code to indicate the Professional Service or Product supplied (e.g. CTP, HCPCS,USCLS,ICD10, NCPDP,DIN,RxNorm,ACHI,CCI). If a grouping item then use a group code to indicate the type of thing being grouped e.g. 'glasses' or 'compound'.
                     */
                    billcode? : ICodeableConcept;
                    

                    /**
                     * Item typification or modifiers codes, e.g. for Oral whether the treatment is cosmetic or associated with TMJ, or for medical whether the treatment was outside the clinic or out of office hours.
                     */
                    modifier? : ICodeableConcept[];
                    

                    /**
                     * For programs which require reason codes for the inclusion or covering of this billed item under the program or sub-program.
                     */
                    programCode? : ICodeableConcept[];
                    

                    /**
                     * The date or dates when the service or product was supplied, performed or completed.
                     */
                    servicedDate? : string;
                    

                    /**
                     * Extensions for servicedDate
                     */
                    _servicedDate? : IElement;
                    

                    /**
                     * The date or dates when the service or product was supplied, performed or completed.
                     */
                    servicedPeriod? : IPeriod;
                    

                    /**
                     * Where the service was provided.
                     */
                    locationCodeableConcept? : ICodeableConcept;
                    

                    /**
                     * Where the service was provided.
                     */
                    locationAddress? : IAddress;
                    

                    /**
                     * Where the service was provided.
                     */
                    locationReference? : IReference;
                    

                    /**
                     * The number of repetitions of a service or product.
                     */
                    quantity? : IQuantity;
                    

                    /**
                     * If the item is a node then this is the fee for the product or service, otherwise this is the total of the fees for the children of the group.
                     */
                    unitPrice? : IMoney;
                    

                    /**
                     * A real number that represents a multiplier used in determining the overall value of services delivered and/or goods received. The concept of a Factor allows for a discount or surcharge multiplier to be applied to a monetary amount.
                     */
                    factor? : number;
                    

                    /**
                     * Extensions for factor
                     */
                    _factor? : IElement;
                    

                    /**
                     * The quantity times the unit price for an additional service or product or charge. For example, the formula: unit Quantity * unit Price (Cost per Point) * factor Number  * points = net Amount. Quantity, factor and points are assumed to be 1 if not supplied.
                     */
                    net? : IMoney;
                    

                    /**
                     * List of Unique Device Identifiers associated with this line item.
                     */
                    udi? : IReference[];
                    

                    /**
                     * Physical service site on the patient (limb, tooth, etc.).
                     */
                    bodySite? : ICodeableConcept;
                    

                    /**
                     * A region or surface of the site, e.g. limb region or tooth surface(s).
                     */
                    subSite? : ICodeableConcept[];
                    

                    /**
                     * A billed item may include goods or services provided in multiple encounters.
                     */
                    encounter? : IReference[];
                    

                    /**
                     * Second tier of goods and services.
                     */
                    detail? : IClaim_Detail[];
                    
            }
        


        export const RTTI_Claim_Item: t.Type<IClaim_Item> = t.recursion( 'IClaim_Item', () =>
                
        t.partial({
            id: t.string,
extension: t.array(RTTI_Extension),
modifierExtension: t.array(RTTI_Extension),
sequence: t.number,
_sequence: RTTI_Element,
careTeamSequence: t.array(t.number),
_careTeamSequence: t.array(RTTI_Element),
diagnosisSequence: t.array(t.number),
_diagnosisSequence: t.array(RTTI_Element),
procedureSequence: t.array(t.number),
_procedureSequence: t.array(RTTI_Element),
informationSequence: t.array(t.number),
_informationSequence: t.array(RTTI_Element),
revenue: RTTI_CodeableConcept,
category: RTTI_CodeableConcept,
billcode: RTTI_CodeableConcept,
modifier: t.array(RTTI_CodeableConcept),
programCode: t.array(RTTI_CodeableConcept),
servicedDate: t.string,
_servicedDate: RTTI_Element,
servicedPeriod: RTTI_Period,
locationCodeableConcept: RTTI_CodeableConcept,
locationAddress: RTTI_Address,
locationReference: RTTI_Reference,
quantity: RTTI_Quantity,
unitPrice: RTTI_Money,
factor: t.number,
_factor: RTTI_Element,
net: RTTI_Money,
udi: t.array(RTTI_Reference),
bodySite: RTTI_CodeableConcept,
subSite: t.array(RTTI_CodeableConcept),
encounter: t.array(RTTI_Reference),
detail: t.array(RTTI_Claim_Detail)
        })
        
        );
        

        