
import * as t from 'io-ts';
import {RTTI_Extension, IExtension} from './RTTI_Extension';
import {RTTI_CodeableConcept, ICodeableConcept} from './RTTI_CodeableConcept';
import {RTTI_Quantity, IQuantity} from './RTTI_Quantity';
import {RTTI_Money, IMoney} from './RTTI_Money';
import {RTTI_Element, IElement} from './RTTI_Element';

import {RTTI_ClaimResponse_Adjudication, IClaimResponse_Adjudication} from './RTTI_ClaimResponse_Adjudication';
import {RTTI_ClaimResponse_SubDetail1, IClaimResponse_SubDetail1} from './RTTI_ClaimResponse_SubDetail1';




            export interface IClaimResponse_Detail1 {
                
                
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
                     * A code to indicate the Professional Service or Product supplied.
                     */
                    billcode? : ICodeableConcept;
                    

                    /**
                     * Item typification or modifiers codes, e.g. for Oral whether the treatment is cosmetic or associated with TMJ, or for medical whether the treatment was outside the clinic or out of office hours.
                     */
                    modifier? : ICodeableConcept[];
                    

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
                    adjudication? : IClaimResponse_Adjudication[];
                    

                    /**
                     * The third-tier service adjudications for payor added services.
                     */
                    subDetail? : IClaimResponse_SubDetail1[];
                    
            }
        


        export const RTTI_ClaimResponse_Detail1: t.Type<IClaimResponse_Detail1> = t.recursion( 'IClaimResponse_Detail1', () =>
                
        t.partial({
            id: t.string,
extension: t.array(RTTI_Extension),
modifierExtension: t.array(RTTI_Extension),
billcode: RTTI_CodeableConcept,
modifier: t.array(RTTI_CodeableConcept),
quantity: RTTI_Quantity,
unitPrice: RTTI_Money,
factor: t.number,
_factor: RTTI_Element,
net: RTTI_Money,
noteNumber: t.array(t.number),
_noteNumber: t.array(RTTI_Element),
adjudication: t.array(RTTI_ClaimResponse_Adjudication),
subDetail: t.array(RTTI_ClaimResponse_SubDetail1)
        })
        
        );
        

        