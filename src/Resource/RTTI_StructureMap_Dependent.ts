
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
variable: t.array(t.string),
_variable: t.array(RTTI_Element)
        });
        

        export var RTTI_StructureMap_Dependent:any = t.intersection([mandatory, partial]);
        

export type IStructureMap_Dependent = t.TypeOf<typeof RTTI_StructureMap_Dependent>;
        
        