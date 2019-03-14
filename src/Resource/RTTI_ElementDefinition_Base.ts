
import * as t from 'io-ts';
import {RTTI_Extension} from './RTTI_Extension';
import {RTTI_Element} from './RTTI_Element';




        const mandatory = t.type({
           
        });
        

        const partial = t.partial({
            id: t.string,
extension: t.array(RTTI_Extension),
modifierExtension: t.array(RTTI_Extension),
path: t.string,
_path: RTTI_Element,
min: t.number,
_min: RTTI_Element,
max: t.string,
_max: RTTI_Element
        });
        

        export var RTTI_ElementDefinition_Base:any = t.intersection([mandatory, partial]);
        

export type IElementDefinition_Base = t.TypeOf<typeof RTTI_ElementDefinition_Base>;
        
        