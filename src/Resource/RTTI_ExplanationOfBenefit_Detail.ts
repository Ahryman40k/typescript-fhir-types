
import * as t from 'io-ts';
import {RTTI_Extension, IExtension} from './RTTI_Extension';
import {RTTI_Element, IElement} from './RTTI_Element';
import {RTTI_CodeableConcept, ICodeableConcept} from './RTTI_CodeableConcept';
import {RTTI_Quantity, IQuantity} from './RTTI_Quantity';
import {RTTI_Money, IMoney} from './RTTI_Money';
import {RTTI_Reference, IReference} from './RTTI_Reference';

import {RTTI_ExplanationOfBenefit_Adjudication, IExplanationOfBenefit_Adjudication} from './RTTI_ExplanationOfBenefit_Adjudication';
import {RTTI_ExplanationOfBenefit_SubDetail, IExplanationOfBenefit_SubDetail} from './RTTI_ExplanationOfBenefit_SubDetail';




            export interface IExplanationOfBenefit_Detail {
                
                
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
                     * The type of revenue or cost center providing the product and/or service.
                     */
                    revenue? : ICodeableConcept;
                    

                    /**
                     * Health Care Service Type Codes to identify the classification of service or benefits.
                     */
                    category? : ICodeableConcept;
                    

                    /**
                     * If this is an actual service or product line, i.e. not a Group, then use code to indicate the Professional Service or Product supplied (e.g. CTP, HCPCS,USCLS,ICD10, NCPDP,DIN,ACHI,CCI). If a grouping item then use a group code to indicate the type of thing being grouped eg. 'glasses' or 'compound'.
                     */
                    billcode? : ICodeableConcept;
                    

                    /**
                     * Item typification or modifiers codes, e.g. for Oral whether the treatment is cosmetic or associated with TMJ, or for medical whether the treatment was outside the clinic or out of office hours.
                     */
                    modifier? : ICodeableConcept[];
                    

                    /**
                     * For programs which require reson codes for the inclusion, covering, of this billed item under the program or sub-program.
                     */
                    programCode? : ICodeableConcept[];
                    

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
                     * A list of note references to the notes provided below.
                     */
                    noteNumber? : number[]
                    

                    /**
                     * Extensions for noteNumber
                     */
                    _noteNumber? : IElement[];
                    

                    /**
                     * The adjudication results.
                     */
                    adjudication? : IExplanationOfBenefit_Adjudication[];
                    

                    /**
                     * Third-tier of goods and services.
                     */
                    subDetail? : IExplanationOfBenefit_SubDetail[];
                    
            }
        


        export const RTTI_ExplanationOfBenefit_Detail: t.Type<IExplanationOfBenefit_Detail> = t.recursion( 'IExplanationOfBenefit_Detail', () =>
                
        t.partial({
            id: t.string,
extension: t.array(RTTI_Extension),
modifierExtension: t.array(RTTI_Extension),
sequence: t.number,
_sequence: RTTI_Element,
revenue: RTTI_CodeableConcept,
category: RTTI_CodeableConcept,
billcode: RTTI_CodeableConcept,
modifier: t.array(RTTI_CodeableConcept),
programCode: t.array(RTTI_CodeableConcept),
quantity: RTTI_Quantity,
unitPrice: RTTI_Money,
factor: t.number,
_factor: RTTI_Element,
net: RTTI_Money,
udi: t.array(RTTI_Reference),
noteNumber: t.array(t.number),
_noteNumber: t.array(RTTI_Element),
adjudication: t.array(RTTI_ExplanationOfBenefit_Adjudication),
subDetail: t.array(RTTI_ExplanationOfBenefit_SubDetail)
        })
        
        );
        

        