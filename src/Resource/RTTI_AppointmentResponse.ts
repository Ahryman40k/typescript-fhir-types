
import * as t from 'io-ts';
import {RTTI_Meta} from './RTTI_Meta';
import {RTTI_Element} from './RTTI_Element';
import {RTTI_Narrative} from './RTTI_Narrative';
import {ResourceList} from '../Union/ResourceList';
import {RTTI_Extension} from './RTTI_Extension';
import {RTTI_Identifier} from './RTTI_Identifier';
import {RTTI_Reference} from './RTTI_Reference';
import {RTTI_CodeableConcept} from './RTTI_CodeableConcept';




        const mandatory = t.type({
           resourceType: t.string,
appointment: RTTI_Reference
        });
        

        const partial = t.partial({
            id: t.string,
meta: RTTI_Meta,
implicitRules: t.string,
_implicitRules: RTTI_Element,
language: t.string,
_language: RTTI_Element,
text: RTTI_Narrative,
contained: t.array(ResourceList),
extension: t.array(RTTI_Extension),
modifierExtension: t.array(RTTI_Extension),
identifier: t.array(RTTI_Identifier),
start: t.string,
_start: RTTI_Element,
end: t.string,
_end: RTTI_Element,
participantType: t.array(RTTI_CodeableConcept),
actor: RTTI_Reference,
participantStatus: t.string,
_participantStatus: RTTI_Element,
comment: t.string,
_comment: RTTI_Element
        });
        

        export var RTTI_AppointmentResponse:any = t.intersection([mandatory, partial]);
        

export type IAppointmentResponse = t.TypeOf<typeof RTTI_AppointmentResponse>;
        
        