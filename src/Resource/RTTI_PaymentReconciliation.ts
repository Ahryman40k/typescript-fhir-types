
import * as t from 'io-ts';
import {RTTI_Meta} from './RTTI_Meta';
import {RTTI_Element} from './RTTI_Element';
import {RTTI_Narrative} from './RTTI_Narrative';
import {ResourceList} from '../Union/ResourceList';
import {RTTI_Extension} from './RTTI_Extension';
import {RTTI_Identifier} from './RTTI_Identifier';
import {RTTI_Period} from './RTTI_Period';
import {RTTI_Reference} from './RTTI_Reference';
import {RTTI_PaymentReconciliation_Detail} from './RTTI_PaymentReconciliation_Detail';
import {RTTI_CodeableConcept} from './RTTI_CodeableConcept';
import {RTTI_Money} from './RTTI_Money';
import {RTTI_PaymentReconciliation_ProcessNote} from './RTTI_PaymentReconciliation_ProcessNote';

export enum PaymentReconciliationOutcomeKind {
                queued = 'queued',
complete = 'complete',
error = 'error',
partial = 'partial'
            }
const PaymentReconciliationOutcomeKindKeys = t.keyof({
                [PaymentReconciliationOutcomeKind.queued]: null,
[PaymentReconciliationOutcomeKind.complete]: null,
[PaymentReconciliationOutcomeKind.error]: null,
[PaymentReconciliationOutcomeKind.partial]: null
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
period: RTTI_Period,
created: t.string,
_created: RTTI_Element,
organization: RTTI_Reference,
request: RTTI_Reference,
outcome: PaymentReconciliationOutcomeKindKeys,
_outcome: RTTI_Element,
disposition: t.string,
_disposition: RTTI_Element,
requestProvider: RTTI_Reference,
detail: t.array(RTTI_PaymentReconciliation_Detail),
form: RTTI_CodeableConcept,
total: RTTI_Money,
processNote: t.array(RTTI_PaymentReconciliation_ProcessNote)
        });
        

        export var RTTI_PaymentReconciliation:any = t.intersection([mandatory, partial]);
        

export type IPaymentReconciliation = t.TypeOf<typeof RTTI_PaymentReconciliation>;
        
        