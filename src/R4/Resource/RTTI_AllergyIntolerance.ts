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
import { RTTI_Age, IAge } from './RTTI_Age';
import { RTTI_Period, IPeriod } from './RTTI_Period';
import { RTTI_Range, IRange } from './RTTI_Range';
import { RTTI_dateTime } from '../Scalar/RTTI_dateTime';
import { RTTI_Annotation, IAnnotation } from './RTTI_Annotation';
import {
	RTTI_AllergyIntolerance_Reaction,
	IAllergyIntolerance_Reaction
} from './RTTI_AllergyIntolerance_Reaction';
export enum AllergyIntoleranceCategoryKind {
	_food = 'food',
	_medication = 'medication',
	_environment = 'environment',
	_biologic = 'biologic'
}
export enum AllergyIntoleranceTypeKind {
	_allergy = 'allergy',
	_intolerance = 'intolerance'
}
export enum AllergyIntoleranceCriticalityKind {
	_low = 'low',
	_high = 'high',
	_unableToAssess = 'unable-to-assess'
}
import { createEnumType } from '../../EnumType';

export interface IAllergyIntolerance {
	/**
	 * This is a AllergyIntolerance resource
	 */
	resourceType: 'AllergyIntolerance';

	/**
	 * The patient who has the allergy or intolerance.
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
	 * Business identifiers assigned to this AllergyIntolerance by the performer or other systems which remain constant as the resource is updated and propagates from server to server.
	 */
	identifier?: IIdentifier[];

	/**
	 * The clinical status of the allergy or intolerance.
	 */
	clinicalStatus?: ICodeableConcept;

	/**
	 * Assertion about certainty associated with the propensity, or potential risk, of a reaction to the identified substance (including pharmaceutical product).
	 */
	verificationStatus?: ICodeableConcept;

	/**
	 * Identification of the underlying physiological mechanism for the reaction risk.
	 */
	type?: AllergyIntoleranceTypeKind;

	/**
	 * Extensions for type
	 */
	_type?: IElement;

	/**
	 * Category of the identified substance.
	 */
	category?: AllergyIntoleranceCategoryKind[];

	/**
	 * Extensions for category
	 */
	_category?: IElement[];

	/**
	 * Estimate of the potential clinical harm, or seriousness, of the reaction to the identified substance.
	 */
	criticality?: AllergyIntoleranceCriticalityKind;

	/**
	 * Extensions for criticality
	 */
	_criticality?: IElement;

	/**
	 * Code for an allergy or intolerance statement (either a positive or a negated/excluded statement).  This may be a code for a substance or pharmaceutical product that is considered to be responsible for the adverse reaction risk (e.g., "Latex"), an allergy or intolerance condition (e.g., "Latex allergy"), or a negated/excluded code for a specific substance or class (e.g., "No latex allergy") or a general or categorical negated statement (e.g.,  "No known allergy", "No known drug allergies").  Note: the substance for a specific reaction may be different from the substance identified as the cause of the risk, but it must be consistent with it. For instance, it may be a more specific substance (e.g. a brand medication) or a composite product that includes the identified substance. It must be clinically safe to only process the 'code' and ignore the 'reaction.substance'.  If a receiving system is unable to confirm that AllergyIntolerance.reaction.substance falls within the semantic scope of AllergyIntolerance.code, then the receiving system should ignore AllergyIntolerance.reaction.substance.
	 */
	code?: ICodeableConcept;

	/**
	 * The encounter when the allergy or intolerance was asserted.
	 */
	encounter?: IReference;

	/**
	 * Estimated or actual date,  date-time, or age when allergy or intolerance was identified.
	 */
	onsetDateTime?: string;

	/**
	 * Extensions for onsetDateTime
	 */
	_onsetDateTime?: IElement;

	/**
	 * Estimated or actual date,  date-time, or age when allergy or intolerance was identified.
	 */
	onsetAge?: IAge;

	/**
	 * Estimated or actual date,  date-time, or age when allergy or intolerance was identified.
	 */
	onsetPeriod?: IPeriod;

	/**
	 * Estimated or actual date,  date-time, or age when allergy or intolerance was identified.
	 */
	onsetRange?: IRange;

	/**
	 * Estimated or actual date,  date-time, or age when allergy or intolerance was identified.
	 */
	onsetString?: string;

	/**
	 * Extensions for onsetString
	 */
	_onsetString?: IElement;

	/**
	 * The recordedDate represents when this particular AllergyIntolerance record was created in the system, which is often a system-generated date.
	 */
	recordedDate?: string;

	/**
	 * Extensions for recordedDate
	 */
	_recordedDate?: IElement;

	/**
	 * Individual who recorded the record and takes responsibility for its content.
	 */
	recorder?: IReference;

	/**
	 * The source of the information about the allergy that is recorded.
	 */
	asserter?: IReference;

	/**
	 * Represents the date and/or time of the last known occurrence of a reaction event.
	 */
	lastOccurrence?: string;

	/**
	 * Extensions for lastOccurrence
	 */
	_lastOccurrence?: IElement;

	/**
	 * Additional narrative about the propensity for the Adverse Reaction, not captured in other fields.
	 */
	note?: IAnnotation[];

	/**
	 * Details about each adverse reaction event linked to exposure to the identified substance.
	 */
	reaction?: IAllergyIntolerance_Reaction[];
}

export const RTTI_AllergyIntolerance: t.Type<IAllergyIntolerance> = t.recursion(
	'IAllergyIntolerance',
	() =>
		t.intersection([
			t.type({
				resourceType: t.literal('AllergyIntolerance'),
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
				clinicalStatus: RTTI_CodeableConcept,
				verificationStatus: RTTI_CodeableConcept,
				type: createEnumType<AllergyIntoleranceTypeKind>(
					AllergyIntoleranceTypeKind,
					'AllergyIntoleranceTypeKind'
				),
				_type: RTTI_Element,
				category: t.array(
					createEnumType<AllergyIntoleranceCategoryKind>(
						AllergyIntoleranceCategoryKind,
						'AllergyIntoleranceCategoryKind'
					)
				),
				_category: t.array(RTTI_Element),
				criticality: createEnumType<AllergyIntoleranceCriticalityKind>(
					AllergyIntoleranceCriticalityKind,
					'AllergyIntoleranceCriticalityKind'
				),
				_criticality: RTTI_Element,
				code: RTTI_CodeableConcept,
				encounter: RTTI_Reference,
				onsetDateTime: t.string,
				_onsetDateTime: RTTI_Element,
				onsetAge: RTTI_Age,
				onsetPeriod: RTTI_Period,
				onsetRange: RTTI_Range,
				onsetString: t.string,
				_onsetString: RTTI_Element,
				recordedDate: RTTI_dateTime,
				_recordedDate: RTTI_Element,
				recorder: RTTI_Reference,
				asserter: RTTI_Reference,
				lastOccurrence: RTTI_dateTime,
				_lastOccurrence: RTTI_Element,
				note: t.array(RTTI_Annotation),
				reaction: t.array(RTTI_AllergyIntolerance_Reaction)
			})
		])
);
