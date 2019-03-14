
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

export enum FlagStatusKind {
                active = 'active',
inactive = 'inactive',
enteredInError = 'enteredInError'
            }
const FlagStatusKindKeys = t.keyof({
                [FlagStatusKind.active]: null,
[FlagStatusKind.inactive]: null,
[FlagStatusKind.enteredInError]: null
            });


        const mandatory = t.type({
           resourceType: t.string,
code: RTTI_CodeableConcept,
subject: RTTI_Reference
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
status: FlagStatusKindKeys,
_status: RTTI_Element,
category: t.array(RTTI_CodeableConcept),
period: RTTI_Period,
encounter: RTTI_Reference,
author: RTTI_Reference
        });
        

        export var RTTI_Flag:any = t.intersection([mandatory, partial]);
        

export type IFlag = t.TypeOf<typeof RTTI_Flag>;
        
        