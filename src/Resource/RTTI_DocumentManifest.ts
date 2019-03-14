
import * as t from 'io-ts';
import {RTTI_Meta} from './RTTI_Meta';
import {RTTI_Element} from './RTTI_Element';
import {RTTI_Narrative} from './RTTI_Narrative';
import {ResourceList} from '../Union/ResourceList';
import {RTTI_Extension} from './RTTI_Extension';
import {RTTI_Identifier} from './RTTI_Identifier';
import {RTTI_CodeableConcept} from './RTTI_CodeableConcept';
import {RTTI_Reference} from './RTTI_Reference';
import {RTTI_DocumentManifest_Agent} from './RTTI_DocumentManifest_Agent';
import {RTTI_DocumentManifest_Related} from './RTTI_DocumentManifest_Related';

export enum DocumentManifestStatusKind {
                current = 'current',
superseded = 'superseded',
enteredInError = 'enteredInError'
            }
const DocumentManifestStatusKindKeys = t.keyof({
                [DocumentManifestStatusKind.current]: null,
[DocumentManifestStatusKind.superseded]: null,
[DocumentManifestStatusKind.enteredInError]: null
            });


        const mandatory = t.type({
           resourceType: t.string,
content: t.array(RTTI_Reference)
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
status: DocumentManifestStatusKindKeys,
_status: RTTI_Element,
type: RTTI_CodeableConcept,
subject: RTTI_Reference,
created: t.string,
_created: RTTI_Element,
agent: t.array(RTTI_DocumentManifest_Agent),
recipient: t.array(RTTI_Reference),
source: t.string,
_source: RTTI_Element,
description: t.string,
_description: RTTI_Element,
related: t.array(RTTI_DocumentManifest_Related)
        });
        

        export var RTTI_DocumentManifest:any = t.intersection([mandatory, partial]);
        

export type IDocumentManifest = t.TypeOf<typeof RTTI_DocumentManifest>;
        
        