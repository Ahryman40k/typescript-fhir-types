
import * as t from 'io-ts';
import {RTTI_Extension} from './RTTI_Extension';
import {RTTI_Element} from './RTTI_Element';




        const mandatory = t.type({
           
        });
        

        const partial = t.partial({
            id: t.string,
extension: t.array(RTTI_Extension),
modifierExtension: t.array(RTTI_Extension),
property: t.string,
_property: RTTI_Element,
system: t.string,
value: t.string,
_value: RTTI_Element,
display: t.string,
_display: RTTI_Element
        });
        

        export var RTTI_ConceptMap_DependsOn:any = t.intersection([mandatory, partial]);
        

export type IConceptMap_DependsOn = t.TypeOf<typeof RTTI_ConceptMap_DependsOn>;
        
        