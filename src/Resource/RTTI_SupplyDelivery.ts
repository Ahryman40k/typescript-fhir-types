
import * as t from 'io-ts';
import {RTTI_Meta} from './RTTI_Meta';
import {RTTI_Element} from './RTTI_Element';
import {RTTI_Narrative} from './RTTI_Narrative';
import {ResourceList} from '../Union/ResourceList';
import {RTTI_Extension} from './RTTI_Extension';
import {RTTI_Identifier} from './RTTI_Identifier';
import {RTTI_Reference} from './RTTI_Reference';
import {RTTI_CodeableConcept} from './RTTI_CodeableConcept';
import {RTTI_SupplyDelivery_SuppliedItem} from './RTTI_SupplyDelivery_SuppliedItem';
import {RTTI_Period} from './RTTI_Period';
import {RTTI_Timing} from './RTTI_Timing';

export enum SupplyDeliveryStatusKind {
                inProgress = 'inProgress',
completed = 'completed',
abandoned = 'abandoned',
enteredInError = 'enteredInError'
            }
const SupplyDeliveryStatusKindKeys = t.keyof({
                [SupplyDeliveryStatusKind.inProgress]: null,
[SupplyDeliveryStatusKind.completed]: null,
[SupplyDeliveryStatusKind.abandoned]: null,
[SupplyDeliveryStatusKind.enteredInError]: null
            });


        const mandatory = t.type({
           resourceType: t.string
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
partOf: t.array(RTTI_Reference),
status: SupplyDeliveryStatusKindKeys,
_status: RTTI_Element,
patient: RTTI_Reference,
type: RTTI_CodeableConcept,
suppliedItem: RTTI_SupplyDelivery_SuppliedItem,
occurrenceDateTime: t.string,
_occurrenceDateTime: RTTI_Element,
occurrencePeriod: RTTI_Period,
occurrenceTiming: RTTI_Timing,
supplier: RTTI_Reference,
destination: RTTI_Reference,
receiver: t.array(RTTI_Reference)
        });
        

        export var RTTI_SupplyDelivery:any = t.intersection([mandatory, partial]);
        

export type ISupplyDelivery = t.TypeOf<typeof RTTI_SupplyDelivery>;
        
        