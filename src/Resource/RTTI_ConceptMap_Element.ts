
import * as t from 'io-ts';
import {RTTI_Extension} from './RTTI_Extension';
import {RTTI_Element} from './RTTI_Element';
import {RTTI_ConceptMap_Target} from './RTTI_ConceptMap_Target';




        const mandatory = t.type({
           
        });
        

        const partial = t.partial({
            id: t.string,
extension: t.array(RTTI_Extension),
modifierExtension: t.array(RTTI_Extension),
code: t.string,
_code: RTTI_Element,
display: t.string,
_display: RTTI_Element,
target: t.array(RTTI_ConceptMap_Target)
        });
        

        export var RTTI_ConceptMap_Element:any = t.intersection([mandatory, partial]);
        

export type IConceptMap_Element = t.TypeOf<typeof RTTI_ConceptMap_Element>;
        
        