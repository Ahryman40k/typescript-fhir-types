
import * as t from 'io-ts';
import {RTTI_Extension} from './RTTI_Extension';
import {RTTI_Element} from './RTTI_Element';
import {RTTI_Reference} from './RTTI_Reference';
import {RTTI_CodeableConcept} from './RTTI_CodeableConcept';
import {RTTI_Invoice_PriceComponent} from './RTTI_Invoice_PriceComponent';




        const mandatory = t.type({
           
        });
        

        const partial = t.partial({
            id: t.string,
extension: t.array(RTTI_Extension),
modifierExtension: t.array(RTTI_Extension),
sequence: t.number,
_sequence: RTTI_Element,
chargeItemReference: RTTI_Reference,
chargeItemCodeableConcept: RTTI_CodeableConcept,
priceComponent: t.array(RTTI_Invoice_PriceComponent)
        });
        

        export var RTTI_Invoice_LineItem:any = t.intersection([mandatory, partial]);
        

export type IInvoice_LineItem = t.TypeOf<typeof RTTI_Invoice_LineItem>;
        
        