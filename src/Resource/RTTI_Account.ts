
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
import {RTTI_Account_Coverage} from './RTTI_Account_Coverage';
import {RTTI_Account_Guarantor} from './RTTI_Account_Guarantor';

export enum AccountStatusKind {
                active = 'active',
inactive = 'inactive',
enteredInError = 'enteredInError',
onHold = 'onHold',
unknown = 'unknown'
            }
const AccountStatusKindKeys = t.keyof({
                [AccountStatusKind.active]: null,
[AccountStatusKind.inactive]: null,
[AccountStatusKind.enteredInError]: null,
[AccountStatusKind.onHold]: null,
[AccountStatusKind.unknown]: null
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
status: AccountStatusKindKeys,
_status: RTTI_Element,
type: RTTI_CodeableConcept,
name: t.string,
_name: RTTI_Element,
subject: t.array(RTTI_Reference),
servicePeriod: RTTI_Period,
coverage: t.array(RTTI_Account_Coverage),
owner: RTTI_Reference,
description: t.string,
_description: RTTI_Element,
guarantor: t.array(RTTI_Account_Guarantor),
partOf: RTTI_Reference
        });
        

        export var RTTI_Account:any = t.intersection([mandatory, partial]);
        

export type IAccount = t.TypeOf<typeof RTTI_Account>;
        
        