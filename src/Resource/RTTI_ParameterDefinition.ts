
import * as t from 'io-ts';
import {RTTI_Extension} from './RTTI_Extension';
import {RTTI_Element} from './RTTI_Element';




        const mandatory = t.type({
           
        });
        

        const partial = t.partial({
            id: t.string,
extension: t.array(RTTI_Extension),
name: t.string,
_name: RTTI_Element,
use: t.string,
_use: RTTI_Element,
min: t.number,
_min: RTTI_Element,
max: t.string,
_max: RTTI_Element,
documentation: t.string,
_documentation: RTTI_Element,
type: t.string,
_type: RTTI_Element,
profile: t.string
        });
        

        export var RTTI_ParameterDefinition:any = t.intersection([mandatory, partial]);
        

export type IParameterDefinition = t.TypeOf<typeof RTTI_ParameterDefinition>;
        
        