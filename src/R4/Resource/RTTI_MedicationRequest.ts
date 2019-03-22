
import * as t from 'io-ts';
import { RTTI_Meta, IMeta } from './RTTI_Meta';
import { RTTI_Element, IElement } from './RTTI_Element';
import { RTTI_Narrative, INarrative } from './RTTI_Narrative';
import { RTTI_ResourceList, IResourceList } from '../Union/RTTI_ResourceList';
import { RTTI_Extension, IExtension } from './RTTI_Extension';
import { RTTI_Identifier, IIdentifier } from './RTTI_Identifier';
import { RTTI_CodeableConcept, ICodeableConcept } from './RTTI_CodeableConcept';
import { RTTI_Reference, IReference } from './RTTI_Reference';

import { RTTI_Annotation, IAnnotation } from './RTTI_Annotation';
import { RTTI_Dosage, IDosage } from './RTTI_Dosage';
import { RTTI_MedicationRequest_DispenseRequest, IMedicationRequest_DispenseRequest } from './RTTI_MedicationRequest_DispenseRequest';
import { RTTI_MedicationRequest_Substitution, IMedicationRequest_Substitution } from './RTTI_MedicationRequest_Substitution';
import { createEnumType } from '../../EnumType';

export enum MedicationRequestStatusKind {
    active = 'active',
    onHold = 'on-hold',
    cancelled = 'cancelled',
    completed = 'completed',
    enteredInError = 'entered-in-error',
    stopped = 'stopped',
    draft = 'draft',
    unknown = 'unknown'
}
export enum MedicationRequestIntentKind {
    proposal = 'proposal',
    plan = 'plan',
    order = 'order',
    originalOrder = 'original-order',
    instanceOrder = 'instance-order',
    option = 'option'
}/*
const MedicationRequestStatusKindKeys = t.keyof({
    [MedicationRequestStatusKind.active]: null,
    [MedicationRequestStatusKind.onHold]: null,
    [MedicationRequestStatusKind.cancelled]: null,
    [MedicationRequestStatusKind.completed]: null,
    [MedicationRequestStatusKind.enteredInError]: null,
    [MedicationRequestStatusKind.stopped]: null,
    [MedicationRequestStatusKind.draft]: null,
    [MedicationRequestStatusKind.unknown]: null
});
const MedicationRequestIntentKindKeys = t.keyof({
    [MedicationRequestIntentKind.proposal]: null,
    [MedicationRequestIntentKind.plan]: null,
    [MedicationRequestIntentKind.order]: null,
    [MedicationRequestIntentKind.originalOrder]: null,
    [MedicationRequestIntentKind.instanceOrder]: null,
    [MedicationRequestIntentKind.option]: null
});*/


export interface IMedicationRequest {

    /**
     * This is a MedicationRequest resource
     */
    resourceType: 'MedicationRequest';


    /**
     * A link to a resource representing the person or set of individuals to whom the medication will be given.
     */
    subject: IReference;


    /**
     * The logical id of the resource, as used in the URL for the resource. Once assigned, this value never changes.
     */
    id?: string;


    /**
     * The metadata about the resource. This is content that is maintained by the infrastructure. Changes to the content might not always be associated with version changes to the resource.
     */
    meta?: IMeta;


    /**
     * A reference to a set of rules that were followed when the resource was constructed, and which must be understood when processing the content. Often, this is a reference to an implementation guide that defines the special rules along with other profiles etc.
     */
    implicitRules?: string;


    /**
     * Extensions for implicitRules
     */
    _implicitRules?: IElement;


    /**
     * The base language in which the resource is written.
     */
    language?: string;


    /**
     * Extensions for language
     */
    _language?: IElement;


    /**
     * A human-readable narrative that contains a summary of the resource and can be used to represent the content of the resource to a human. The narrative need not encode all the structured data, but is required to contain sufficient detail to make it "clinically safe" for a human to just read the narrative. Resource definitions may define what content should be represented in the narrative to ensure clinical safety.
     */
    text?: INarrative;


    /**
     * These resources do not have an independent existence apart from the resource that contains them - they cannot be identified independently, and nor can they have their own independent transaction scope.
     */
    contained?: IResourceList[];


