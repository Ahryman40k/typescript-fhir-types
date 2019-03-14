
import * as t from 'io-ts';
import {RTTI_Meta} from './RTTI_Meta';
import {RTTI_Element} from './RTTI_Element';
import {RTTI_Narrative} from './RTTI_Narrative';
import {ResourceList} from '../Union/ResourceList';
import {RTTI_Extension} from './RTTI_Extension';
import {RTTI_Identifier} from './RTTI_Identifier';
import {RTTI_CodeableConcept} from './RTTI_CodeableConcept';

import {RTTI_Period} from './RTTI_Period';
import {RTTI_Reference} from './RTTI_Reference';
import {RTTI_InsurancePlan_Contact} from './RTTI_InsurancePlan_Contact';
import {RTTI_InsurancePlan_Coverage} from './RTTI_InsurancePlan_Coverage';
import {RTTI_InsurancePlan_Plan} from './RTTI_InsurancePlan_Plan';

export enum InsurancePlanStatusKind {
                draft = 'draft',
active = 'active',
retired = 'retired',
unknown = 'unknown'
            }
const InsurancePlanStatusKindKeys = t.keyof({
                [InsurancePlanStatusKind.draft]: null,
[InsurancePlanStatusKind.active]: null,
[InsurancePlanStatusKind.retired]: null,
[InsurancePlanStatusKind.unknown]: null
            });


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
status: InsurancePlanStatusKindKeys,
_status: RTTI_Element,
type: t.array(RTTI_CodeableConcept),
name: t.string,
_name: RTTI_Element,
alias: t.array(t.string),
_alias: t.array(RTTI_Element),
period: RTTI_Period,
ownedBy: RTTI_Reference,
administeredBy: RTTI_Reference,
coverageArea: t.array(RTTI_Reference),
contact: t.array(RTTI_InsurancePlan_Contact),
endpoint: t.array(RTTI_Reference),
network: t.array(RTTI_Reference),
coverage: t.array(RTTI_InsurancePlan_Coverage),
plan: t.array(RTTI_InsurancePlan_Plan)
        });
        

        export var RTTI_InsurancePlan:any = t.intersection([mandatory, partial]);
        

export type IInsurancePlan = t.TypeOf<typeof RTTI_InsurancePlan>;
        
        