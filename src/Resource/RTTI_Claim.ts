
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
import {RTTI_Claim_Related} from './RTTI_Claim_Related';
import {RTTI_Claim_Payee} from './RTTI_Claim_Payee';
import {RTTI_Claim_CareTeam} from './RTTI_Claim_CareTeam';
import {RTTI_Claim_Information} from './RTTI_Claim_Information';
import {RTTI_Claim_Diagnosis} from './RTTI_Claim_Diagnosis';
import {RTTI_Claim_Procedure} from './RTTI_Claim_Procedure';
import {RTTI_Claim_Insurance} from './RTTI_Claim_Insurance';
import {RTTI_Claim_Accident} from './RTTI_Claim_Accident';
import {RTTI_Claim_Item} from './RTTI_Claim_Item';
import {RTTI_Money} from './RTTI_Money';

export enum ClaimUseKind {
                claim = 'claim',
preauthorization = 'preauthorization',
predetermination = 'predetermination'
            }
const ClaimUseKindKeys = t.keyof({
                [ClaimUseKind.claim]: null,
[ClaimUseKind.preauthorization]: null,
[ClaimUseKind.predetermination]: null
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
status: t.string,
_status: RTTI_Element,
type: RTTI_CodeableConcept,
subType: RTTI_CodeableConcept,
use: ClaimUseKindKeys,
_use: RTTI_Element,
patient: RTTI_Reference,
billablePeriod: RTTI_Period,
created: t.string,
_created: RTTI_Element,
enterer: RTTI_Reference,
insurer: RTTI_Reference,
provider: RTTI_Reference,
priority: RTTI_CodeableConcept,
fundsReserve: RTTI_CodeableConcept,
related: t.array(RTTI_Claim_Related),
prescription: RTTI_Reference,
originalPrescription: RTTI_Reference,
payee: RTTI_Claim_Payee,
referral: RTTI_Reference,
facility: RTTI_Reference,
careTeam: t.array(RTTI_Claim_CareTeam),
information: t.array(RTTI_Claim_Information),
diagnosis: t.array(RTTI_Claim_Diagnosis),
procedure: t.array(RTTI_Claim_Procedure),
insurance: t.array(RTTI_Claim_Insurance),
accident: RTTI_Claim_Accident,
item: t.array(RTTI_Claim_Item),
total: RTTI_Money
        });
        

        export var RTTI_Claim:any = t.intersection([mandatory, partial]);
        

export type IClaim = t.TypeOf<typeof RTTI_Claim>;
        
        