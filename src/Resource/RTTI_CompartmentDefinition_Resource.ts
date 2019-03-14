
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
param: t.array(t.string),
_param: t.array(RTTI_Element),
documentation: t.string,
_documentation: RTTI_Element
        });
        

        export var RTTI_CompartmentDefinition_Resource:any = t.intersection([mandatory, partial]);
        

export type ICompartmentDefinition_Resource = t.TypeOf<typeof RTTI_CompartmentDefinition_Resource>;
        
        