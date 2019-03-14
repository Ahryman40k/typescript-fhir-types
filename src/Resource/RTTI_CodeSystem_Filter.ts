
import * as t from 'io-ts';
import {RTTI_Extension} from './RTTI_Extension';
import {RTTI_Element} from './RTTI_Element';





        const mandatory = t.type({
           
        });
        

        const partial = t.partial({
            id: t.string,
extension: t.array(RTTI_Extension),
modifierExtension: t.array(RTTI_Extension),
code: t.string,
_code: RTTI_Element,
description: t.string,
_description: RTTI_Element,
operator: t.array(t.string),
_operator: t.array(RTTI_Element),
value: t.string,
_value: RTTI_Element
        });
        

        export var RTTI_CodeSystem_Filter:any = t.intersection([mandatory, partial]);
        

export type ICodeSystem_Filter = t.TypeOf<typeof RTTI_CodeSystem_Filter>;
        
        