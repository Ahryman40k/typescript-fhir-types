
import * as t from 'io-ts';
import {RTTI_Meta} from './RTTI_Meta';
import {RTTI_Element} from './RTTI_Element';
import {RTTI_Narrative} from './RTTI_Narrative';
import {ResourceList} from '../Union/ResourceList';
import {RTTI_Extension} from './RTTI_Extension';
import {RTTI_Identifier} from './RTTI_Identifier';
import {RTTI_Reference} from './RTTI_Reference';
import {RTTI_Timing} from './RTTI_Timing';
import {RTTI_Period} from './RTTI_Period';
import {RTTI_CodeableConcept} from './RTTI_CodeableConcept';
import {RTTI_Annotation} from './RTTI_Annotation';

export enum DeviceUseStatementStatusKind {
                active = 'active',
completed = 'completed',
enteredInError = 'enteredInError',
intended = 'intended',
stopped = 'stopped',
onHold = 'onHold'
            }
const DeviceUseStatementStatusKindKeys = t.keyof({
                [DeviceUseStatementStatusKind.active]: null,
[DeviceUseStatementStatusKind.completed]: null,
[DeviceUseStatementStatusKind.enteredInError]: null,
[DeviceUseStatementStatusKind.intended]: null,
[DeviceUseStatementStatusKind.stopped]: null,
[DeviceUseStatementStatusKind.onHold]: null
            });


        const mandatory = t.type({
           resourceType: t.string,
subject: RTTI_Reference,
device: RTTI_Reference
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
basedOn: t.array(RTTI_Reference),
status: DeviceUseStatementStatusKindKeys,
_status: RTTI_Element,
derivedFrom: t.array(RTTI_Reference),
timingTiming: RTTI_Timing,
timingPeriod: RTTI_Period,
timingDateTime: t.string,
_timingDateTime: RTTI_Element,
recordedOn: t.string,
_recordedOn: RTTI_Element,
source: RTTI_Reference,
reasonCode: t.array(RTTI_CodeableConcept),
reasonReference: t.array(RTTI_Reference),
bodySite: RTTI_CodeableConcept,
note: t.array(RTTI_Annotation)
        });
        

        export var RTTI_DeviceUseStatement:any = t.intersection([mandatory, partial]);
        

export type IDeviceUseStatement = t.TypeOf<typeof RTTI_DeviceUseStatement>;
        
        