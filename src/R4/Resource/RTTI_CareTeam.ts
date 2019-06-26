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
import { RTTI_Period, IPeriod } from './RTTI_Period';
import {
	RTTI_CareTeam_Participant,
	ICareTeam_Participant
} from './RTTI_CareTeam_Participant';
import { RTTI_ContactPoint, IContactPoint } from './RTTI_ContactPoint';
import { RTTI_Annotation, IAnnotation } from './RTTI_Annotation';
export enum CareTeamStatusKind {
	_proposed = 'proposed',
	_active = 'active',
	_suspended = 'suspended',
	_inactive = 'inactive',
	_enteredInError = 'entered-in-error'
}
import { createEnumType } from '../../EnumType';
import { IDomainResource } from './IDomainResource';

export interface ICareTeam extends IDomainResource {
	/**
	 * This is a CareTeam resource
	 */
	resourceType: 'CareTeam';

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
	 * Business identifiers assigned to this care team by the performer or other systems which remain constant as the resource is updated and propagates from server to server.
	 */
	identifier?: IIdentifier[];

	/**
	 * Indicates the current state of the care team.
	 */
	status?: CareTeamStatusKind;

	/**
	 * Extensions for status
	 */
	_status?: IElement;

	/**
	 * Identifies what kind of team.  This is to support differentiation between multiple co-existing teams, such as care plan team, episode of care team, longitudinal care team.
	 */
	category?: ICodeableConcept[];

	/**
	 * A label for human use intended to distinguish like teams.  E.g. the "red" vs. "green" trauma teams.
	 */
	name?: string;

	/**
	 * Extensions for name
	 */
	_name?: IElement;

	/**
	 * Identifies the patient or group whose intended care is handled by the team.
	 */
	subject?: IReference;

	/**
	 * The Encounter during which this CareTeam was created or to which the creation of this record is tightly associated.
	 */
	encounter?: IReference;

	/**
	 * Indicates when the team did (or is intended to) come into effect and end.
	 */
	period?: IPeriod;

	/**
	 * Identifies all people and organizations who are expected to be involved in the care team.
	 */
	participant?: ICareTeam_Participant[];

	/**
	 * Describes why the care team exists.
	 */
	reasonCode?: ICodeableConcept[];

	/**
	 * Condition(s) that this care team addresses.
	 */
	reasonReference?: IReference[];

	/**
	 * The organization responsible for the care team.
	 */
	managingOrganization?: IReference[];

	/**
	 * A central contact detail for the care team (that applies to all members).
	 */
	telecom?: IContactPoint[];

	/**
	 * Comments made about the CareTeam.
	 */
	note?: IAnnotation[];
}

export const RTTI_CareTeam: t.Type<ICareTeam> = t.recursion('ICareTeam', () =>
	t.intersection([
		t.type({
			resourceType: t.literal('CareTeam')
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
			status: createEnumType<CareTeamStatusKind>(
				CareTeamStatusKind,
				'CareTeamStatusKind'
			),
			_status: RTTI_Element,
			category: t.array(RTTI_CodeableConcept),
			name: t.string,
			_name: RTTI_Element,
			subject: RTTI_Reference,
			encounter: RTTI_Reference,
			period: RTTI_Period,
			participant: t.array(RTTI_CareTeam_Participant),
			reasonCode: t.array(RTTI_CodeableConcept),
			reasonReference: t.array(RTTI_Reference),
			managingOrganization: t.array(RTTI_Reference),
			telecom: t.array(RTTI_ContactPoint),
			note: t.array(RTTI_Annotation)
		})
	])
);
