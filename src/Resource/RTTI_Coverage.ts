
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
import {RTTI_Coverage_Class} from './RTTI_Coverage_Class';
import {RTTI_Coverage_Copay} from './RTTI_Coverage_Copay';




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
identifier: t.array(RTTI_Identifier),
status: t.string,
_status: RTTI_Element,
type: RTTI_CodeableConcept,
policyHolder: RTTI_Reference,
subscriber: RTTI_Reference,
subscriberId: t.string,
_subscriberId: RTTI_Element,
beneficiary: RTTI_Reference,
dependent: t.string,
_dependent: RTTI_Element,
relationship: RTTI_CodeableConcept,
period: RTTI_Period,
payor: t.array(RTTI_Reference),
class: t.array(RTTI_Coverage_Class),
order: t.number,
_order: RTTI_Element,
network: t.string,
_network: RTTI_Element,
copay: t.array(RTTI_Coverage_Copay),
contract: t.array(RTTI_Reference)
        });
        

        export var RTTI_Coverage:any = t.intersection([mandatory, partial]);
        

export type ICoverage = t.TypeOf<typeof RTTI_Coverage>;
        
        