
import * as t from 'io-ts';
import {RTTI_Extension} from './RTTI_Extension';
import {RTTI_Element} from './RTTI_Element';
import {RTTI_Timing} from './RTTI_Timing';
import {RTTI_Reference} from './RTTI_Reference';
import {RTTI_DataRequirement} from './RTTI_DataRequirement';
import {RTTI_Expression} from './RTTI_Expression';

export enum TriggerDefinitionTypeKind {
                namedEvent = 'namedEvent',
periodic = 'periodic',
dataChanged = 'dataChanged',
dataAdded = 'dataAdded',
dataModified = 'dataModified',
dataRemoved = 'dataRemoved',
dataAccessed = 'dataAccessed',
dataAccessEnded = 'dataAccessEnded'
            }
const TriggerDefinitionTypeKindKeys = t.keyof({
                [TriggerDefinitionTypeKind.namedEvent]: null,
[TriggerDefinitionTypeKind.periodic]: null,
[TriggerDefinitionTypeKind.dataChanged]: null,
[TriggerDefinitionTypeKind.dataAdded]: null,
[TriggerDefinitionTypeKind.dataModified]: null,
[TriggerDefinitionTypeKind.dataRemoved]: null,
[TriggerDefinitionTypeKind.dataAccessed]: null,
[TriggerDefinitionTypeKind.dataAccessEnded]: null
            });


        const mandatory = t.type({
           
        });
        

        const partial = t.partial({
            id: t.string,
extension: t.array(RTTI_Extension),
type: TriggerDefinitionTypeKindKeys,
_type: RTTI_Element,
name: t.string,
_name: RTTI_Element,
timingTiming: RTTI_Timing,
timingReference: RTTI_Reference,
timingDate: t.string,
_timingDate: RTTI_Element,
timingDateTime: t.string,
_timingDateTime: RTTI_Element,
data: RTTI_DataRequirement,
condition: RTTI_Expression
        });
        

        export var RTTI_TriggerDefinition:any = t.intersection([mandatory, partial]);
        

export type ITriggerDefinition = t.TypeOf<typeof RTTI_TriggerDefinition>;
        
        