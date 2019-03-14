
import * as t from 'io-ts';
import {RTTI_Meta} from './RTTI_Meta';
import {RTTI_Element} from './RTTI_Element';
import {RTTI_Narrative} from './RTTI_Narrative';
import {ResourceList} from '../Union/ResourceList';
import {RTTI_Extension} from './RTTI_Extension';
import {RTTI_Identifier} from './RTTI_Identifier';
import {RTTI_Coding} from './RTTI_Coding';

import {RTTI_CodeableConcept} from './RTTI_CodeableConcept';
import {RTTI_ContactPoint} from './RTTI_ContactPoint';
import {RTTI_Address} from './RTTI_Address';
import {RTTI_Location_Position} from './RTTI_Location_Position';
import {RTTI_Reference} from './RTTI_Reference';
import {RTTI_Location_HoursOfOperation} from './RTTI_Location_HoursOfOperation';

export enum LocationStatusKind {
                active = 'active',
suspended = 'suspended',
inactive = 'inactive'
            }
export enum LocationModeKind {
                instance = 'instance',
kind = 'kind'
            }
const LocationStatusKindKeys = t.keyof({
                [LocationStatusKind.active]: null,
[LocationStatusKind.suspended]: null,
[LocationStatusKind.inactive]: null
            });
const LocationModeKindKeys = t.keyof({
                [LocationModeKind.instance]: null,
[LocationModeKind.kind]: null
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
identifier: t.array(RTTI_Identifier),
status: LocationStatusKindKeys,
_status: RTTI_Element,
operationalStatus: RTTI_Coding,
name: t.string,
_name: RTTI_Element,
alias: t.array(t.string),
_alias: t.array(RTTI_Element),
description: t.string,
_description: RTTI_Element,
mode: LocationModeKindKeys,
_mode: RTTI_Element,
type: t.array(RTTI_CodeableConcept),
telecom: t.array(RTTI_ContactPoint),
address: RTTI_Address,
physicalType: RTTI_CodeableConcept,
position: RTTI_Location_Position,
managingOrganization: RTTI_Reference,
partOf: RTTI_Reference,
hoursOfOperation: t.array(RTTI_Location_HoursOfOperation),
availabilityExceptions: t.string,
_availabilityExceptions: RTTI_Element,
endpoint: t.array(RTTI_Reference)
        });
        

        export var RTTI_Location:any = t.intersection([mandatory, partial]);
        

export type ILocation = t.TypeOf<typeof RTTI_Location>;
        
        