
import * as t from 'io-ts';
import {RTTI_Extension} from './RTTI_Extension';
import {RTTI_Element} from './RTTI_Element';
import {RTTI_ConceptMap_Element} from './RTTI_ConceptMap_Element';
import {RTTI_ConceptMap_Unmapped} from './RTTI_ConceptMap_Unmapped';




        const mandatory = t.type({
           element: t.array(RTTI_ConceptMap_Element)
        });
        

        const partial = t.partial({
            id: t.string,
extension: t.array(RTTI_Extension),
modifierExtension: t.array(RTTI_Extension),
source: t.string,
_source: RTTI_Element,
sourceVersion: t.string,
_sourceVersion: RTTI_Element,
target: t.string,
_target: RTTI_Element,
targetVersion: t.string,
_targetVersion: RTTI_Element,
unmapped: RTTI_ConceptMap_Unmapped
        });
        

        export var RTTI_ConceptMap_Group:any = t.intersection([mandatory, partial]);
        

export type IConceptMap_Group = t.TypeOf<typeof RTTI_ConceptMap_Group>;
        
        