    /**
     * May be used to represent additional information that is not part of the basic definition of the resource. To make the use of extensions safe and manageable, there is a strict set of governance  applied to the definition and use of extensions. Though any implementer can define an extension, there is a set of requirements that SHALL be met as part of the definition of the extension.
     */
    extension?: IExtension[];


    /**
     * May be used to represent additional information that is not part of the basic definition of the resource, and that modifies the understanding of the element that contains it. Usually modifier elements provide negation or qualification. To make the use of extensions safe and manageable, there is a strict set of governance applied to the definition and use of extensions. Though any implementer is allowed to define an extension, there is a set of requirements that SHALL be met as part of the definition of the extension. Applications processing a resource are required to check for modifier extensions.

Modifier extensions SHALL NOT change the meaning of any elements on Resource or DomainResource (including cannot change the meaning of modifierExtension itself).
     */
    modifierExtension?: IExtension[];


    /**
     * This records identifiers associated with this medication request that are defined by business processes and/or used to refer to it when a direct URL reference to the resource itself is not appropriate. For example a reimbursement system might issue its own id for each prescription that is created.  This is particularly important where FHIR only provides part of an entire workflow process where records must be tracked through an entire system.
     */
    identifier?: IIdentifier[];


    /**
     * A code specifying the current state of the order.  Generally, this will be active or completed state.
     */
    status?: MedicationRequestStatusKind;


    /**
     * Extensions for status
     */
    _status?: IElement;


    /**
     * Whether the request is a proposal, plan, or an original order.
     */
    intent?: MedicationRequestIntentKind;


    /**
     * Extensions for intent
     */
    _intent?: IElement;


    /**
     * Indicates the type of medication request (for example, where the medication is expected to be consumed or administered (i.e. inpatient or outpatient)).
     */
    category?: ICodeableConcept[];


    /**
     * Indicates how quickly the Medication Request should be addressed with respect to other requests.
     */
    priority?: string;


    /**
     * Extensions for priority
     */
    _priority?: IElement;


    /**
     * If true indicates that the provider is asking for the medication request not to occur.
     */
    doNotPerform?: boolean;


    /**
     * Extensions for doNotPerform
     */
    _doNotPerform?: IElement;


    /**
     * Identifies the medication being requested. This is a link to a resource that represents the medication which may be the details of the medication or simply an attribute carrying a code that identifies the medication from a known list of medications.
     */
    medicationCodeableConcept?: ICodeableConcept;


    /**
     * Identifies the medication being requested. This is a link to a resource that represents the medication which may be the details of the medication or simply an attribute carrying a code that identifies the medication from a known list of medications.
     */
    medicationReference?: IReference;


    /**
     * A link to an encounter, or episode of care, that identifies the particular occurrence or set occurrences of contact between patient and health care provider.
     */
    context?: IReference;


    /**
     * Include additional information (for example, patient height and weight) that supports the ordering of the medication.
     */
    supportingInformation?: IReference[];


    /**
     * The date (and perhaps time) when the prescription was initially written or authored on.
     */
    authoredOn?: string;


    /**
     * Extensions for authoredOn
     */
    _authoredOn?: IElement;


    /**
     * The individual, organization, or device that initiated the request and has responsibility for its activation.
     */
    requester?: IReference;


    /**
     * The specified desired performer of the medication treatment (e.g. the performer of the medication administration).
     */
    performer?: IReference;


    /**
     * Indicates the type of performer of the administration of the medication.
     */
    performerType?: ICodeableConcept;


    /**
     * The person who entered the order on behalf of another individual for example in the case of a verbal or a telephone order.
     */
    recorder?: IReference;


    /**
     * The reason or the indication for ordering or not ordering the medication.
     */
    reasonCode?: ICodeableConcept[];


    /**
     * Condition or observation that supports why the medication was ordered.
     */
    reasonReference?: IReference[];


    /**
     * The URL pointing to a protocol, guideline, orderset, or other definition that is adhered to in whole or in part by this MedicationRequest.
     */
    instantiates?: string[];


    /**
     * Extensions for instantiates
     */
    _instantiates?: IElement[];


    /**
     * A plan or request that is fulfilled in whole or in part by this medication request.
     */
    basedOn?: IReference[];


    /**
     * A shared identifier common to all requests that were authorized more or less simultaneously by a single author, representing the identifier of the requisition or prescription.
     */
    groupIdentifier?: IIdentifier;


