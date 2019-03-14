
import * as t from 'io-ts';
import {RTTI_Extension} from './RTTI_Extension';
import {RTTI_Reference} from './RTTI_Reference';
import {RTTI_CodeableConcept} from './RTTI_CodeableConcept';
import {RTTI_Element} from './RTTI_Element';




        const mandatory = t.type({
           condition: RTTI_Reference
        });
        

        const partial = t.partial({
            id: t.string,
extension: t.array(RTTI_Extension),
modifierExtension: t.array(RTTI_Extension),
role: RTTI_CodeableConcept,
rank: t.number,
_rank: RTTI_Element
        });
        

        export var RTTI_EpisodeOfCare_Diagnosis:any = t.intersection([mandatory, partial]);
        

export type IEpisodeOfCare_Diagnosis = t.TypeOf<typeof RTTI_EpisodeOfCare_Diagnosis>;
        
        