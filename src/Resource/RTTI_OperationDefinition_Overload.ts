
import * as t from 'io-ts';
import {RTTI_Extension} from './RTTI_Extension';

import {RTTI_Element} from './RTTI_Element';




        const mandatory = t.type({
           
        });
        

        const partial = t.partial({
            id: t.string,
extension: t.array(RTTI_Extension),
modifierExtension: t.array(RTTI_Extension),
parameterName: t.array(t.string),
_parameterName: t.array(RTTI_Element),
comment: t.string,
_comment: RTTI_Element
        });
        

        export var RTTI_OperationDefinition_Overload:any = t.intersection([mandatory, partial]);
        

export type IOperationDefinition_Overload = t.TypeOf<typeof RTTI_OperationDefinition_Overload>;
        
        