    /**
     * Captures the reason for the current state of the MedicationRequest.
     */
    statusReason?: ICodeableConcept;


    /**
     * The description of the overall patte3rn of the administration of the medication to the patient.
     */
    courseOfTherapyType?: ICodeableConcept;


    /**
     * Insurance plans, coverage extensions, pre-authorizations and/or pre-determinations that may be required for delivering the requested service.
     */
    insurance?: IReference[];


    /**
     * Extra information about the prescription that could not be conveyed by the other attributes.
     */
    note?: IAnnotation[];


    /**
     * Indicates how the medication is to be used by the patient.
     */
    dosageInstruction?: IDosage[];


    /**
     * Indicates the specific details for the dispense or medication supply part of a medication request (also known as a Medication Prescription or Medication Order).  Note that this information is not always sent with the order.  There may be in some settings (e.g. hospitals) institutional or system support for completing the dispense details in the pharmacy department.
     */
    dispenseRequest?: IMedicationRequest_DispenseRequest;


    /**
     * Indicates whether or not substitution can or should be part of the dispense. In some cases substitution must happen, in other cases substitution must not happen. This block explains the prescriber's intent. If nothing is specified substitution may be done.
     */
    substitution?: IMedicationRequest_Substitution;


    /**
     * A link to a resource representing an earlier order related order or prescription.
     */
    priorPrescription?: IReference;


    /**
     * Indicates an actual or potential clinical issue with or between one or more active or proposed clinical actions for a patient; e.g. Drug-drug interaction, duplicate therapy, dosage alert etc.
     */
    detectedIssue?: IReference[];


    /**
     * Links to Provenance records for past versions of this resource or fulfilling request or event resources that identify key state transitions or updates that are likely to be relevant to a user looking at the current version of the resource.
     */
    eventHistory?: IReference[];

}



export const RTTI_MedicationRequest: t.Type<IMedicationRequest> = t.recursion('IMedicationRequest', () =>
    t.intersection([

        t.type({
            resourceType: t.literal('MedicationRequest'),
            subject: RTTI_Reference
        })
        ,

        t.partial({
            id: t.string,
            meta: RTTI_Meta,
            implicitRules: t.string,
            _implicitRules: RTTI_Element,
            language: t.string,
            _language: RTTI_Element,
            text: RTTI_Narrative,
            contained: t.array(RTTI_ResourceList),
            extension: t.array(RTTI_Extension),
            modifierExtension: t.array(RTTI_Extension),
            identifier: t.array(RTTI_Identifier),
            status: createEnumType<MedicationRequestStatusKind>(MedicationRequestStatusKind, 'MedicationRequestStatusKind'),
            _status: RTTI_Element,
            intent: createEnumType<MedicationRequestIntentKind>(MedicationRequestIntentKind, 'MedicationRequestIntentKind'),
            _intent: RTTI_Element,
            category: t.array(RTTI_CodeableConcept),
            priority: t.string,
            _priority: RTTI_Element,
            doNotPerform: t.boolean,
            _doNotPerform: RTTI_Element,
            medicationCodeableConcept: RTTI_CodeableConcept,
            medicationReference: RTTI_Reference,
            context: RTTI_Reference,
            supportingInformation: t.array(RTTI_Reference),
            authoredOn: t.string,
            _authoredOn: RTTI_Element,
            requester: RTTI_Reference,
            performer: RTTI_Reference,
            performerType: RTTI_CodeableConcept,
            recorder: RTTI_Reference,
            reasonCode: t.array(RTTI_CodeableConcept),
            reasonReference: t.array(RTTI_Reference),
            instantiates: t.array(t.string),
            _instantiates: t.array(RTTI_Element),
            basedOn: t.array(RTTI_Reference),
            groupIdentifier: RTTI_Identifier,
            statusReason: RTTI_CodeableConcept,
            courseOfTherapyType: RTTI_CodeableConcept,
            insurance: t.array(RTTI_Reference),
            note: t.array(RTTI_Annotation),
            dosageInstruction: t.array(RTTI_Dosage),
            dispenseRequest: RTTI_MedicationRequest_DispenseRequest,
            substitution: RTTI_MedicationRequest_Substitution,
            priorPrescription: RTTI_Reference,
            detectedIssue: t.array(RTTI_Reference),
            eventHistory: t.array(RTTI_Reference)
        })

    ])
);


