import * as t from 'io-ts';
import { RTTI_id } from '../Scalar/RTTI_id';
import { RTTI_Meta, IMeta } from './RTTI_Meta';
import { RTTI_uri } from '../Scalar/RTTI_uri';
import { RTTI_Element, IElement } from './RTTI_Element';
import { RTTI_code } from '../Scalar/RTTI_code';
import { RTTI_Narrative, INarrative } from './RTTI_Narrative';
import { RTTI_ResourceList, IResourceList } from '../Union/RTTI_ResourceList';
import { RTTI_Extension, IExtension } from './RTTI_Extension';
import { RTTI_Identifier, IIdentifier } from './RTTI_Identifier';
import { RTTI_CodeableConcept, ICodeableConcept } from './RTTI_CodeableConcept';
import { RTTI_Reference, IReference } from './RTTI_Reference';
import { RTTI_dateTime } from '../Scalar/RTTI_dateTime';
import { RTTI_canonical } from '../Scalar/RTTI_canonical';
import { RTTI_Annotation, IAnnotation } from './RTTI_Annotation';
import { RTTI_Dosage, IDosage } from './RTTI_Dosage';
import {
	RTTI_MedicationRequest_DispenseRequest,
	IMedicationRequest_DispenseRequest
} from './RTTI_MedicationRequest_DispenseRequest';
import {
	RTTI_MedicationRequest_Substitution,
	IMedicationRequest_Substitution
} from './RTTI_MedicationRequest_Substitution';

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
                     * May be used to represent additional information that is not part of the basic definition of the resource and that modifies the understanding of the element that contains it and/or the understanding of the containing element's descendants. Usually modifier elements provide negation or qualification. To make the use of extensions safe and manageable, there is a strict set of governance applied to the definition and use of extensions. Though any implementer is allowed to define an extension, there is a set of requirements that SHALL be met as part of the definition of the extension. Applications processing a resource are required to check for modifier extensions.

Modifier extensions SHALL NOT change the meaning of any elements on Resource or DomainResource (including cannot change the meaning of modifierExtension itself).
                     */
	modifierExtension?: IExtension[];

	/**
	 * Identifiers associated with this medication request that are defined by business processes and/or used to refer to it when a direct URL reference to the resource itself is not appropriate. They are business identifiers assigned to this resource by the performer or other systems and remain constant as the resource is updated and propagates from server to server.
	 */
	identifier?: IIdentifier[];

	/**
	 * A code specifying the current state of the order.  Generally, this will be active or completed state.
	 */
	status?: string;

	/**
	 * Extensions for status
	 */
	_status?: IElement;

	/**
	 * Captures the reason for the current state of the MedicationRequest.
	 */
	statusReason?: ICodeableConcept;

	/**
	 * Whether the request is a proposal, plan, or an original order.
	 */
	intent?: string;

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
	 * Indicates if this record was captured as a secondary 'reported' record rather than as an original primary source-of-truth record.  It may also indicate the source of the report.
	 */
	reportedBoolean?: boolean;

	/**
	 * Extensions for reportedBoolean
	 */
	_reportedBoolean?: IElement;

	/**
	 * Indicates if this record was captured as a secondary 'reported' record rather than as an original primary source-of-truth record.  It may also indicate the source of the report.
	 */
	reportedReference?: IReference;

	/**
	 * Identifies the medication being requested. This is a link to a resource that represents the medication which may be the details of the medication or simply an attribute carrying a code that identifies the medication from a known list of medications.
	 */
	medicationCodeableConcept?: ICodeableConcept;

	/**
	 * Identifies the medication being requested. This is a link to a resource that represents the medication which may be the details of the medication or simply an attribute carrying a code that identifies the medication from a known list of medications.
	 */
	medicationReference?: IReference;

	/**
	 * The Encounter during which this [x] was created or to which the creation of this record is tightly associated.
	 */
	encounter?: IReference;

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
	instantiatesCanonical?: string[];

	/**
	 * Extensions for instantiatesCanonical
	 */
	_instantiatesCanonical?: IElement[];

	/**
	 * The URL pointing to an externally maintained protocol, guideline, orderset or other definition that is adhered to in whole or in part by this MedicationRequest.
	 */
	instantiatesUri?: string[];

	/**
	 * Extensions for instantiatesUri
	 */
	_instantiatesUri?: IElement[];

	/**
	 * A plan or request that is fulfilled in whole or in part by this medication request.
	 */
	basedOn?: IReference[];

	/**
	 * A shared identifier common to all requests that were authorized more or less simultaneously by a single author, representing the identifier of the requisition or prescription.
	 */
	groupIdentifier?: IIdentifier;

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
	 * Indicates whether or not substitution can or should be part of the dispense. In some cases, substitution must happen, in other cases substitution must not happen. This block explains the prescriber's intent. If nothing is specified substitution may be done.
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

export const RTTI_MedicationRequest: t.Type<IMedicationRequest> = t.recursion(
	'IMedicationRequest',
	() =>
		t.intersection([
			t.type({
				resourceType: t.literal('MedicationRequest'),
				subject: RTTI_Reference
			}),
			t.partial({
				id: RTTI_id,
				meta: RTTI_Meta,
				implicitRules: RTTI_uri,
				_implicitRules: RTTI_Element,
				language: RTTI_code,
				_language: RTTI_Element,
				text: RTTI_Narrative,
				contained: t.array(RTTI_ResourceList),
				extension: t.array(RTTI_Extension),
				modifierExtension: t.array(RTTI_Extension),
				identifier: t.array(RTTI_Identifier),
				status: RTTI_code,
				_status: RTTI_Element,
				statusReason: RTTI_CodeableConcept,
				intent: RTTI_code,
				_intent: RTTI_Element,
				category: t.array(RTTI_CodeableConcept),
				priority: RTTI_code,
				_priority: RTTI_Element,
				doNotPerform: t.boolean,
				_doNotPerform: RTTI_Element,
				reportedBoolean: t.boolean,
				_reportedBoolean: RTTI_Element,
				reportedReference: RTTI_Reference,
				medicationCodeableConcept: RTTI_CodeableConcept,
				medicationReference: RTTI_Reference,
				encounter: RTTI_Reference,
				supportingInformation: t.array(RTTI_Reference),
				authoredOn: RTTI_dateTime,
				_authoredOn: RTTI_Element,
				requester: RTTI_Reference,
				performer: RTTI_Reference,
				performerType: RTTI_CodeableConcept,
				recorder: RTTI_Reference,
				reasonCode: t.array(RTTI_CodeableConcept),
				reasonReference: t.array(RTTI_Reference),
				instantiatesCanonical: t.array(RTTI_canonical),
				_instantiatesCanonical: t.array(RTTI_Element),
				instantiatesUri: t.array(RTTI_uri),
				_instantiatesUri: t.array(RTTI_Element),
				basedOn: t.array(RTTI_Reference),
				groupIdentifier: RTTI_Identifier,
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
