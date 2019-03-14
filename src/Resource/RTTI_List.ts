
import * as t from 'io-ts';
import {RTTI_Meta} from './RTTI_Meta';
import {RTTI_Element} from './RTTI_Element';
import {RTTI_Narrative} from './RTTI_Narrative';
import {ResourceList} from '../Union/ResourceList';
import {RTTI_Extension} from './RTTI_Extension';
import {RTTI_Identifier} from './RTTI_Identifier';
import {RTTI_CodeableConcept} from './RTTI_CodeableConcept';
import {RTTI_Reference} from './RTTI_Reference';
import {RTTI_Annotation} from './RTTI_Annotation';
import {RTTI_List_Entry} from './RTTI_List_Entry';

export enum ListStatusKind {
                current = 'current',
retired = 'retired',
enteredInError = 'enteredInError'
            }
export enum ListModeKind {
                working = 'working',
snapshot = 'snapshot',
changes = 'changes'
            }
const ListStatusKindKeys = t.keyof({
                [ListStatusKind.current]: null,
[ListStatusKind.retired]: null,
[ListStatusKind.enteredInError]: null
            });
const ListModeKindKeys = t.keyof({
                [ListModeKind.working]: null,
[ListModeKind.snapshot]: null,
[ListModeKind.changes]: null
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
status: ListStatusKindKeys,
_status: RTTI_Element,
mode: ListModeKindKeys,
_mode: RTTI_Element,
title: t.string,
_title: RTTI_Element,
code: RTTI_CodeableConcept,
subject: RTTI_Reference,
encounter: RTTI_Reference,
date: t.string,
_date: RTTI_Element,
source: RTTI_Reference,
orderedBy: RTTI_CodeableConcept,
note: t.array(RTTI_Annotation),
entry: t.array(RTTI_List_Entry),
emptyReason: RTTI_CodeableConcept
        });
        

        export var RTTI_List:any = t.intersection([mandatory, partial]);
        

export type IList = t.TypeOf<typeof RTTI_List>;
        
        