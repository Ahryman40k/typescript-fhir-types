
import * as t from 'io-ts';
import {RTTI_Meta} from './RTTI_Meta';
import {RTTI_Element} from './RTTI_Element';
import {RTTI_Narrative} from './RTTI_Narrative';
import {ResourceList} from '../Union/ResourceList';
import {RTTI_Extension} from './RTTI_Extension';
import {RTTI_CodeableConcept} from './RTTI_CodeableConcept';

import {RTTI_SubstancePolymer_MonomerSet} from './RTTI_SubstancePolymer_MonomerSet';
import {RTTI_SubstancePolymer_Repeat} from './RTTI_SubstancePolymer_Repeat';




        const mandatory = t.type({
           resourceType: t.string
        });
        

        const partial = t.partial({
            id: t.string,
meta: RTTI_Meta,
implicitRules: t.string,
_implicitRules: RTTI_Element,
language: t.string,
_language: RTTI_Element,
text: RTTI_Narrative,
contained: t.array(ResourceList),
extension: t.array(RTTI_Extension),
modifierExtension: t.array(RTTI_Extension),
class: RTTI_CodeableConcept,
geometry: RTTI_CodeableConcept,
copolymerConnectivity: t.array(RTTI_CodeableConcept),
modification: t.array(t.string),
_modification: t.array(RTTI_Element),
monomerSet: t.array(RTTI_SubstancePolymer_MonomerSet),
repeat: t.array(RTTI_SubstancePolymer_Repeat)
        });
        

        export var RTTI_SubstancePolymer:any = t.intersection([mandatory, partial]);
        

export type ISubstancePolymer = t.TypeOf<typeof RTTI_SubstancePolymer>;
        
        