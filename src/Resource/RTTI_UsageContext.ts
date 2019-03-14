
import * as t from 'io-ts';
import {RTTI_Extension} from './RTTI_Extension';
import {RTTI_Coding} from './RTTI_Coding';
import {RTTI_CodeableConcept} from './RTTI_CodeableConcept';
import {RTTI_Quantity} from './RTTI_Quantity';
import {RTTI_Range} from './RTTI_Range';




        const mandatory = t.type({
           code: RTTI_Coding
        });
        

        const partial = t.partial({
            id: t.string,
extension: t.array(RTTI_Extension),
valueCodeableConcept: RTTI_CodeableConcept,
valueQuantity: RTTI_Quantity,
valueRange: RTTI_Range
        });
        

        export var RTTI_UsageContext:any = t.intersection([mandatory, partial]);
        

export type IUsageContext = t.TypeOf<typeof RTTI_UsageContext>;
        
        