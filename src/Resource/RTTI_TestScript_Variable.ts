
import * as t from 'io-ts';
import {RTTI_Extension} from './RTTI_Extension';
import {RTTI_Element} from './RTTI_Element';




        const mandatory = t.type({
           
        });
        

        const partial = t.partial({
            id: t.string,
extension: t.array(RTTI_Extension),
modifierExtension: t.array(RTTI_Extension),
name: t.string,
_name: RTTI_Element,
defaultValue: t.string,
_defaultValue: RTTI_Element,
description: t.string,
_description: RTTI_Element,
expression: t.string,
_expression: RTTI_Element,
headerField: t.string,
_headerField: RTTI_Element,
hint: t.string,
_hint: RTTI_Element,
path: t.string,
_path: RTTI_Element,
sourceId: t.string,
_sourceId: RTTI_Element
        });
        

        export var RTTI_TestScript_Variable:any = t.intersection([mandatory, partial]);
        

export type ITestScript_Variable = t.TypeOf<typeof RTTI_TestScript_Variable>;
        
        