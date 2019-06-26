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
import { RTTI_Reference, IReference } from './RTTI_Reference';
import { RTTI_CodeableConcept, ICodeableConcept } from './RTTI_CodeableConcept';
import { RTTI_Period, IPeriod } from './RTTI_Period';
import { RTTI_Timing, ITiming } from './RTTI_Timing';
import { RTTI_instant } from '../Scalar/RTTI_instant';
import { RTTI_Quantity, IQuantity } from './RTTI_Quantity';
import { RTTI_Range, IRange } from './RTTI_Range';
import { RTTI_Ratio, IRatio } from './RTTI_Ratio';
import { RTTI_SampledData, ISampledData } from './RTTI_SampledData';
import { RTTI_Annotation, IAnnotation } from './RTTI_Annotation';
import {
	RTTI_Observation_ReferenceRange,
	IObservation_ReferenceRange
} from './RTTI_Observation_ReferenceRange';
import {
	RTTI_Observation_Component,
	IObservation_Component
} from './RTTI_Observation_Component';
export enum ObservationStatusKind {
	_registered = 'registered',
	_preliminary = 'preliminary',
	_final = 'final',
	_amended = 'amended',
	_corrected = 'corrected',
	_cancelled = 'cancelled',
	_enteredInError = 'entered-in-error',
	_unknown = 'unknown'
}
import { createEnumType } from '../../EnumType';
import { IDomainResource } from './IDomainResource';

export interface IObservation extends IDomainResource {
	/**
	 * This is a Observation resource
	 */
	resourceType: 'Observation';

	/**
	 * Describes what was observed. Sometimes this is called the observation "name".
	 */
	code: ICodeableConcept;

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
	 * A unique identifier assigned to this observation.
	 */
	identifier?: IIdentifier[];

	/**
	 * A plan, proposal or order that is fulfilled in whole or in part by this event.  For example, a MedicationRequest may require a patient to have laboratory test performed before  it is dispensed.
	 */
	basedOn?: IReference[];

	/**
	 * A larger event of which this particular Observation is a component or step.  For example,  an observation as part of a procedure.
	 */
	partOf?: IReference[];

	/**
	 * The status of the result value.
	 */
	status?: ObservationStatusKind;

	/**
	 * Extensions for status
	 */
	_status?: IElement;

	/**
	 * A code that classifies the general type of observation being made.
	 */
	category?: ICodeableConcept[];

	/**
	 * The patient, or group of patients, location, or device this observation is about and into whose record the observation is placed. If the actual focus of the observation is different from the subject (or a sample of, part, or region of the subject), the `focus` element or the `code` itself specifies the actual focus of the observation.
	 */
	subject?: IReference;

	/**
	 * The actual focus of an observation when it is not the patient of record representing something or someone associated with the patient such as a spouse, parent, fetus, or donor. For example, fetus observations in a mother's record.  The focus of an observation could also be an existing condition,  an intervention, the subject's diet,  another observation of the subject,  or a body structure such as tumor or implanted device.   An example use case would be using the Observation resource to capture whether the mother is trained to change her child's tracheostomy tube. In this example, the child is the patient of record and the mother is the focus.
	 */
	focus?: IReference[];

	/**
	 * The healthcare event  (e.g. a patient and healthcare provider interaction) during which this observation is made.
	 */
	encounter?: IReference;

	/**
	 * The time or time-period the observed value is asserted as being true. For biological subjects - e.g. human patients - this is usually called the "physiologically relevant time". This is usually either the time of the procedure or of specimen collection, but very often the source of the date/time is not known, only the date/time itself.
	 */
	effectiveDateTime?: string;

	/**
	 * Extensions for effectiveDateTime
	 */
	_effectiveDateTime?: IElement;

	/**
	 * The time or time-period the observed value is asserted as being true. For biological subjects - e.g. human patients - this is usually called the "physiologically relevant time". This is usually either the time of the procedure or of specimen collection, but very often the source of the date/time is not known, only the date/time itself.
	 */
	effectivePeriod?: IPeriod;

	/**
	 * The time or time-period the observed value is asserted as being true. For biological subjects - e.g. human patients - this is usually called the "physiologically relevant time". This is usually either the time of the procedure or of specimen collection, but very often the source of the date/time is not known, only the date/time itself.
	 */
	effectiveTiming?: ITiming;

	/**
	 * The time or time-period the observed value is asserted as being true. For biological subjects - e.g. human patients - this is usually called the "physiologically relevant time". This is usually either the time of the procedure or of specimen collection, but very often the source of the date/time is not known, only the date/time itself.
	 */
	effectiveInstant?: string;

	/**
	 * Extensions for effectiveInstant
	 */
	_effectiveInstant?: IElement;

	/**
	 * The date and time this version of the observation was made available to providers, typically after the results have been reviewed and verified.
	 */
	issued?: string;

	/**
	 * Extensions for issued
	 */
	_issued?: IElement;

	/**
	 * Who was responsible for asserting the observed value as "true".
	 */
	performer?: IReference[];

	/**
	 * The information determined as a result of making the observation, if the information has a simple value.
	 */
	valueQuantity?: IQuantity;

	/**
	 * The information determined as a result of making the observation, if the information has a simple value.
	 */
	valueCodeableConcept?: ICodeableConcept;

	/**
	 * The information determined as a result of making the observation, if the information has a simple value.
	 */
	valueString?: string;

