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
import {
	RTTI_RiskAssessment_Prediction,
	IRiskAssessment_Prediction
} from './RTTI_RiskAssessment_Prediction';
import { RTTI_Annotation, IAnnotation } from './RTTI_Annotation';

export interface IRiskAssessment {
	/**
	 * This is a RiskAssessment resource
	 */
	resourceType: 'RiskAssessment';

	/**
	 * The patient or group the risk assessment applies to.
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
	 * Business identifier assigned to the risk assessment.
	 */
	identifier?: IIdentifier[];

	/**
	 * A reference to the request that is fulfilled by this risk assessment.
	 */
	basedOn?: IReference;

	/**
	 * A reference to a resource that this risk assessment is part of, such as a Procedure.
	 */
	parent?: IReference;

	/**
	 * The status of the RiskAssessment, using the same statuses as an Observation.
	 */
	status?: string;

	/**
	 * Extensions for status
	 */
	_status?: IElement;

	/**
	 * The algorithm, process or mechanism used to evaluate the risk.
	 */
	method?: ICodeableConcept;

	/**
	 * The type of the risk assessment performed.
	 */
	code?: ICodeableConcept;

	/**
	 * The encounter where the assessment was performed.
	 */
	encounter?: IReference;

	/**
	 * The date (and possibly time) the risk assessment was performed.
	 */
	occurrenceDateTime?: string;

	/**
	 * Extensions for occurrenceDateTime
	 */
	_occurrenceDateTime?: IElement;

	/**
	 * The date (and possibly time) the risk assessment was performed.
	 */
	occurrencePeriod?: IPeriod;

	/**
	 * For assessments or prognosis specific to a particular condition, indicates the condition being assessed.
	 */
	condition?: IReference;

	/**
	 * The provider or software application that performed the assessment.
	 */
	performer?: IReference;

	/**
	 * The reason the risk assessment was performed.
	 */
	reasonCode?: ICodeableConcept[];

	/**
	 * Resources supporting the reason the risk assessment was performed.
	 */
	reasonReference?: IReference[];

	/**
	 * Indicates the source data considered as part of the assessment (for example, FamilyHistory, Observations, Procedures, Conditions, etc.).
	 */
	basis?: IReference[];

	/**
	 * Describes the expected outcome for the subject.
	 */
	prediction?: IRiskAssessment_Prediction[];

	/**
	 * A description of the steps that might be taken to reduce the identified risk(s).
	 */
	mitigation?: string;

	/**
	 * Extensions for mitigation
	 */
	_mitigation?: IElement;

	/**
	 * Additional comments about the risk assessment.
	 */
	note?: IAnnotation[];
}

export const RTTI_RiskAssessment: t.Type<IRiskAssessment> = t.recursion(
	'IRiskAssessment',
	() =>
		t.intersection([
			t.type({
				resourceType: t.literal('RiskAssessment'),
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
				basedOn: RTTI_Reference,
				parent: RTTI_Reference,
				status: RTTI_code,
				_status: RTTI_Element,
				method: RTTI_CodeableConcept,
				code: RTTI_CodeableConcept,
				encounter: RTTI_Reference,
				occurrenceDateTime: t.string,
				_occurrenceDateTime: RTTI_Element,
				occurrencePeriod: RTTI_Period,
				condition: RTTI_Reference,
				performer: RTTI_Reference,
				reasonCode: t.array(RTTI_CodeableConcept),
				reasonReference: t.array(RTTI_Reference),
				basis: t.array(RTTI_Reference),
				prediction: t.array(RTTI_RiskAssessment_Prediction),
				mitigation: t.string,
				_mitigation: RTTI_Element,
				note: t.array(RTTI_Annotation)
			})
		])
);
