
import * as t from 'io-ts';
import {RTTI_Extension} from './RTTI_Extension';
import {RTTI_CodeableConcept} from './RTTI_CodeableConcept';
import {RTTI_Element} from './RTTI_Element';
import {RTTI_Reference} from './RTTI_Reference';




        const mandatory = t.type({
           
        });
        

        const partial = t.partial({
            id: t.string,
extension: t.array(RTTI_Extension),
modifierExtension: t.array(RTTI_Extension),
assessment: RTTI_CodeableConcept,
productRelatedness: t.string,
_productRelatedness: RTTI_Element,
author: RTTI_Reference,
method: RTTI_CodeableConcept
        });
        

        export var RTTI_AdverseEvent_Causality:any = t.intersection([mandatory, partial]);
        

export type IAdverseEvent_Causality = t.TypeOf<typeof RTTI_AdverseEvent_Causality>;
        
        