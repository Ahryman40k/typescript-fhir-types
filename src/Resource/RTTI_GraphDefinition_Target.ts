
import * as t from 'io-ts';
import {RTTI_Extension} from './RTTI_Extension';
import {RTTI_Element} from './RTTI_Element';
import {RTTI_GraphDefinition_Compartment} from './RTTI_GraphDefinition_Compartment';
import {RTTI_GraphDefinition_Link} from './RTTI_GraphDefinition_Link';




        const mandatory = t.type({
           
        });
        

        const partial = t.partial({
            id: t.string,
extension: t.array(RTTI_Extension),
modifierExtension: t.array(RTTI_Extension),
type: t.string,
_type: RTTI_Element,
params: t.string,
_params: RTTI_Element,
profile: t.string,
compartment: t.array(RTTI_GraphDefinition_Compartment),
link: t.array(RTTI_GraphDefinition_Link)
        });
        

        export var RTTI_GraphDefinition_Target:any = t.intersection([mandatory, partial]);
        

export type IGraphDefinition_Target = t.TypeOf<typeof RTTI_GraphDefinition_Target>;
        
        