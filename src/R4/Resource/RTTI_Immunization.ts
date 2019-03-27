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
import { RTTI_date } from '../Scalar/RTTI_date';
import { RTTI_Quantity, IQuantity } from './RTTI_Quantity';
import {
	RTTI_Immunization_Performer,
	IImmunization_Performer
} from './RTTI_Immunization_Performer';
import { RTTI_Annotation, IAnnotation } from './RTTI_Annotation';
import {
	RTTI_Immunization_Education,
	IImmunization_Education
} from './RTTI_Immunization_Education';
import {
	RTTI_Immunization_Reaction,
	IImmunization_Reaction
} from './RTTI_Immunization_Reaction';
import {
	RTTI_Immunization_ProtocolApplied,
	IImmunization_ProtocolApplied
} from './RTTI_Immunization_ProtocolApplied';

export interface IImmunization {
	/**
	 * This is a Immunization resource
	 */
	resourceType: 'Immunization';

	/**
	 * Vaccine that was administered or was to be administered.
	 */
	vaccineCode: ICodeableConcept;

	/**
	 * The patient who either received or did not receive the immunization.
	 */
	patient: IReference;

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
	 * A unique identifier assigned to this immunization record.
	 */
	identifier?: IIdentifier[];

	/**
	 * Indicates the current status of the immunization event.
	 */
	status?: string;

	/**
	 * Extensions for status
	 */
	_status?: IElement;

	/**
	 * Indicates the reason the immunization event was not performed.
	 */
	statusReason?: ICodeableConcept;

	/**
	 * The visit or admission or other contact between patient and health care provider the immunization was performed as part of.
	 */
	encounter?: IReference;

	/**
	 * Date vaccine administered or was to be administered.
	 */
	occurrenceDateTime?: string;

	/**
	 * Extensions for occurrenceDateTime
	 */
	_occurrenceDateTime?: IElement;

	/**
	 * Date vaccine administered or was to be administered.
	 */
	occurrenceString?: string;

	/**
	 * Extensions for occurrenceString
	 */
	_occurrenceString?: IElement;

	/**
	 * The date the occurrence of the immunization was first captured in the record - potentially significantly after the occurrence of the event.
	 */
	recorded?: string;

	/**
	 * Extensions for recorded
	 */
	_recorded?: IElement;

	/**
	 * An indication that the content of the record is based on information from the person who administered the vaccine. This reflects the context under which the data was originally recorded.
	 */
	primarySource?: boolean;

	/**
	 * Extensions for primarySource
	 */
	_primarySource?: IElement;

	/**
	 * The source of the data when the report of the immunization event is not based on information from the person who administered the vaccine.
	 */
	reportOrigin?: ICodeableConcept;

	/**
	 * The service delivery location where the vaccine administration occurred.
	 */
	location?: IReference;

	/**
	 * Name of vaccine manufacturer.
	 */
	manufacturer?: IReference;

	/**
	 * Lot number of the  vaccine product.
	 */
	lotNumber?: string;

	/**
	 * Extensions for lotNumber
	 */
	_lotNumber?: IElement;

	/**
	 * Date vaccine batch expires.
	 */
	expirationDate?: string;

	/**
	 * Extensions for expirationDate
	 */
	_expirationDate?: IElement;

	/**
	 * Body site where vaccine was administered.
	 */
	site?: ICodeableConcept;

	/**
	 * The path by which the vaccine product is taken into the body.
	 */
	route?: ICodeableConcept;

	/**
	 * The quantity of vaccine product that was administered.
	 */
	doseQuantity?: IQuantity;

	/**
	 * Indicates who performed the immunization event.
	 */
	performer?: IImmunization_Performer[];

	/**
	 * Extra information about the immunization that is not conveyed by the other attributes.
	 */
	note?: IAnnotation[];

	/**
	 * Reasons why the vaccine was administered.
	 */
	reasonCode?: ICodeableConcept[];

	/**
	 * Condition, Observation or DiagnosticReport that supports why the immunization was administered.
	 */
	reasonReference?: IReference[];

	/**
	 * Indication if a dose is considered to be subpotent. By default, a dose should be considered to be potent.
	 */
	isSubpotent?: boolean;

	/**
	 * Extensions for isSubpotent
	 */
	_isSubpotent?: IElement;

	/**
	 * Reason why a dose is considered to be subpotent.
	 */
	subpotentReason?: ICodeableConcept[];

	/**
	 * Educational material presented to the patient (or guardian) at the time of vaccine administration.
	 */
	education?: IImmunization_Education[];

	/**
	 * Indicates a patient's eligibility for a funding program.
	 */
	programEligibility?: ICodeableConcept[];

	/**
	 * Indicates the source of the vaccine actually administered. This may be different than the patient eligibility (e.g. the patient may be eligible for a publically purchased vaccine but due to inventory issues, vaccine purchased with private funds was actually administered).
	 */
	fundingSource?: ICodeableConcept;

	/**
	 * Categorical data indicating that an adverse event is associated in time to an immunization.
	 */
	reaction?: IImmunization_Reaction[];

	/**
	 * The protocol (set of recommendations) being followed by the provider who administered the dose.
	 */
	protocolApplied?: IImmunization_ProtocolApplied[];
}

export const RTTI_Immunization: t.Type<IImmunization> = t.recursion(
	'IImmunization',
	() =>
		t.intersection([
			t.type({
				resourceType: t.literal('Immunization'),
				vaccineCode: RTTI_CodeableConcept,
				patient: RTTI_Reference
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
				encounter: RTTI_Reference,
				occurrenceDateTime: t.string,
				_occurrenceDateTime: RTTI_Element,
				occurrenceString: t.string,
				_occurrenceString: RTTI_Element,
				recorded: RTTI_dateTime,
				_recorded: RTTI_Element,
				primarySource: t.boolean,
				_primarySource: RTTI_Element,
				reportOrigin: RTTI_CodeableConcept,
				location: RTTI_Reference,
				manufacturer: RTTI_Reference,
				lotNumber: t.string,
				_lotNumber: RTTI_Element,
				expirationDate: RTTI_date,
				_expirationDate: RTTI_Element,
				site: RTTI_CodeableConcept,
				route: RTTI_CodeableConcept,
				doseQuantity: RTTI_Quantity,
				performer: t.array(RTTI_Immunization_Performer),
				note: t.array(RTTI_Annotation),
				reasonCode: t.array(RTTI_CodeableConcept),
				reasonReference: t.array(RTTI_Reference),
				isSubpotent: t.boolean,
				_isSubpotent: RTTI_Element,
				subpotentReason: t.array(RTTI_CodeableConcept),
				education: t.array(RTTI_Immunization_Education),
				programEligibility: t.array(RTTI_CodeableConcept),
				fundingSource: RTTI_CodeableConcept,
				reaction: t.array(RTTI_Immunization_Reaction),
				protocolApplied: t.array(RTTI_Immunization_ProtocolApplied)
			})
		])
);
