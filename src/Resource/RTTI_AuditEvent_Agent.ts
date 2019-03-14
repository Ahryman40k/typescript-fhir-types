
import * as t from 'io-ts';
import {RTTI_Extension} from './RTTI_Extension';
import {RTTI_CodeableConcept} from './RTTI_CodeableConcept';
import {RTTI_Reference} from './RTTI_Reference';
import {RTTI_Element} from './RTTI_Element';
import {RTTI_Coding} from './RTTI_Coding';
import {RTTI_AuditEvent_Network} from './RTTI_AuditEvent_Network';




        const mandatory = t.type({
           
        });
        

        const partial = t.partial({
            id: t.string,
extension: t.array(RTTI_Extension),
modifierExtension: t.array(RTTI_Extension),
type: RTTI_CodeableConcept,
role: t.array(RTTI_CodeableConcept),
who: RTTI_Reference,
altId: t.string,
_altId: RTTI_Element,
name: t.string,
_name: RTTI_Element,
requestor: t.boolean,
_requestor: RTTI_Element,
location: RTTI_Reference,
policy: t.array(t.string),
_policy: t.array(RTTI_Element),
media: RTTI_Coding,
network: RTTI_AuditEvent_Network,
purposeOfUse: t.array(RTTI_CodeableConcept)
        });
        

        export var RTTI_AuditEvent_Agent:any = t.intersection([mandatory, partial]);
        

export type IAuditEvent_Agent = t.TypeOf<typeof RTTI_AuditEvent_Agent>;
        
        