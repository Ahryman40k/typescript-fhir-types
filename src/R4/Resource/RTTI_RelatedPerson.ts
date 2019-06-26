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
import { RTTI_HumanName, IHumanName } from './RTTI_HumanName';
import { RTTI_ContactPoint, IContactPoint } from './RTTI_ContactPoint';
import { RTTI_date } from '../Scalar/RTTI_date';
import { RTTI_Address, IAddress } from './RTTI_Address';
import { RTTI_Attachment, IAttachment } from './RTTI_Attachment';
import { RTTI_Period, IPeriod } from './RTTI_Period';
import {
	RTTI_RelatedPerson_Communication,
	IRelatedPerson_Communication
} from './RTTI_RelatedPerson_Communication';
export enum RelatedPersonGenderKind {
	_male = 'male',
	_female = 'female',
	_other = 'other',
	_unknown = 'unknown'
}
import { createEnumType } from '../../EnumType';
import { IDomainResource } from './IDomainResource';

export interface IRelatedPerson extends IDomainResource {
	/**
	 * This is a RelatedPerson resource
	 */
	resourceType: 'RelatedPerson';

	/**
	 * The patient this person is related to.
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
	 * Identifier for a person within a particular scope.
	 */
	identifier?: IIdentifier[];

	/**
	 * Whether this related person record is in active use.
	 */
	active?: boolean;

	/**
	 * Extensions for active
	 */
	_active?: IElement;

	/**
	 * The nature of the relationship between a patient and the related person.
	 */
	relationship?: ICodeableConcept[];

	/**
	 * A name associated with the person.
	 */
	name?: IHumanName[];

	/**
	 * A contact detail for the person, e.g. a telephone number or an email address.
	 */
	telecom?: IContactPoint[];

	/**
	 * Administrative Gender - the gender that the person is considered to have for administration and record keeping purposes.
	 */
	gender?: RelatedPersonGenderKind;

	/**
	 * Extensions for gender
	 */
	_gender?: IElement;

	/**
	 * The date on which the related person was born.
	 */
	birthDate?: string;

	/**
	 * Extensions for birthDate
	 */
	_birthDate?: IElement;

	/**
	 * Address where the related person can be contacted or visited.
	 */
	address?: IAddress[];

	/**
	 * Image of the person.
	 */
	photo?: IAttachment[];

	/**
	 * The period of time during which this relationship is or was active. If there are no dates defined, then the interval is unknown.
	 */
	period?: IPeriod;

	/**
	 * A language which may be used to communicate with about the patient's health.
	 */
	communication?: IRelatedPerson_Communication[];
}

export const RTTI_RelatedPerson: t.Type<IRelatedPerson> = t.recursion(
	'IRelatedPerson',
	() =>
		t.intersection([
			t.type({
				resourceType: t.literal('RelatedPerson'),
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
				active: t.boolean,
				_active: RTTI_Element,
				relationship: t.array(RTTI_CodeableConcept),
				name: t.array(RTTI_HumanName),
				telecom: t.array(RTTI_ContactPoint),
				gender: createEnumType<RelatedPersonGenderKind>(
					RelatedPersonGenderKind,
					'RelatedPersonGenderKind'
				),
				_gender: RTTI_Element,
				birthDate: RTTI_date,
				_birthDate: RTTI_Element,
				address: t.array(RTTI_Address),
				photo: t.array(RTTI_Attachment),
				period: RTTI_Period,
				communication: t.array(RTTI_RelatedPerson_Communication)
			})
		])
);
