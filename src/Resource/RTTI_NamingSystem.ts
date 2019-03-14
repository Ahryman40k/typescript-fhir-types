
import * as t from 'io-ts';
import {RTTI_Meta} from './RTTI_Meta';
import {RTTI_Element} from './RTTI_Element';
import {RTTI_Narrative} from './RTTI_Narrative';
import {ResourceList} from '../Union/ResourceList';
import {RTTI_Extension} from './RTTI_Extension';
import {RTTI_ContactDetail} from './RTTI_ContactDetail';
import {RTTI_CodeableConcept} from './RTTI_CodeableConcept';
import {RTTI_UsageContext} from './RTTI_UsageContext';
import {RTTI_NamingSystem_UniqueId} from './RTTI_NamingSystem_UniqueId';

export enum NamingSystemStatusKind {
                draft = 'draft',
active = 'active',
retired = 'retired',
unknown = 'unknown'
            }
export enum NamingSystemKindKind {
                codesystem = 'codesystem',
identifier = 'identifier',
root = 'root'
            }
const NamingSystemStatusKindKeys = t.keyof({
                [NamingSystemStatusKind.draft]: null,
[NamingSystemStatusKind.active]: null,
[NamingSystemStatusKind.retired]: null,
[NamingSystemStatusKind.unknown]: null
            });
const NamingSystemKindKindKeys = t.keyof({
                [NamingSystemKindKind.codesystem]: null,
[NamingSystemKindKind.identifier]: null,
[NamingSystemKindKind.root]: null
            });


        const mandatory = t.type({
           resourceType: t.string,
uniqueId: t.array(RTTI_NamingSystem_UniqueId)
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
name: t.string,
_name: RTTI_Element,
status: NamingSystemStatusKindKeys,
_status: RTTI_Element,
kind: NamingSystemKindKindKeys,
_kind: RTTI_Element,
date: t.string,
_date: RTTI_Element,
publisher: t.string,
_publisher: RTTI_Element,
contact: t.array(RTTI_ContactDetail),
responsible: t.string,
_responsible: RTTI_Element,
type: RTTI_CodeableConcept,
description: t.string,
_description: RTTI_Element,
useContext: t.array(RTTI_UsageContext),
jurisdiction: t.array(RTTI_CodeableConcept),
usage: t.string,
_usage: RTTI_Element
        });
        

        export var RTTI_NamingSystem:any = t.intersection([mandatory, partial]);
        

export type INamingSystem = t.TypeOf<typeof RTTI_NamingSystem>;
        
        