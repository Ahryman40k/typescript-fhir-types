
import * as t from 'io-ts';
import {RTTI_Extension} from './RTTI_Extension';
import {RTTI_Element} from './RTTI_Element';

export enum ExampleScenario_ActorTypeKind {
                person = 'person',
entity = 'entity'
            }
const ExampleScenario_ActorTypeKindKeys = t.keyof({
                [ExampleScenario_ActorTypeKind.person]: null,
[ExampleScenario_ActorTypeKind.entity]: null
            });


        const mandatory = t.type({
           
        });
        

        const partial = t.partial({
            id: t.string,
extension: t.array(RTTI_Extension),
modifierExtension: t.array(RTTI_Extension),
actorId: t.string,
_actorId: RTTI_Element,
type: ExampleScenario_ActorTypeKindKeys,
_type: RTTI_Element,
name: t.string,
_name: RTTI_Element,
description: t.string,
_description: RTTI_Element
        });
        

        export var RTTI_ExampleScenario_Actor:any = t.intersection([mandatory, partial]);
        

export type IExampleScenario_Actor = t.TypeOf<typeof RTTI_ExampleScenario_Actor>;
        
        