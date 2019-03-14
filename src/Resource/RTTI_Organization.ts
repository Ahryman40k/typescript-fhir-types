
import * as t from 'io-ts';
import {RTTI_Meta} from './RTTI_Meta';
import {RTTI_Element} from './RTTI_Element';
import {RTTI_Narrative} from './RTTI_Narrative';
import {ResourceList} from '../Union/ResourceList';
import {RTTI_Extension} from './RTTI_Extension';
import {RTTI_Identifier} from './RTTI_Identifier';
import {RTTI_CodeableConcept} from './RTTI_CodeableConcept';

import {RTTI_ContactPoint} from './RTTI_ContactPoint';
import {RTTI_Address} from './RTTI_Address';
import {RTTI_Reference} from './RTTI_Reference';
import {RTTI_Organization_Contact} from './RTTI_Organization_Contact';




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
identifier: t.array(RTTI_Identifier),
active: t.boolean,
_active: RTTI_Element,
type: t.array(RTTI_CodeableConcept),
name: t.string,
_name: RTTI_Element,
alias: t.array(t.string),
_alias: t.array(RTTI_Element),
telecom: t.array(RTTI_ContactPoint),
address: t.array(RTTI_Address),
partOf: RTTI_Reference,
contact: t.array(RTTI_Organization_Contact),
endpoint: t.array(RTTI_Reference)
        });
        

        export var RTTI_Organization:any = t.intersection([mandatory, partial]);
        

export type IOrganization = t.TypeOf<typeof RTTI_Organization>;
        
        