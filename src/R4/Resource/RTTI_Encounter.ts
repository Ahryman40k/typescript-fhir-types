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
import {
	RTTI_Encounter_StatusHistory,
	IEncounter_StatusHistory
} from './RTTI_Encounter_StatusHistory';
import { RTTI_Coding, ICoding } from './RTTI_Coding';
import {
	RTTI_Encounter_ClassHistory,
	IEncounter_ClassHistory
} from './RTTI_Encounter_ClassHistory';
import { RTTI_CodeableConcept, ICodeableConcept } from './RTTI_CodeableConcept';
import { RTTI_Reference, IReference } from './RTTI_Reference';
import {
	RTTI_Encounter_Participant,
	IEncounter_Participant
} from './RTTI_Encounter_Participant';
import { RTTI_Period, IPeriod } from './RTTI_Period';
import { RTTI_Duration, IDuration } from './RTTI_Duration';
import {
	RTTI_Encounter_Diagnosis,
	IEncounter_Diagnosis
} from './RTTI_Encounter_Diagnosis';
import {
	RTTI_Encounter_Hospitalization,
	IEncounter_Hospitalization
} from './RTTI_Encounter_Hospitalization';
import {
	RTTI_Encounter_Location,
	IEncounter_Location
} from './RTTI_Encounter_Location';
export enum EncounterStatusKind {
	_planned = 'planned',
	_arrived = 'arrived',
	_triaged = 'triaged',
	_inProgress = 'in-progress',
	_onleave = 'onleave',
	_finished = 'finished',
	_cancelled = 'cancelled',
	_enteredInError = 'entered-in-error',
	_unknown = 'unknown'
}
import { createEnumType } from '../../EnumType';

export interface IEncounter {
	/**
	 * This is a Encounter resource
	 */
	resourceType: 'Encounter';

	/**
	 * Concepts representing classification of patient encounter such as ambulatory (outpatient), inpatient, emergency, home health or others due to local variations.
	 */
	class: ICoding;

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
	 * Identifier(s) by which this encounter is known.
	 */
	identifier?: IIdentifier[];

	/**
	 * planned | arrived | triaged | in-progress | onleave | finished | cancelled +.
	 */
	status?: EncounterStatusKind;

	/**
	 * Extensions for status
	 */
	_status?: IElement;

	/**
	 * The status history permits the encounter resource to contain the status history without needing to read through the historical versions of the resource, or even have the server store them.
	 */
	statusHistory?: IEncounter_StatusHistory[];

	/**
	 * The class history permits the tracking of the encounters transitions without needing to go  through the resource history.  This would be used for a case where an admission starts of as an emergency encounter, then transitions into an inpatient scenario. Doing this and not restarting a new encounter ensures that any lab/diagnostic results can more easily follow the patient and not require re-processing and not get lost or cancelled during a kind of discharge from emergency to inpatient.
	 */
	classHistory?: IEncounter_ClassHistory[];

	/**
	 * Specific type of encounter (e.g. e-mail consultation, surgical day-care, skilled nursing, rehabilitation).
	 */
	type?: ICodeableConcept[];

	/**
	 * Broad categorization of the service that is to be provided (e.g. cardiology).
	 */
	serviceType?: ICodeableConcept;

	/**
	 * Indicates the urgency of the encounter.
	 */
	priority?: ICodeableConcept;

	/**
	 * The patient or group present at the encounter.
	 */
	subject?: IReference;

	/**
	 * Where a specific encounter should be classified as a part of a specific episode(s) of care this field should be used. This association can facilitate grouping of related encounters together for a specific purpose, such as government reporting, issue tracking, association via a common problem.  The association is recorded on the encounter as these are typically created after the episode of care and grouped on entry rather than editing the episode of care to append another encounter to it (the episode of care could span years).
	 */
	episodeOfCare?: IReference[];

	/**
	 * The request this encounter satisfies (e.g. incoming referral or procedure request).
	 */
	basedOn?: IReference[];

	/**
	 * The list of people responsible for providing the service.
	 */
	participant?: IEncounter_Participant[];

	/**
	 * The appointment that scheduled this encounter.
	 */
	appointment?: IReference[];

	/**
	 * The start and end time of the encounter.
	 */
	period?: IPeriod;

	/**
	 * Quantity of time the encounter lasted. This excludes the time during leaves of absence.
	 */
	length?: IDuration;

	/**
	 * Reason the encounter takes place, expressed as a code. For admissions, this can be used for a coded admission diagnosis.
	 */
	reasonCode?: ICodeableConcept[];

	/**
	 * Reason the encounter takes place, expressed as a code. For admissions, this can be used for a coded admission diagnosis.
	 */
	reasonReference?: IReference[];

	/**
	 * The list of diagnosis relevant to this encounter.
	 */
	diagnosis?: IEncounter_Diagnosis[];

	/**
	 * The set of accounts that may be used for billing for this Encounter.
	 */
	account?: IReference[];

	/**
	 * Details about the admission to a healthcare service.
	 */
	hospitalization?: IEncounter_Hospitalization;

	/**
	 * List of locations where  the patient has been during this encounter.
	 */
	location?: IEncounter_Location[];

	/**
	 * The organization that is primarily responsible for this Encounter's services. This MAY be the same as the organization on the Patient record, however it could be different, such as if the actor performing the services was from an external organization (which may be billed seperately) for an external consultation.  Refer to the example bundle showing an abbreviated set of Encounters for a colonoscopy.
	 */
	serviceProvider?: IReference;

	/**
	 * Another Encounter of which this encounter is a part of (administratively or in time).
	 */
	partOf?: IReference;
}

export const RTTI_Encounter: t.Type<IEncounter> = t.recursion(
	'IEncounter',
	() =>
		t.intersection([
			t.type({
				resourceType: t.literal('Encounter'),
				class: RTTI_Coding
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
				status: createEnumType<EncounterStatusKind>(
					EncounterStatusKind,
					'EncounterStatusKind'
				),
				_status: RTTI_Element,
				statusHistory: t.array(RTTI_Encounter_StatusHistory),
				classHistory: t.array(RTTI_Encounter_ClassHistory),
				type: t.array(RTTI_CodeableConcept),
				serviceType: RTTI_CodeableConcept,
				priority: RTTI_CodeableConcept,
				subject: RTTI_Reference,
				episodeOfCare: t.array(RTTI_Reference),
				basedOn: t.array(RTTI_Reference),
				participant: t.array(RTTI_Encounter_Participant),
				appointment: t.array(RTTI_Reference),
				period: RTTI_Period,
				length: RTTI_Duration,
				reasonCode: t.array(RTTI_CodeableConcept),
				reasonReference: t.array(RTTI_Reference),
				diagnosis: t.array(RTTI_Encounter_Diagnosis),
				account: t.array(RTTI_Reference),
				hospitalization: RTTI_Encounter_Hospitalization,
				location: t.array(RTTI_Encounter_Location),
				serviceProvider: RTTI_Reference,
				partOf: RTTI_Reference
			})
		])
);
