
import * as t from 'io-ts';
import { RTTI_Extension } from './RTTI_Extension';
import { RTTI_Element } from './RTTI_Element';
import { RTTI_ExampleScenario_Step } from './RTTI_ExampleScenario_Step';





const mandatory = t.type({

});


const partial = t.partial({
    id: t.string,
    extension: t.array(RTTI_Extension),
    modifierExtension: t.array(RTTI_Extension),
    description: t.string,
    _description: RTTI_Element,
    step: t.array(RTTI_ExampleScenario_Step),
    pause: t.array(t.boolean),
    _pause: t.array(RTTI_Element)
});


export var RTTI_ExampleScenario_Option: any = t.intersection([mandatory, partial]);


export type IExampleScenario_Option = t.TypeOf<typeof RTTI_ExampleScenario_Option>;

