
import * as t from 'io-ts';
import {RTTI_Extension} from './RTTI_Extension';
import {RTTI_Element} from './RTTI_Element';

export enum ConceptMap_UnmappedModeKind {
                provided = 'provided',
fixed = 'fixed',
otherMap = 'otherMap'
            }
const ConceptMap_UnmappedModeKindKeys = t.keyof({
                [ConceptMap_UnmappedModeKind.provided]: null,
[ConceptMap_UnmappedModeKind.fixed]: null,
[ConceptMap_UnmappedModeKind.otherMap]: null
            });


        const mandatory = t.type({
           
        });
        

        const partial = t.partial({
            id: t.string,
extension: t.array(RTTI_Extension),
modifierExtension: t.array(RTTI_Extension),
mode: ConceptMap_UnmappedModeKindKeys,
_mode: RTTI_Element,
code: t.string,
_code: RTTI_Element,
display: t.string,
_display: RTTI_Element,
url: t.string
        });
        

        export var RTTI_ConceptMap_Unmapped:any = t.intersection([mandatory, partial]);
        

export type IConceptMap_Unmapped = t.TypeOf<typeof RTTI_ConceptMap_Unmapped>;
        
        