
import * as t from 'io-ts';
import {RTTI_Meta} from './RTTI_Meta';
import {RTTI_Element} from './RTTI_Element';
import {RTTI_Narrative} from './RTTI_Narrative';
import {ResourceList} from '../Union/ResourceList';
import {RTTI_Extension} from './RTTI_Extension';
import {RTTI_Reference} from './RTTI_Reference';
import {RTTI_Period} from './RTTI_Period';

import {RTTI_CodeableConcept} from './RTTI_CodeableConcept';
import {RTTI_Provenance_Agent} from './RTTI_Provenance_Agent';
import {RTTI_Provenance_Entity} from './RTTI_Provenance_Entity';
import {RTTI_Signature} from './RTTI_Signature';




        const mandatory = t.type({
           resourceType: t.string,
target: t.array(RTTI_Reference),
agent: t.array(RTTI_Provenance_Agent)
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
occurredPeriod: RTTI_Period,
occurredDateTime: t.string,
_occurredDateTime: RTTI_Element,
recorded: t.string,
_recorded: RTTI_Element,
policy: t.array(t.string),
_policy: t.array(RTTI_Element),
location: RTTI_Reference,
reason: t.array(RTTI_CodeableConcept),
activity: RTTI_CodeableConcept,
entity: t.array(RTTI_Provenance_Entity),
signature: t.array(RTTI_Signature)
        });
        

        export var RTTI_Provenance:any = t.intersection([mandatory, partial]);
        

export type IProvenance = t.TypeOf<typeof RTTI_Provenance>;
        
        