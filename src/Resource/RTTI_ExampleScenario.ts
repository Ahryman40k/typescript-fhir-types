
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
import {RTTI_ExampleScenario_Actor} from './RTTI_ExampleScenario_Actor';
import {RTTI_ExampleScenario_Instance} from './RTTI_ExampleScenario_Instance';
import {RTTI_ExampleScenario_Process} from './RTTI_ExampleScenario_Process';


export enum ExampleScenarioStatusKind {
                draft = 'draft',
active = 'active',
retired = 'retired',
unknown = 'unknown'
            }
const ExampleScenarioStatusKindKeys = t.keyof({
                [ExampleScenarioStatusKind.draft]: null,
[ExampleScenarioStatusKind.active]: null,
[ExampleScenarioStatusKind.retired]: null,
[ExampleScenarioStatusKind.unknown]: null
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
status: ExampleScenarioStatusKindKeys,
_status: RTTI_Element,
experimental: t.boolean,
_experimental: RTTI_Element,
date: t.string,
_date: RTTI_Element,
publisher: t.string,
_publisher: RTTI_Element,
contact: t.array(RTTI_ContactDetail),
useContext: t.array(RTTI_UsageContext),
jurisdiction: t.array(RTTI_CodeableConcept),
copyright: t.string,
_copyright: RTTI_Element,
purpose: t.string,
_purpose: RTTI_Element,
actor: t.array(RTTI_ExampleScenario_Actor),
instance: t.array(RTTI_ExampleScenario_Instance),
process: t.array(RTTI_ExampleScenario_Process),
workflow: t.array(t.string)
        });
        

        export var RTTI_ExampleScenario:any = t.intersection([mandatory, partial]);
        

export type IExampleScenario = t.TypeOf<typeof RTTI_ExampleScenario>;
        
        