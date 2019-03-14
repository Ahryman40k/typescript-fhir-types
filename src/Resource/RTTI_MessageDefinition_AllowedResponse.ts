
import * as t from 'io-ts';
import {RTTI_Extension} from './RTTI_Extension';
import {RTTI_Element} from './RTTI_Element';




        const mandatory = t.type({
           message: t.string
        });
        

        const partial = t.partial({
            id: t.string,
extension: t.array(RTTI_Extension),
modifierExtension: t.array(RTTI_Extension),
situation: t.string,
_situation: RTTI_Element
        });
        

        export var RTTI_MessageDefinition_AllowedResponse:any = t.intersection([mandatory, partial]);
        

export type IMessageDefinition_AllowedResponse = t.TypeOf<typeof RTTI_MessageDefinition_AllowedResponse>;
        
        