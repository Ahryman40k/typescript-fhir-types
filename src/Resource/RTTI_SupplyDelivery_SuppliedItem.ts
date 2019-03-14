
import * as t from 'io-ts';
import {RTTI_Extension} from './RTTI_Extension';
import {RTTI_Quantity} from './RTTI_Quantity';
import {RTTI_CodeableConcept} from './RTTI_CodeableConcept';
import {RTTI_Reference} from './RTTI_Reference';




        const mandatory = t.type({
           
        });
        

        const partial = t.partial({
            id: t.string,
extension: t.array(RTTI_Extension),
modifierExtension: t.array(RTTI_Extension),
quantity: RTTI_Quantity,
itemCodeableConcept: RTTI_CodeableConcept,
itemReference: RTTI_Reference
        });
        

        export var RTTI_SupplyDelivery_SuppliedItem:any = t.intersection([mandatory, partial]);
        

export type ISupplyDelivery_SuppliedItem = t.TypeOf<typeof RTTI_SupplyDelivery_SuppliedItem>;
        
        