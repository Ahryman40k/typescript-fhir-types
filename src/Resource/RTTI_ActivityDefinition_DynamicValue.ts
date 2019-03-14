
import * as t from 'io-ts';
import {RTTI_Extension} from './RTTI_Extension';
import {RTTI_Element} from './RTTI_Element';
import {RTTI_Expression} from './RTTI_Expression';




        const mandatory = t.type({
           expression: RTTI_Expression
        });
        

        const partial = t.partial({
            id: t.string,
extension: t.array(RTTI_Extension),
modifierExtension: t.array(RTTI_Extension),
path: t.string,
_path: RTTI_Element
        });
        

        export var RTTI_ActivityDefinition_DynamicValue:any = t.intersection([mandatory, partial]);
        

export type IActivityDefinition_DynamicValue = t.TypeOf<typeof RTTI_ActivityDefinition_DynamicValue>;
        
        