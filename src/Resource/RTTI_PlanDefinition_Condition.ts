
import * as t from 'io-ts';
import {RTTI_Extension} from './RTTI_Extension';
import {RTTI_Element} from './RTTI_Element';
import {RTTI_Expression} from './RTTI_Expression';

export enum PlanDefinition_ConditionKindKind {
                applicability = 'applicability',
start = 'start',
stop = 'stop'
            }
const PlanDefinition_ConditionKindKindKeys = t.keyof({
                [PlanDefinition_ConditionKindKind.applicability]: null,
[PlanDefinition_ConditionKindKind.start]: null,
[PlanDefinition_ConditionKindKind.stop]: null
            });


        const mandatory = t.type({
           
        });
        

        const partial = t.partial({
            id: t.string,
extension: t.array(RTTI_Extension),
modifierExtension: t.array(RTTI_Extension),
kind: PlanDefinition_ConditionKindKindKeys,
_kind: RTTI_Element,
expression: RTTI_Expression
        });
        

        export var RTTI_PlanDefinition_Condition:any = t.intersection([mandatory, partial]);
        

export type IPlanDefinition_Condition = t.TypeOf<typeof RTTI_PlanDefinition_Condition>;
        
        