
import * as t from 'io-ts';
import { RTTI_Meta } from './RTTI_Meta';
import { RTTI_Element } from './RTTI_Element';
import { RTTI_Narrative } from './RTTI_Narrative';
import { ResourceList } from '../Union/ResourceList';
import { RTTI_Extension } from './RTTI_Extension';
import { RTTI_Reference } from './RTTI_Reference';

import { RTTI_CodeableConcept } from './RTTI_CodeableConcept';
import { RTTI_Timing } from './RTTI_Timing';
import { RTTI_VerificationResult_PrimarySource } from './RTTI_VerificationResult_PrimarySource';
import { RTTI_VerificationResult_Attestation } from './RTTI_VerificationResult_Attestation';
import { RTTI_VerificationResult_Validator } from './RTTI_VerificationResult_Validator';




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
        target: t.array(RTTI_Reference),
        targetLocation: t.array(t.string),
        _targetLocation: t.array(RTTI_Element),
        need: RTTI_CodeableConcept,
        status: t.string,
        _status: RTTI_Element,
        statusDate: t.string,
        _statusDate: RTTI_Element,
        validationType: RTTI_CodeableConcept,
        validationProcess: t.array(RTTI_CodeableConcept),
        frequency: RTTI_Timing,
        lastPerformed: t.string,
        _lastPerformed: RTTI_Element,
        nextScheduled: t.string,
        _nextScheduled: RTTI_Element,
        failureAction: RTTI_CodeableConcept,
        primarySource: t.array(RTTI_VerificationResult_PrimarySource),
        attestation: RTTI_VerificationResult_Attestation,
        validator: t.array(RTTI_VerificationResult_Validator)
});


export var RTTI_VerificationResult: any = t.intersection([mandatory, partial]);


export type IVerificationResult = t.TypeOf<typeof RTTI_VerificationResult>;

