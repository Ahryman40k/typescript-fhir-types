
import * as t from 'io-ts';
import { RTTI_Extension } from './RTTI_Extension';
import { RTTI_Element } from './RTTI_Element';
import { RTTI_CodeableConcept } from './RTTI_CodeableConcept';
import { RTTI_Contract_Subject } from './RTTI_Contract_Subject';

import { RTTI_Reference } from './RTTI_Reference';
import { RTTI_Period } from './RTTI_Period';
import { RTTI_Timing } from './RTTI_Timing';
import { RTTI_Annotation } from './RTTI_Annotation';




const mandatory = t.type({
        type: RTTI_CodeableConcept,
        intent: RTTI_CodeableConcept,
        status: RTTI_CodeableConcept
});


const partial = t.partial({
        id: t.string,
        extension: t.array(RTTI_Extension),
        modifierExtension: t.array(RTTI_Extension),
        doNotPerform: t.boolean,
        _doNotPerform: RTTI_Element,
        subject: t.array(RTTI_Contract_Subject),
        linkId: t.array(t.string),
        _linkId: t.array(RTTI_Element),
        context: RTTI_Reference,
        contextLinkId: t.array(t.string),
        _contextLinkId: t.array(RTTI_Element),
        occurrenceDateTime: t.string,
        _occurrenceDateTime: RTTI_Element,
        occurrencePeriod: RTTI_Period,
        occurrenceTiming: RTTI_Timing,
        requester: t.array(RTTI_Reference),
        requesterLinkId: t.array(t.string),
        _requesterLinkId: t.array(RTTI_Element),
        performerType: t.array(RTTI_CodeableConcept),
        performerRole: RTTI_CodeableConcept,
        performer: RTTI_Reference,
        performerLinkId: t.array(t.string),
        _performerLinkId: t.array(RTTI_Element),
        reasonCode: t.array(RTTI_CodeableConcept),
        reasonReference: t.array(RTTI_Reference),
        reason: t.array(t.string),
        _reason: t.array(RTTI_Element),
        reasonLinkId: t.array(t.string),
        _reasonLinkId: t.array(RTTI_Element),
        note: t.array(RTTI_Annotation),
        securityLabelNumber: t.array(t.number),
        _securityLabelNumber: t.array(RTTI_Element)
});


export var RTTI_Contract_Action:any = t.intersection([mandatory, partial]);


export type IContract_Action = t.TypeOf<typeof RTTI_Contract_Action>;

