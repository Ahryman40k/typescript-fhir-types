
import * as t from 'io-ts';
import {RTTI_Extension} from './RTTI_Extension';
import {RTTI_Reference} from './RTTI_Reference';
import {RTTI_AdverseEvent_Causality} from './RTTI_AdverseEvent_Causality';




        const mandatory = t.type({
           instance: RTTI_Reference
        });
        

        const partial = t.partial({
            id: t.string,
extension: t.array(RTTI_Extension),
modifierExtension: t.array(RTTI_Extension),
causality: t.array(RTTI_AdverseEvent_Causality)
        });
        

        export var RTTI_AdverseEvent_SuspectEntity:any = t.intersection([mandatory, partial]);
        

export type IAdverseEvent_SuspectEntity = t.TypeOf<typeof RTTI_AdverseEvent_SuspectEntity>;
        
        