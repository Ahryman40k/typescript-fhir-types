
import * as t from 'io-ts';
import {RTTI_Meta} from './RTTI_Meta';
import {RTTI_Element} from './RTTI_Element';
import {RTTI_Narrative} from './RTTI_Narrative';
import {ResourceList} from '../Union/ResourceList';
import {RTTI_Extension} from './RTTI_Extension';
import {RTTI_ContactDetail} from './RTTI_ContactDetail';
import {RTTI_UsageContext} from './RTTI_UsageContext';
import {RTTI_CompartmentDefinition_Resource} from './RTTI_CompartmentDefinition_Resource';

export enum CompartmentDefinitionStatusKind {
                draft = 'draft',
active = 'active',
retired = 'retired',
unknown = 'unknown'
            }
export enum CompartmentDefinitionCodeKind {
                patient = 'patient',
encounter = 'encounter',
relatedPerson = 'relatedPerson',
practitioner = 'practitioner',
device = 'device'
            }
const CompartmentDefinitionStatusKindKeys = t.keyof({
                [CompartmentDefinitionStatusKind.draft]: null,
[CompartmentDefinitionStatusKind.active]: null,
[CompartmentDefinitionStatusKind.retired]: null,
[CompartmentDefinitionStatusKind.unknown]: null
            });
const CompartmentDefinitionCodeKindKeys = t.keyof({
                [CompartmentDefinitionCodeKind.patient]: null,
[CompartmentDefinitionCodeKind.encounter]: null,
[CompartmentDefinitionCodeKind.relatedPerson]: null,
[CompartmentDefinitionCodeKind.practitioner]: null,
[CompartmentDefinitionCodeKind.device]: null
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
status: CompartmentDefinitionStatusKindKeys,
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
purpose: t.string,
_purpose: RTTI_Element,
code: CompartmentDefinitionCodeKindKeys,
_code: RTTI_Element,
search: t.boolean,
_search: RTTI_Element,
resource: t.array(RTTI_CompartmentDefinition_Resource)
        });
        

        export var RTTI_CompartmentDefinition:any = t.intersection([mandatory, partial]);
        

export type ICompartmentDefinition = t.TypeOf<typeof RTTI_CompartmentDefinition>;
        
        