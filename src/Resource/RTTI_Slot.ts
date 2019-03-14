
import * as t from 'io-ts';
import {RTTI_Meta} from './RTTI_Meta';
import {RTTI_Element} from './RTTI_Element';
import {RTTI_Narrative} from './RTTI_Narrative';
import {ResourceList} from '../Union/ResourceList';
import {RTTI_Extension} from './RTTI_Extension';
import {RTTI_Identifier} from './RTTI_Identifier';
import {RTTI_CodeableConcept} from './RTTI_CodeableConcept';
import {RTTI_Reference} from './RTTI_Reference';

export enum SlotStatusKind {
                busy = 'busy',
free = 'free',
busyUnavailable = 'busyUnavailable',
busyTentative = 'busyTentative',
enteredInError = 'enteredInError'
            }
const SlotStatusKindKeys = t.keyof({
                [SlotStatusKind.busy]: null,
[SlotStatusKind.free]: null,
[SlotStatusKind.busyUnavailable]: null,
[SlotStatusKind.busyTentative]: null,
[SlotStatusKind.enteredInError]: null
            });


        const mandatory = t.type({
           resourceType: t.string,
schedule: RTTI_Reference
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
serviceCategory: t.array(RTTI_CodeableConcept),
serviceType: t.array(RTTI_CodeableConcept),
specialty: t.array(RTTI_CodeableConcept),
appointmentType: RTTI_CodeableConcept,
status: SlotStatusKindKeys,
_status: RTTI_Element,
start: t.string,
_start: RTTI_Element,
end: t.string,
_end: RTTI_Element,
overbooked: t.boolean,
_overbooked: RTTI_Element,
comment: t.string,
_comment: RTTI_Element
        });
        

        export var RTTI_Slot:any = t.intersection([mandatory, partial]);
        

export type ISlot = t.TypeOf<typeof RTTI_Slot>;
        
        