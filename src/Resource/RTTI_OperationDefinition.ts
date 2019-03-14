
import * as t from 'io-ts';
import {RTTI_Meta} from './RTTI_Meta';
import {RTTI_Element} from './RTTI_Element';
import {RTTI_Narrative} from './RTTI_Narrative';
import {ResourceList} from '../Union/ResourceList';
import {RTTI_Extension} from './RTTI_Extension';
import {RTTI_ContactDetail} from './RTTI_ContactDetail';
import {RTTI_UsageContext} from './RTTI_UsageContext';
import {RTTI_CodeableConcept} from './RTTI_CodeableConcept';

import {RTTI_OperationDefinition_Parameter} from './RTTI_OperationDefinition_Parameter';
import {RTTI_OperationDefinition_Overload} from './RTTI_OperationDefinition_Overload';

export enum OperationDefinitionStatusKind {
                draft = 'draft',
active = 'active',
retired = 'retired',
unknown = 'unknown'
            }
export enum OperationDefinitionKindKind {
                operation = 'operation',
query = 'query'
            }
const OperationDefinitionStatusKindKeys = t.keyof({
                [OperationDefinitionStatusKind.draft]: null,
[OperationDefinitionStatusKind.active]: null,
[OperationDefinitionStatusKind.retired]: null,
[OperationDefinitionStatusKind.unknown]: null
            });
const OperationDefinitionKindKindKeys = t.keyof({
                [OperationDefinitionKindKind.operation]: null,
[OperationDefinitionKindKind.query]: null
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
version: t.string,
_version: RTTI_Element,
name: t.string,
_name: RTTI_Element,
title: t.string,
_title: RTTI_Element,
status: OperationDefinitionStatusKindKeys,
_status: RTTI_Element,
kind: OperationDefinitionKindKindKeys,
_kind: RTTI_Element,
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
affectsState: t.boolean,
_affectsState: RTTI_Element,
code: t.string,
_code: RTTI_Element,
comment: t.string,
_comment: RTTI_Element,
base: t.string,
resource: t.array(t.string),
_resource: t.array(RTTI_Element),
system: t.boolean,
_system: RTTI_Element,
type: t.boolean,
_type: RTTI_Element,
instance: t.boolean,
_instance: RTTI_Element,
inputProfile: t.string,
outputProfile: t.string,
parameter: t.array(RTTI_OperationDefinition_Parameter),
overload: t.array(RTTI_OperationDefinition_Overload)
        });
        

        export var RTTI_OperationDefinition:any = t.intersection([mandatory, partial]);
        

export type IOperationDefinition = t.TypeOf<typeof RTTI_OperationDefinition>;
        
        