	/**
	 * Extensions for valueString
	 */
	_valueString?: IElement;

	/**
	 * The information determined as a result of making the observation, if the information has a simple value.
	 */
	valueBoolean?: boolean;

	/**
	 * Extensions for valueBoolean
	 */
	_valueBoolean?: IElement;

	/**
	 * The information determined as a result of making the observation, if the information has a simple value.
	 */
	valueInteger?: number;

	/**
	 * Extensions for valueInteger
	 */
	_valueInteger?: IElement;

	/**
	 * The information determined as a result of making the observation, if the information has a simple value.
	 */
	valueRange?: IRange;

	/**
	 * The information determined as a result of making the observation, if the information has a simple value.
	 */
	valueRatio?: IRatio;

	/**
	 * The information determined as a result of making the observation, if the information has a simple value.
	 */
	valueSampledData?: ISampledData;

	/**
	 * The information determined as a result of making the observation, if the information has a simple value.
	 */
	valueTime?: string;

	/**
	 * Extensions for valueTime
	 */
	_valueTime?: IElement;

	/**
	 * The information determined as a result of making the observation, if the information has a simple value.
	 */
	valueDateTime?: string;

	/**
	 * Extensions for valueDateTime
	 */
	_valueDateTime?: IElement;

	/**
	 * The information determined as a result of making the observation, if the information has a simple value.
	 */
	valuePeriod?: IPeriod;

	/**
	 * Provides a reason why the expected value in the element Observation.value[x] is missing.
	 */
	dataAbsentReason?: ICodeableConcept;

	/**
	 * A categorical assessment of an observation value.  For example, high, low, normal.
	 */
	interpretation?: ICodeableConcept[];

	/**
	 * Comments about the observation or the results.
	 */
	note?: IAnnotation[];

	/**
	 * Indicates the site on the subject's body where the observation was made (i.e. the target site).
	 */
	bodySite?: ICodeableConcept;

	/**
	 * Indicates the mechanism used to perform the observation.
	 */
	method?: ICodeableConcept;

	/**
	 * The specimen that was used when this observation was made.
	 */
	specimen?: IReference;

	/**
	 * The device used to generate the observation data.
	 */
	device?: IReference;

	/**
	 * Guidance on how to interpret the value by comparison to a normal or recommended range.  Multiple reference ranges are interpreted as an "OR".   In other words, to represent two distinct target populations, two `referenceRange` elements would be used.
	 */
	referenceRange?: IObservation_ReferenceRange[];

	/**
	 * This observation is a group observation (e.g. a battery, a panel of tests, a set of vital sign measurements) that includes the target as a member of the group.
	 */
	hasMember?: IReference[];

	/**
	 * The target resource that represents a measurement from which this observation value is derived. For example, a calculated anion gap or a fetal measurement based on an ultrasound image.
	 */
	derivedFrom?: IReference[];

	/**
	 * Some observations have multiple component observations.  These component observations are expressed as separate code value pairs that share the same attributes.  Examples include systolic and diastolic component observations for blood pressure measurement and multiple component observations for genetics observations.
	 */
	component?: IObservation_Component[];
}

export const RTTI_Observation: t.Type<IObservation> = t.recursion(
	'IObservation',
	() =>
		t.intersection([
			t.type({
				resourceType: t.literal('Observation'),
				code: RTTI_CodeableConcept
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
				basedOn: t.array(RTTI_Reference),
				partOf: t.array(RTTI_Reference),
				status: createEnumType<ObservationStatusKind>(
					ObservationStatusKind,
					'ObservationStatusKind'
				),
				_status: RTTI_Element,
				category: t.array(RTTI_CodeableConcept),
				subject: RTTI_Reference,
				focus: t.array(RTTI_Reference),
				encounter: RTTI_Reference,
				effectiveDateTime: t.string,
				_effectiveDateTime: RTTI_Element,
				effectivePeriod: RTTI_Period,
				effectiveTiming: RTTI_Timing,
				effectiveInstant: t.string,
				_effectiveInstant: RTTI_Element,
				issued: RTTI_instant,
				_issued: RTTI_Element,
				performer: t.array(RTTI_Reference),
				valueQuantity: RTTI_Quantity,
				valueCodeableConcept: RTTI_CodeableConcept,
				valueString: t.string,
				_valueString: RTTI_Element,
				valueBoolean: t.boolean,
				_valueBoolean: RTTI_Element,
				valueInteger: t.number,
				_valueInteger: RTTI_Element,
				valueRange: RTTI_Range,
				valueRatio: RTTI_Ratio,
				valueSampledData: RTTI_SampledData,
				valueTime: t.string,
				_valueTime: RTTI_Element,
				valueDateTime: t.string,
				_valueDateTime: RTTI_Element,
				valuePeriod: RTTI_Period,
				dataAbsentReason: RTTI_CodeableConcept,
				interpretation: t.array(RTTI_CodeableConcept),
				note: t.array(RTTI_Annotation),
				bodySite: RTTI_CodeableConcept,
				method: RTTI_CodeableConcept,
				specimen: RTTI_Reference,
				device: RTTI_Reference,
				referenceRange: t.array(RTTI_Observation_ReferenceRange),
				hasMember: t.array(RTTI_Reference),
				derivedFrom: t.array(RTTI_Reference),
				component: t.array(RTTI_Observation_Component)
			})
		])
);
