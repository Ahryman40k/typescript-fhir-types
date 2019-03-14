
import * as t from 'io-ts';
import {RTTI_Extension} from './RTTI_Extension';
import {RTTI_Element} from './RTTI_Element';
import {RTTI_Reference} from './RTTI_Reference';
import {RTTI_Coding} from './RTTI_Coding';




        const mandatory = t.type({
           observer: RTTI_Reference
        });
        

        const partial = t.partial({
            id: t.string,
extension: t.array(RTTI_Extension),
modifierExtension: t.array(RTTI_Extension),
site: t.string,
_site: RTTI_Element,
type: t.array(RTTI_Coding)
        });
        

        export var RTTI_AuditEvent_Source:any = t.intersection([mandatory, partial]);
        

export type IAuditEvent_Source = t.TypeOf<typeof RTTI_AuditEvent_Source>;
        
        