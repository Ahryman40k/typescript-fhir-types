
import * as t from 'io-ts';
import {RTTI_Extension} from './RTTI_Extension';
import {RTTI_Element} from './RTTI_Element';
import {RTTI_Duration} from './RTTI_Duration';
import {RTTI_Range} from './RTTI_Range';

export enum PlanDefinition_RelatedActionRelationshipKind {
                beforeStart = 'beforeStart',
before = 'before',
beforeEnd = 'beforeEnd',
concurrentWithStart = 'concurrentWithStart',
concurrent = 'concurrent',
concurrentWithEnd = 'concurrentWithEnd',
afterStart = 'afterStart',
after = 'after',
afterEnd = 'afterEnd'
            }
const PlanDefinition_RelatedActionRelationshipKindKeys = t.keyof({
                [PlanDefinition_RelatedActionRelationshipKind.beforeStart]: null,
[PlanDefinition_RelatedActionRelationshipKind.before]: null,
[PlanDefinition_RelatedActionRelationshipKind.beforeEnd]: null,
[PlanDefinition_RelatedActionRelationshipKind.concurrentWithStart]: null,
[PlanDefinition_RelatedActionRelationshipKind.concurrent]: null,
[PlanDefinition_RelatedActionRelationshipKind.concurrentWithEnd]: null,
[PlanDefinition_RelatedActionRelationshipKind.afterStart]: null,
[PlanDefinition_RelatedActionRelationshipKind.after]: null,
[PlanDefinition_RelatedActionRelationshipKind.afterEnd]: null
            });


        const mandatory = t.type({
           
        });
        

        const partial = t.partial({
            id: t.string,
extension: t.array(RTTI_Extension),
modifierExtension: t.array(RTTI_Extension),
actionId: t.string,
_actionId: RTTI_Element,
relationship: PlanDefinition_RelatedActionRelationshipKindKeys,
_relationship: RTTI_Element,
offsetDuration: RTTI_Duration,
offsetRange: RTTI_Range
        });
        

        export var RTTI_PlanDefinition_RelatedAction:any = t.intersection([mandatory, partial]);
        

export type IPlanDefinition_RelatedAction = t.TypeOf<typeof RTTI_PlanDefinition_RelatedAction>;
        
        