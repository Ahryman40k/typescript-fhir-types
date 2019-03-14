
import * as t from 'io-ts';
import {RTTI_Extension} from './RTTI_Extension';
import {RTTI_Element} from './RTTI_Element';
import {RTTI_CodeableConcept} from './RTTI_CodeableConcept';
import {RTTI_Money} from './RTTI_Money';




        const mandatory = t.type({
           
        });
        

        const partial = t.partial({
            id: t.string,
extension: t.array(RTTI_Extension),
modifierExtension: t.array(RTTI_Extension),
type: t.string,
_type: RTTI_Element,
code: RTTI_CodeableConcept,
factor: t.number,
_factor: RTTI_Element,
amount: RTTI_Money
        });
        

        export var RTTI_ChargeItemDefinition_PriceComponent:any = t.intersection([mandatory, partial]);
        

export type IChargeItemDefinition_PriceComponent = t.TypeOf<typeof RTTI_ChargeItemDefinition_PriceComponent>;
        
        