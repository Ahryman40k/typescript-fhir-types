
import * as t from 'io-ts';
import {RTTI_Extension, IExtension} from './RTTI_Extension';
import {RTTI_Quantity, IQuantity} from './RTTI_Quantity';
import {RTTI_Range, IRange} from './RTTI_Range';
import {RTTI_Element, IElement} from './RTTI_Element';
import {RTTI_CodeableConcept, ICodeableConcept} from './RTTI_CodeableConcept';
import {RTTI_SubstanceAmount_ReferenceRange, ISubstanceAmount_ReferenceRange} from './RTTI_SubstanceAmount_ReferenceRange';




            export interface ISubstanceAmount {
                
                
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
                     * Used to capture quantitative values for a variety of elements. If only limits are given, the arithmetic mean would be the average. If only a single definite value for a given element is given, it would be captured in this field.
                     */
                    amountQuantity? : IQuantity;
                    

                    /**
                     * Used to capture quantitative values for a variety of elements. If only limits are given, the arithmetic mean would be the average. If only a single definite value for a given element is given, it would be captured in this field.
                     */
                    amountRange? : IRange;
                    

                    /**
                     * Used to capture quantitative values for a variety of elements. If only limits are given, the arithmetic mean would be the average. If only a single definite value for a given element is given, it would be captured in this field.
                     */
                    amountString? : string;
                    

                    /**
                     * Extensions for amountString
                     */
                    _amountString? : IElement;
                    

                    /**
                     * Most elements that require a quantitative value will also have a field called amount type. Amount type should always be specified because the actual value of the amount is often dependent on it. EXAMPLE: In capturing the actual relative amounts of substances or molecular fragments it is essential to indicate whether the amount refers to a mole ratio or weight ratio. For any given element an effort should be made to use same the amount type for all related definitional elements.
                     */
                    amountType? : ICodeableConcept;
                    

                    /**
                     * A textual comment on a numeric value.
                     */
                    amountText? : string;
                    

                    /**
                     * Extensions for amountText
                     */
                    _amountText? : IElement;
                    

                    /**
                     * Reference range of possible or expected values.
                     */
                    referenceRange? : ISubstanceAmount_ReferenceRange;
                    
            }
        


        export const RTTI_SubstanceAmount: t.Type<ISubstanceAmount> = t.recursion( 'ISubstanceAmount', () =>
                
        t.partial({
            id: t.string,
extension: t.array(RTTI_Extension),
modifierExtension: t.array(RTTI_Extension),
amountQuantity: RTTI_Quantity,
amountRange: RTTI_Range,
amountString: t.string,
_amountString: RTTI_Element,
amountType: RTTI_CodeableConcept,
amountText: t.string,
_amountText: RTTI_Element,
referenceRange: RTTI_SubstanceAmount_ReferenceRange
        })
        
        );
        

        