
import * as t from 'io-ts';
import {RTTI_Extension} from './RTTI_Extension';
import {RTTI_Element} from './RTTI_Element';




        const mandatory = t.type({
           
        });
        

        const partial = t.partial({
            id: t.string,
extension: t.array(RTTI_Extension),
modifierExtension: t.array(RTTI_Extension),
source: t.string,
_source: RTTI_Element,
sourceId: t.string,
_sourceId: RTTI_Element
        });
        

        export var RTTI_OperationDefinition_ReferencedFrom:any = t.intersection([mandatory, partial]);
        

export type IOperationDefinition_ReferencedFrom = t.TypeOf<typeof RTTI_OperationDefinition_ReferencedFrom>;
        
        