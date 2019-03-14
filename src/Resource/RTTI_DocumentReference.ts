
import * as t from 'io-ts';
import {RTTI_Meta} from './RTTI_Meta';
import {RTTI_Element} from './RTTI_Element';
import {RTTI_Narrative} from './RTTI_Narrative';
import {ResourceList} from '../Union/ResourceList';
import {RTTI_Extension} from './RTTI_Extension';
import {RTTI_Identifier} from './RTTI_Identifier';
import {RTTI_CodeableConcept} from './RTTI_CodeableConcept';
import {RTTI_Reference} from './RTTI_Reference';
import {RTTI_DocumentReference_Agent} from './RTTI_DocumentReference_Agent';
import {RTTI_DocumentReference_RelatesTo} from './RTTI_DocumentReference_RelatesTo';
import {RTTI_DocumentReference_Content} from './RTTI_DocumentReference_Content';
import {RTTI_DocumentReference_Context} from './RTTI_DocumentReference_Context';

export enum DocumentReferenceStatusKind {
                current = 'current',
superseded = 'superseded',
enteredInError = 'enteredInError'
            }
const DocumentReferenceStatusKindKeys = t.keyof({
                [DocumentReferenceStatusKind.current]: null,
[DocumentReferenceStatusKind.superseded]: null,
[DocumentReferenceStatusKind.enteredInError]: null
            });


        const mandatory = t.type({
           resourceType: t.string,
content: t.array(RTTI_DocumentReference_Content)
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
masterIdentifier: RTTI_Identifier,
identifier: t.array(RTTI_Identifier),
status: DocumentReferenceStatusKindKeys,
_status: RTTI_Element,
docStatus: t.string,
_docStatus: RTTI_Element,
type: RTTI_CodeableConcept,
category: t.array(RTTI_CodeableConcept),
subject: RTTI_Reference,
date: t.string,
_date: RTTI_Element,
agent: t.array(RTTI_DocumentReference_Agent),
authenticator: RTTI_Reference,
custodian: RTTI_Reference,
relatesTo: t.array(RTTI_DocumentReference_RelatesTo),
description: t.string,
_description: RTTI_Element,
securityLabel: t.array(RTTI_CodeableConcept),
context: RTTI_DocumentReference_Context
        });
        

        export var RTTI_DocumentReference:any = t.intersection([mandatory, partial]);
        

export type IDocumentReference = t.TypeOf<typeof RTTI_DocumentReference>;
        
        