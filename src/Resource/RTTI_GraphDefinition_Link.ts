
import * as t from 'io-ts';
import {RTTI_Extension} from './RTTI_Extension';
import {RTTI_Element} from './RTTI_Element';
import {RTTI_GraphDefinition_Target} from './RTTI_GraphDefinition_Target';




        const mandatory = t.type({
           
        });
        

        const partial = t.partial({
            id: t.string,
extension: t.array(RTTI_Extension),
modifierExtension: t.array(RTTI_Extension),
path: t.string,
_path: RTTI_Element,
sliceName: t.string,
_sliceName: RTTI_Element,
min: t.number,
_min: RTTI_Element,
max: t.string,
_max: RTTI_Element,
description: t.string,
_description: RTTI_Element,
target: t.array(RTTI_GraphDefinition_Target)
        });
        

        export var RTTI_GraphDefinition_Link:any = t.intersection([mandatory, partial]);
        

export type IGraphDefinition_Link = t.TypeOf<typeof RTTI_GraphDefinition_Link>;
        
        