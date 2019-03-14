
import * as t from 'io-ts';
import {RTTI_Extension} from './RTTI_Extension';
import {RTTI_Element} from './RTTI_Element';




        const mandatory = t.type({
           
        });
        

        const partial = t.partial({
            id: t.string,
extension: t.array(RTTI_Extension),
modifierExtension: t.array(RTTI_Extension),
type: t.string,
_type: RTTI_Element,
valueString: t.string,
_valueString: RTTI_Element,
valueBase64Binary: t.string,
_valueBase64Binary: RTTI_Element
        });
        

        export var RTTI_AuditEvent_Detail:any = t.intersection([mandatory, partial]);
        

export type IAuditEvent_Detail = t.TypeOf<typeof RTTI_AuditEvent_Detail>;
        
        