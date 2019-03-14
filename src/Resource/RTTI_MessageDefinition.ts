
import * as t from 'io-ts';
import {RTTI_Meta} from './RTTI_Meta';
import {RTTI_Element} from './RTTI_Element';
import {RTTI_Narrative} from './RTTI_Narrative';
import {ResourceList} from '../Union/ResourceList';
import {RTTI_Extension} from './RTTI_Extension';
import {RTTI_Identifier} from './RTTI_Identifier';

import {RTTI_ContactDetail} from './RTTI_ContactDetail';
import {RTTI_UsageContext} from './RTTI_UsageContext';
import {RTTI_CodeableConcept} from './RTTI_CodeableConcept';
import {RTTI_Coding} from './RTTI_Coding';
import {RTTI_MessageDefinition_Focus} from './RTTI_MessageDefinition_Focus';
import {RTTI_MessageDefinition_AllowedResponse} from './RTTI_MessageDefinition_AllowedResponse';

export enum MessageDefinitionStatusKind {
                draft = 'draft',
active = 'active',
retired = 'retired',
unknown = 'unknown'
            }
export enum MessageDefinitionCategoryKind {
                consequence = 'consequence',
currency = 'currency',
notification = 'notification'
            }
export enum MessageDefinitionResponseRequiredKind {
                always = 'always',
onError = 'onError',
never = 'never',
onSuccess = 'onSuccess'
            }
const MessageDefinitionStatusKindKeys = t.keyof({
                [MessageDefinitionStatusKind.draft]: null,
[MessageDefinitionStatusKind.active]: null,
[MessageDefinitionStatusKind.retired]: null,
[MessageDefinitionStatusKind.unknown]: null
            });
const MessageDefinitionCategoryKindKeys = t.keyof({
                [MessageDefinitionCategoryKind.consequence]: null,
[MessageDefinitionCategoryKind.currency]: null,
[MessageDefinitionCategoryKind.notification]: null
            });
const MessageDefinitionResponseRequiredKindKeys = t.keyof({
                [MessageDefinitionResponseRequiredKind.always]: null,
[MessageDefinitionResponseRequiredKind.onError]: null,
[MessageDefinitionResponseRequiredKind.never]: null,
[MessageDefinitionResponseRequiredKind.onSuccess]: null
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
url: t.string,
_url: RTTI_Element,
identifier: t.array(RTTI_Identifier),
version: t.string,
_version: RTTI_Element,
name: t.string,
_name: RTTI_Element,
title: t.string,
_title: RTTI_Element,
replaces: t.array(t.string),
status: MessageDefinitionStatusKindKeys,
_status: RTTI_Element,
experimental: t.boolean,
_experimental: RTTI_Element,
date: t.string,
_date: RTTI_Element,
publisher: t.string,
_publisher: RTTI_Element,
contact: t.array(RTTI_ContactDetail),
description: t.string,
_description: RTTI_Element,
useContext: t.array(RTTI_UsageContext),
jurisdiction: t.array(RTTI_CodeableConcept),
purpose: t.string,
_purpose: RTTI_Element,
copyright: t.string,
_copyright: RTTI_Element,
base: t.string,
parent: t.array(t.string),
eventCoding: RTTI_Coding,
eventUri: t.string,
_eventUri: RTTI_Element,
category: MessageDefinitionCategoryKindKeys,
_category: RTTI_Element,
focus: t.array(RTTI_MessageDefinition_Focus),
responseRequired: MessageDefinitionResponseRequiredKindKeys,
_responseRequired: RTTI_Element,
allowedResponse: t.array(RTTI_MessageDefinition_AllowedResponse),
graph: t.array(t.string)
        });
        

        export var RTTI_MessageDefinition:any = t.intersection([mandatory, partial]);
        

export type IMessageDefinition = t.TypeOf<typeof RTTI_MessageDefinition>;
        
        