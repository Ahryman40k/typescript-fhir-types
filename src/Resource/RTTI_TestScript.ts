
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
import {RTTI_TestScript_Origin} from './RTTI_TestScript_Origin';
import {RTTI_TestScript_Destination} from './RTTI_TestScript_Destination';
import {RTTI_TestScript_Metadata} from './RTTI_TestScript_Metadata';
import {RTTI_TestScript_Fixture} from './RTTI_TestScript_Fixture';
import {RTTI_Reference} from './RTTI_Reference';
import {RTTI_TestScript_Variable} from './RTTI_TestScript_Variable';
import {RTTI_TestScript_Rule} from './RTTI_TestScript_Rule';
import {RTTI_TestScript_Ruleset} from './RTTI_TestScript_Ruleset';
import {RTTI_TestScript_Setup} from './RTTI_TestScript_Setup';
import {RTTI_TestScript_Test} from './RTTI_TestScript_Test';
import {RTTI_TestScript_Teardown} from './RTTI_TestScript_Teardown';

export enum TestScriptStatusKind {
                draft = 'draft',
active = 'active',
retired = 'retired',
unknown = 'unknown'
            }
const TestScriptStatusKindKeys = t.keyof({
                [TestScriptStatusKind.draft]: null,
[TestScriptStatusKind.active]: null,
[TestScriptStatusKind.retired]: null,
[TestScriptStatusKind.unknown]: null
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
identifier: RTTI_Identifier,
version: t.string,
_version: RTTI_Element,
name: t.string,
_name: RTTI_Element,
title: t.string,
_title: RTTI_Element,
status: TestScriptStatusKindKeys,
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
origin: t.array(RTTI_TestScript_Origin),
destination: t.array(RTTI_TestScript_Destination),
metadata: RTTI_TestScript_Metadata,
fixture: t.array(RTTI_TestScript_Fixture),
profile: t.array(RTTI_Reference),
variable: t.array(RTTI_TestScript_Variable),
rule: t.array(RTTI_TestScript_Rule),
ruleset: t.array(RTTI_TestScript_Ruleset),
setup: RTTI_TestScript_Setup,
test: t.array(RTTI_TestScript_Test),
teardown: RTTI_TestScript_Teardown
        });
        

        export var RTTI_TestScript:any = t.intersection([mandatory, partial]);
        

export type ITestScript = t.TypeOf<typeof RTTI_TestScript>;
        
        