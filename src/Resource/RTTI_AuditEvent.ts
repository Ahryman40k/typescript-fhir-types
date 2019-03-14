
import * as t from 'io-ts';
import { RTTI_Meta } from './RTTI_Meta';
import { RTTI_Element } from './RTTI_Element';
import { RTTI_Narrative } from './RTTI_Narrative';
import { ResourceList } from '../Union/ResourceList';
import { RTTI_Extension } from './RTTI_Extension';
import { RTTI_Coding } from './RTTI_Coding';
import { RTTI_Period } from './RTTI_Period';
import { RTTI_CodeableConcept } from './RTTI_CodeableConcept';
import { RTTI_AuditEvent_Agent } from './RTTI_AuditEvent_Agent';
import { RTTI_AuditEvent_Source } from './RTTI_AuditEvent_Source';
import { RTTI_AuditEvent_Entity } from './RTTI_AuditEvent_Entity';

export enum AuditEventActionKind {
    c = 'c',
    r = 'r',
    u = 'u',
    d = 'd',
    e = 'e'
}
export enum AuditEventOutcomeKind {
    zero = '0',
    four = '4',
    eight = '8',
    twelve = '12'
}
const AuditEventActionKindKeys = t.keyof({
    [AuditEventActionKind.c]: null,
    [AuditEventActionKind.r]: null,
    [AuditEventActionKind.u]: null,
    [AuditEventActionKind.d]: null,
    [AuditEventActionKind.e]: null
});
const AuditEventOutcomeKindKeys = t.keyof({
    [AuditEventOutcomeKind.zero]: null,
    [AuditEventOutcomeKind.four]: null,
    [AuditEventOutcomeKind.eight]: null,
    [AuditEventOutcomeKind.twelve]: null
});


const mandatory = t.type({
    resourceType: t.string,
    type: RTTI_Coding,
    agent: t.array(RTTI_AuditEvent_Agent),
    source: RTTI_AuditEvent_Source
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
    subtype: t.array(RTTI_Coding),
    action: AuditEventActionKindKeys,
    _action: RTTI_Element,
    period: RTTI_Period,
    recorded: t.string,
    _recorded: RTTI_Element,
    outcome: AuditEventOutcomeKindKeys,
    _outcome: RTTI_Element,
    outcomeDesc: t.string,
    _outcomeDesc: RTTI_Element,
    purposeOfEvent: t.array(RTTI_CodeableConcept),
    entity: t.array(RTTI_AuditEvent_Entity)
});


export var RTTI_AuditEvent:any = t.intersection([mandatory, partial]);


export type IAuditEvent = t.TypeOf<typeof RTTI_AuditEvent>;

