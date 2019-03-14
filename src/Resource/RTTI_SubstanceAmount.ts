
import * as t from 'io-ts';
import {RTTI_Extension} from './RTTI_Extension';
import {RTTI_Quantity} from './RTTI_Quantity';
import {RTTI_Range} from './RTTI_Range';
import {RTTI_Element} from './RTTI_Element';
import {RTTI_CodeableConcept} from './RTTI_CodeableConcept';
import {RTTI_SubstanceAmount_ReferenceRange} from './RTTI_SubstanceAmount_ReferenceRange';




        const mandatory = t.type({
           
        });
        

        const partial = t.partial({
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
        });
        

        export var RTTI_SubstanceAmount:any = t.intersection([mandatory, partial]);
        

export type ISubstanceAmount = t.TypeOf<typeof RTTI_SubstanceAmount>;
        
        