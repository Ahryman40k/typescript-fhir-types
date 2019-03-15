
import * as t from 'io-ts';
import {RTTI_Extension, IExtension} from './RTTI_Extension';
import {RTTI_Element, IElement} from './RTTI_Element';
import {RTTI_CodeableConcept, ICodeableConcept} from './RTTI_CodeableConcept';
import {RTTI_Money, IMoney} from './RTTI_Money';

export enum Invoice_PriceComponentTypeKind {
                base = 'base',
surcharge = 'surcharge',
deduction = 'deduction',
discount = 'discount',
tax = 'tax',
informational = 'informational'
            }
const Invoice_PriceComponentTypeKindKeys = t.keyof({
                [Invoice_PriceComponentTypeKind.base]: null,
[Invoice_PriceComponentTypeKind.surcharge]: null,
[Invoice_PriceComponentTypeKind.deduction]: null,
[Invoice_PriceComponentTypeKind.discount]: null,
[Invoice_PriceComponentTypeKind.tax]: null,
[Invoice_PriceComponentTypeKind.informational]: null
            });


            export interface IInvoice_PriceComponent {
                
                
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
                     * This code identifies the type of the component.
                     */
                    type? : Invoice_PriceComponentTypeKind;
                    

                    /**
                     * Extensions for type
                     */
                    _type? : IElement;
                    

                    /**
                     * A code that identifies the component. Codes may be used to differentiate between kinds of taxes, surcharges, discounts etc.
                     */
                    code? : ICodeableConcept;
                    

                    /**
                     * The factor that has been applied on the base price for calculating this component.
                     */
                    factor? : number;
                    

                    /**
                     * Extensions for factor
                     */
                    _factor? : IElement;
                    

                    /**
                     * The amount calculated for this component.
                     */
                    amount? : IMoney;
                    
            }
        


        export const RTTI_Invoice_PriceComponent: t.Type<IInvoice_PriceComponent> = t.recursion( 'IInvoice_PriceComponent', () =>
                
        t.partial({
            id: t.string,
extension: t.array(RTTI_Extension),
modifierExtension: t.array(RTTI_Extension),
type: Invoice_PriceComponentTypeKindKeys,
_type: RTTI_Element,
code: RTTI_CodeableConcept,
factor: t.number,
_factor: RTTI_Element,
amount: RTTI_Money
        })
        
        );
        

        