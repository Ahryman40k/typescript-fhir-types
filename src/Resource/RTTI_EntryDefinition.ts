
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
import {RTTI_EntryDefinition_RelatedEntry} from './RTTI_EntryDefinition_RelatedEntry';

export enum EntryDefinitionStatusKind {
                draft = 'draft',
active = 'active',
retired = 'retired',
unknown = 'unknown'
            }
const EntryDefinitionStatusKindKeys = t.keyof({
                [EntryDefinitionStatusKind.draft]: null,
[EntryDefinitionStatusKind.active]: null,
[EntryDefinitionStatusKind.retired]: null,
[EntryDefinitionStatusKind.unknown]: null
            });


        const mandatory = t.type({
           resourceType: t.string,
referencedItem: RTTI_Reference
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
type: RTTI_CodeableConcept,
orderable: t.boolean,
_orderable: RTTI_Element,
additionalIdentifier: t.array(RTTI_Identifier),
classification: t.array(RTTI_CodeableConcept),
status: EntryDefinitionStatusKindKeys,
_status: RTTI_Element,
validityPeriod: RTTI_Period,
lastUpdated: t.string,
_lastUpdated: RTTI_Element,
additionalCharacteristic: t.array(RTTI_CodeableConcept),
additionalClassification: t.array(RTTI_CodeableConcept),
relatedEntry: t.array(RTTI_EntryDefinition_RelatedEntry)
        });
        

        export var RTTI_EntryDefinition:any = t.intersection([mandatory, partial]);
        

export type IEntryDefinition = t.TypeOf<typeof RTTI_EntryDefinition>;
        
        