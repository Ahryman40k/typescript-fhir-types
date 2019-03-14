
import * as t from 'io-ts';
import {RTTI_Extension} from './RTTI_Extension';
import {RTTI_CodeableConcept} from './RTTI_CodeableConcept';
import {RTTI_Age} from './RTTI_Age';
import {RTTI_Range} from './RTTI_Range';
import {RTTI_Period} from './RTTI_Period';
import {RTTI_Element} from './RTTI_Element';
import {RTTI_Annotation} from './RTTI_Annotation';




        const mandatory = t.type({
           code: RTTI_CodeableConcept
        });
        

        const partial = t.partial({
            id: t.string,
extension: t.array(RTTI_Extension),
modifierExtension: t.array(RTTI_Extension),
outcome: RTTI_CodeableConcept,
onsetAge: RTTI_Age,
onsetRange: RTTI_Range,
onsetPeriod: RTTI_Period,
onsetString: t.string,
_onsetString: RTTI_Element,
note: t.array(RTTI_Annotation)
        });
        

        export var RTTI_FamilyMemberHistory_Condition:any = t.intersection([mandatory, partial]);
        

export type IFamilyMemberHistory_Condition = t.TypeOf<typeof RTTI_FamilyMemberHistory_Condition>;
        
        