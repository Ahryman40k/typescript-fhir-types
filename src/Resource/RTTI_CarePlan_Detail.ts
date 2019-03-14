
import * as t from 'io-ts';
import {RTTI_Extension} from './RTTI_Extension';
import {RTTI_Element} from './RTTI_Element';


import {RTTI_CodeableConcept} from './RTTI_CodeableConcept';
import {RTTI_Reference} from './RTTI_Reference';
import {RTTI_Timing} from './RTTI_Timing';
import {RTTI_Period} from './RTTI_Period';
import {RTTI_Quantity} from './RTTI_Quantity';

export enum CarePlan_DetailStatusKind {
                notStarted = 'notStarted',
scheduled = 'scheduled',
inProgress = 'inProgress',
onHold = 'onHold',
completed = 'completed',
cancelled = 'cancelled',
stopped = 'stopped',
unknown = 'unknown',
enteredInError = 'enteredInError'
            }
const CarePlan_DetailStatusKindKeys = t.keyof({
                [CarePlan_DetailStatusKind.notStarted]: null,
[CarePlan_DetailStatusKind.scheduled]: null,
[CarePlan_DetailStatusKind.inProgress]: null,
[CarePlan_DetailStatusKind.onHold]: null,
[CarePlan_DetailStatusKind.completed]: null,
[CarePlan_DetailStatusKind.cancelled]: null,
[CarePlan_DetailStatusKind.stopped]: null,
[CarePlan_DetailStatusKind.unknown]: null,
[CarePlan_DetailStatusKind.enteredInError]: null
            });


        const mandatory = t.type({
           
        });
        

        const partial = t.partial({
            id: t.string,
extension: t.array(RTTI_Extension),
modifierExtension: t.array(RTTI_Extension),
kind: t.string,
_kind: RTTI_Element,
instantiatesCanonical: t.array(t.string),
instantiatesUri: t.array(t.string),
_instantiatesUri: t.array(RTTI_Element),
code: RTTI_CodeableConcept,
reasonCode: t.array(RTTI_CodeableConcept),
reasonReference: t.array(RTTI_Reference),
goal: t.array(RTTI_Reference),
status: CarePlan_DetailStatusKindKeys,
_status: RTTI_Element,
statusReason: RTTI_CodeableConcept,
doNotPerform: t.boolean,
_doNotPerform: RTTI_Element,
scheduledTiming: RTTI_Timing,
scheduledPeriod: RTTI_Period,
scheduledString: t.string,
_scheduledString: RTTI_Element,
location: RTTI_Reference,
performer: t.array(RTTI_Reference),
productCodeableConcept: RTTI_CodeableConcept,
productReference: RTTI_Reference,
dailyAmount: RTTI_Quantity,
quantity: RTTI_Quantity,
description: t.string,
_description: RTTI_Element
        });
        

        export var RTTI_CarePlan_Detail:any = t.intersection([mandatory, partial]);
        

export type ICarePlan_Detail = t.TypeOf<typeof RTTI_CarePlan_Detail>;
        
        