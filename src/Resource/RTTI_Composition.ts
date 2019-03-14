
import * as t from 'io-ts';
import { RTTI_Meta } from './RTTI_Meta';
import { RTTI_Element } from './RTTI_Element';
import { RTTI_Narrative } from './RTTI_Narrative';
import { ResourceList } from '../Union/ResourceList';
import { RTTI_Extension } from './RTTI_Extension';
import { RTTI_Identifier } from './RTTI_Identifier';
import { RTTI_CodeableConcept } from './RTTI_CodeableConcept';
import { RTTI_Reference } from './RTTI_Reference';
import { RTTI_Composition_Attester } from './RTTI_Composition_Attester';
import { RTTI_Composition_RelatesTo } from './RTTI_Composition_RelatesTo';
import { RTTI_Composition_Event } from './RTTI_Composition_Event';
import { RTTI_Composition_Section } from './RTTI_Composition_Section';

export enum CompositionStatusKind {
        preliminary = 'preliminary',
        final = 'final',
        amended = 'amended',
        enteredInError = 'enteredInError'
}
const CompositionStatusKindKeys = t.keyof({
        [CompositionStatusKind.preliminary]: null,
        [CompositionStatusKind.final]: null,
        [CompositionStatusKind.amended]: null,
        [CompositionStatusKind.enteredInError]: null
});


const mandatory = t.type({
        resourceType: t.string,
        type: RTTI_CodeableConcept,
        author: t.array(RTTI_Reference)
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
        identifier: RTTI_Identifier,
        status: CompositionStatusKindKeys,
        _status: RTTI_Element,
        category: t.array(RTTI_CodeableConcept),
        subject: RTTI_Reference,
        encounter: RTTI_Reference,
        date: t.string,
        _date: RTTI_Element,
        title: t.string,
        _title: RTTI_Element,
        confidentiality: t.string,
        _confidentiality: RTTI_Element,
        attester: t.array(RTTI_Composition_Attester),
        custodian: RTTI_Reference,
        relatesTo: t.array(RTTI_Composition_RelatesTo),
        event: t.array(RTTI_Composition_Event),
        section: t.array(RTTI_Composition_Section)
});


export var RTTI_Composition:any = t.intersection([mandatory, partial]);


export type IComposition = t.TypeOf<typeof RTTI_Composition>;

