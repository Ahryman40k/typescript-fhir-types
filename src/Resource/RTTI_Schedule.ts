
import * as t from 'io-ts';
import {RTTI_Meta} from './RTTI_Meta';
import {RTTI_Element} from './RTTI_Element';
import {RTTI_Narrative} from './RTTI_Narrative';
import {ResourceList} from '../Union/ResourceList';
import {RTTI_Extension} from './RTTI_Extension';
import {RTTI_Identifier} from './RTTI_Identifier';
import {RTTI_CodeableConcept} from './RTTI_CodeableConcept';
import {RTTI_Reference} from './RTTI_Reference';
import {RTTI_Period} from './RTTI_Period';




        const mandatory = t.type({
           resourceType: t.string,
actor: t.array(RTTI_Reference)
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
identifier: t.array(RTTI_Identifier),
active: t.boolean,
_active: RTTI_Element,
serviceCategory: t.array(RTTI_CodeableConcept),
serviceType: t.array(RTTI_CodeableConcept),
specialty: t.array(RTTI_CodeableConcept),
planningHorizon: RTTI_Period,
comment: t.string,
_comment: RTTI_Element
        });
        

        export var RTTI_Schedule:any = t.intersection([mandatory, partial]);
        

export type ISchedule = t.TypeOf<typeof RTTI_Schedule>;
        
        