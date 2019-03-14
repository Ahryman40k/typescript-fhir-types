
import * as t from 'io-ts';
import {RTTI_Extension} from './RTTI_Extension';
import {RTTI_Element} from './RTTI_Element';
import {RTTI_Coding} from './RTTI_Coding';




        const mandatory = t.type({
           
        });
        

        const partial = t.partial({
            id: t.string,
extension: t.array(RTTI_Extension),
modifierExtension: t.array(RTTI_Extension),
path: t.string,
_path: RTTI_Element,
searchParam: t.string,
_searchParam: RTTI_Element,
valueSet: t.string,
code: t.array(RTTI_Coding)
        });
        

        export var RTTI_DataRequirement_CodeFilter:any = t.intersection([mandatory, partial]);
        

export type IDataRequirement_CodeFilter = t.TypeOf<typeof RTTI_DataRequirement_CodeFilter>;
        
        