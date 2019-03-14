
import * as t from 'io-ts';
import {RTTI_Meta} from './RTTI_Meta';
import {RTTI_Element} from './RTTI_Element';
import {RTTI_Narrative} from './RTTI_Narrative';
import {ResourceList} from '../Union/ResourceList';
import {RTTI_Extension} from './RTTI_Extension';
import {RTTI_ContactDetail} from './RTTI_ContactDetail';
import {RTTI_UsageContext} from './RTTI_UsageContext';
import {RTTI_CodeableConcept} from './RTTI_CodeableConcept';
import {RTTI_TerminologyCapabilities_Software} from './RTTI_TerminologyCapabilities_Software';
import {RTTI_TerminologyCapabilities_Implementation} from './RTTI_TerminologyCapabilities_Implementation';
import {RTTI_TerminologyCapabilities_CodeSystem} from './RTTI_TerminologyCapabilities_CodeSystem';
import {RTTI_TerminologyCapabilities_Expansion} from './RTTI_TerminologyCapabilities_Expansion';
import {RTTI_TerminologyCapabilities_ValidateCode} from './RTTI_TerminologyCapabilities_ValidateCode';
import {RTTI_TerminologyCapabilities_Translation} from './RTTI_TerminologyCapabilities_Translation';
import {RTTI_TerminologyCapabilities_Closure} from './RTTI_TerminologyCapabilities_Closure';

export enum TerminologyCapabilitiesStatusKind {
                draft = 'draft',
active = 'active',
retired = 'retired',
unknown = 'unknown'
            }
export enum TerminologyCapabilitiesCodeSearchKind {
                explicit = 'explicit',
all = 'all'
            }
const TerminologyCapabilitiesStatusKindKeys = t.keyof({
                [TerminologyCapabilitiesStatusKind.draft]: null,
[TerminologyCapabilitiesStatusKind.active]: null,
[TerminologyCapabilitiesStatusKind.retired]: null,
[TerminologyCapabilitiesStatusKind.unknown]: null
            });
const TerminologyCapabilitiesCodeSearchKindKeys = t.keyof({
                [TerminologyCapabilitiesCodeSearchKind.explicit]: null,
[TerminologyCapabilitiesCodeSearchKind.all]: null
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
status: TerminologyCapabilitiesStatusKindKeys,
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
kind: t.string,
_kind: RTTI_Element,
software: RTTI_TerminologyCapabilities_Software,
implementation: RTTI_TerminologyCapabilities_Implementation,
lockedDate: t.boolean,
_lockedDate: RTTI_Element,
codeSystem: t.array(RTTI_TerminologyCapabilities_CodeSystem),
expansion: RTTI_TerminologyCapabilities_Expansion,
codeSearch: TerminologyCapabilitiesCodeSearchKindKeys,
_codeSearch: RTTI_Element,
validateCode: RTTI_TerminologyCapabilities_ValidateCode,
translation: RTTI_TerminologyCapabilities_Translation,
closure: RTTI_TerminologyCapabilities_Closure
        });
        

        export var RTTI_TerminologyCapabilities:any = t.intersection([mandatory, partial]);
        

export type ITerminologyCapabilities = t.TypeOf<typeof RTTI_TerminologyCapabilities>;
        
        