
import * as t from 'io-ts';
import {RTTI_Extension} from './RTTI_Extension';
import {RTTI_Element} from './RTTI_Element';
import {RTTI_CodeableConcept} from './RTTI_CodeableConcept';
import {RTTI_Money} from './RTTI_Money';

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


        const mandatory = t.type({
           
        });
        

        const partial = t.partial({
            id: t.string,
extension: t.array(RTTI_Extension),
modifierExtension: t.array(RTTI_Extension),
type: Invoice_PriceComponentTypeKindKeys,
_type: RTTI_Element,
code: RTTI_CodeableConcept,
factor: t.number,
_factor: RTTI_Element,
amount: RTTI_Money
        });
        

        export var RTTI_Invoice_PriceComponent:any = t.intersection([mandatory, partial]);
        

export type IInvoice_PriceComponent = t.TypeOf<typeof RTTI_Invoice_PriceComponent>;
        
        