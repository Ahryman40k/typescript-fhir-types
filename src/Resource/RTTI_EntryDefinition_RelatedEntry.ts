
import * as t from 'io-ts';
import {RTTI_Extension} from './RTTI_Extension';
import {RTTI_Element} from './RTTI_Element';
import {RTTI_Reference} from './RTTI_Reference';

export enum EntryDefinition_RelatedEntryRelationtypeKind {
                hasInput = 'hasInput',
hasOutput = 'hasOutput',
uses = 'uses',
triggers = 'triggers',
isReplacedBy = 'isReplacedBy'
            }
const EntryDefinition_RelatedEntryRelationtypeKindKeys = t.keyof({
                [EntryDefinition_RelatedEntryRelationtypeKind.hasInput]: null,
[EntryDefinition_RelatedEntryRelationtypeKind.hasOutput]: null,
[EntryDefinition_RelatedEntryRelationtypeKind.uses]: null,
[EntryDefinition_RelatedEntryRelationtypeKind.triggers]: null,
[EntryDefinition_RelatedEntryRelationtypeKind.isReplacedBy]: null
            });


        const mandatory = t.type({
           item: RTTI_Reference
        });
        

        const partial = t.partial({
            id: t.string,
extension: t.array(RTTI_Extension),
modifierExtension: t.array(RTTI_Extension),
relationtype: EntryDefinition_RelatedEntryRelationtypeKindKeys,
_relationtype: RTTI_Element
        });
        

        export var RTTI_EntryDefinition_RelatedEntry:any = t.intersection([mandatory, partial]);
        

export type IEntryDefinition_RelatedEntry = t.TypeOf<typeof RTTI_EntryDefinition_RelatedEntry>;
        
        