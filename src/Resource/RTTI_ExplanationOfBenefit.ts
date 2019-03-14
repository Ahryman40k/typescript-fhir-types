
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
import {RTTI_ExplanationOfBenefit_Related} from './RTTI_ExplanationOfBenefit_Related';
import {RTTI_ExplanationOfBenefit_Payee} from './RTTI_ExplanationOfBenefit_Payee';
import {RTTI_ExplanationOfBenefit_Information} from './RTTI_ExplanationOfBenefit_Information';
import {RTTI_ExplanationOfBenefit_CareTeam} from './RTTI_ExplanationOfBenefit_CareTeam';
import {RTTI_ExplanationOfBenefit_Diagnosis} from './RTTI_ExplanationOfBenefit_Diagnosis';
import {RTTI_ExplanationOfBenefit_Procedure} from './RTTI_ExplanationOfBenefit_Procedure';
import {RTTI_ExplanationOfBenefit_Insurance} from './RTTI_ExplanationOfBenefit_Insurance';
import {RTTI_ExplanationOfBenefit_Accident} from './RTTI_ExplanationOfBenefit_Accident';
import {RTTI_ExplanationOfBenefit_Item} from './RTTI_ExplanationOfBenefit_Item';
import {RTTI_ExplanationOfBenefit_AddItem} from './RTTI_ExplanationOfBenefit_AddItem';
import {RTTI_ExplanationOfBenefit_Total} from './RTTI_ExplanationOfBenefit_Total';
import {RTTI_ExplanationOfBenefit_Payment} from './RTTI_ExplanationOfBenefit_Payment';
import {RTTI_ExplanationOfBenefit_ProcessNote} from './RTTI_ExplanationOfBenefit_ProcessNote';
import {RTTI_ExplanationOfBenefit_BenefitBalance} from './RTTI_ExplanationOfBenefit_BenefitBalance';

export enum ExplanationOfBenefitStatusKind {
                active = 'active',
cancelled = 'cancelled',
draft = 'draft',
enteredInError = 'enteredInError'
            }
const ExplanationOfBenefitStatusKindKeys = t.keyof({
                [ExplanationOfBenefitStatusKind.active]: null,
[ExplanationOfBenefitStatusKind.cancelled]: null,
[ExplanationOfBenefitStatusKind.draft]: null,
[ExplanationOfBenefitStatusKind.enteredInError]: null
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
status: ExplanationOfBenefitStatusKindKeys,
_status: RTTI_Element,
type: RTTI_CodeableConcept,
subType: RTTI_CodeableConcept,
use: t.string,
_use: RTTI_Element,
patient: RTTI_Reference,
billablePeriod: RTTI_Period,
created: t.string,
_created: RTTI_Element,
enterer: RTTI_Reference,
insurer: RTTI_Reference,
provider: RTTI_Reference,
referral: RTTI_Reference,
facility: RTTI_Reference,
claim: RTTI_Reference,
claimResponse: RTTI_Reference,
outcome: t.string,
_outcome: RTTI_Element,
disposition: t.string,
_disposition: RTTI_Element,
related: t.array(RTTI_ExplanationOfBenefit_Related),
prescription: RTTI_Reference,
originalPrescription: RTTI_Reference,
payee: RTTI_ExplanationOfBenefit_Payee,
information: t.array(RTTI_ExplanationOfBenefit_Information),
careTeam: t.array(RTTI_ExplanationOfBenefit_CareTeam),
diagnosis: t.array(RTTI_ExplanationOfBenefit_Diagnosis),
procedure: t.array(RTTI_ExplanationOfBenefit_Procedure),
precedence: t.number,
_precedence: RTTI_Element,
insurance: t.array(RTTI_ExplanationOfBenefit_Insurance),
accident: RTTI_ExplanationOfBenefit_Accident,
item: t.array(RTTI_ExplanationOfBenefit_Item),
addItem: t.array(RTTI_ExplanationOfBenefit_AddItem),
total: t.array(RTTI_ExplanationOfBenefit_Total),
payment: RTTI_ExplanationOfBenefit_Payment,
form: RTTI_CodeableConcept,
processNote: t.array(RTTI_ExplanationOfBenefit_ProcessNote),
benefitBalance: t.array(RTTI_ExplanationOfBenefit_BenefitBalance)
        });
        

        export var RTTI_ExplanationOfBenefit:any = t.intersection([mandatory, partial]);
        

export type IExplanationOfBenefit = t.TypeOf<typeof RTTI_ExplanationOfBenefit>;
        
        