
import * as t from 'io-ts';
import {RTTI_Extension} from './RTTI_Extension';
import {RTTI_Reference} from './RTTI_Reference';
import {RTTI_Coding} from './RTTI_Coding';
import {RTTI_Element} from './RTTI_Element';
import {RTTI_AuditEvent_Detail} from './RTTI_AuditEvent_Detail';




        const mandatory = t.type({
           
        });
        

        const partial = t.partial({
            id: t.string,
extension: t.array(RTTI_Extension),
modifierExtension: t.array(RTTI_Extension),
what: RTTI_Reference,
type: RTTI_Coding,
role: RTTI_Coding,
lifecycle: RTTI_Coding,
securityLabel: t.array(RTTI_Coding),
name: t.string,
_name: RTTI_Element,
description: t.string,
_description: RTTI_Element,
query: t.string,
_query: RTTI_Element,
detail: t.array(RTTI_AuditEvent_Detail)
        });
        

        export var RTTI_AuditEvent_Entity:any = t.intersection([mandatory, partial]);
        

export type IAuditEvent_Entity = t.TypeOf<typeof RTTI_AuditEvent_Entity>;
        
        