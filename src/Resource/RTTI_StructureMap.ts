
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
import {RTTI_StructureMap_Structure} from './RTTI_StructureMap_Structure';

import {RTTI_StructureMap_Group} from './RTTI_StructureMap_Group';

export enum StructureMapStatusKind {
                draft = 'draft',
active = 'active',
retired = 'retired',
unknown = 'unknown'
            }
const StructureMapStatusKindKeys = t.keyof({
                [StructureMapStatusKind.draft]: null,
[StructureMapStatusKind.active]: null,
[StructureMapStatusKind.retired]: null,
[StructureMapStatusKind.unknown]: null
            });


        const mandatory = t.type({
           resourceType: t.string,
group: t.array(RTTI_StructureMap_Group)
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
status: StructureMapStatusKindKeys,
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
structure: t.array(RTTI_StructureMap_Structure),
import: t.array(t.string)
        });
        

        export var RTTI_StructureMap:any = t.intersection([mandatory, partial]);
        

export type IStructureMap = t.TypeOf<typeof RTTI_StructureMap>;
        
        