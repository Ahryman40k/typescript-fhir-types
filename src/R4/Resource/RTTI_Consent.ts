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
import { RTTI_Attachment, IAttachment } from './RTTI_Attachment';
import { RTTI_Consent_Policy, IConsent_Policy } from './RTTI_Consent_Policy';
import {
	RTTI_Consent_Verification,
	IConsent_Verification
} from './RTTI_Consent_Verification';
import {
	RTTI_Consent_Provision,
	IConsent_Provision
} from './RTTI_Consent_Provision';
export enum ConsentStatusKind {
	_draft = 'draft',
	_proposed = 'proposed',
	_active = 'active',
	_rejected = 'rejected',
	_inactive = 'inactive',
	_enteredInError = 'entered-in-error'
}
import { createEnumType } from '../../EnumType';

export interface IConsent {
	/**
	 * This is a Consent resource
	 */
	resourceType: 'Consent';

	/**
	 * A selector of the type of consent being presented: ADR, Privacy, Treatment, Research.  This list is now extensible.
	 */
	scope: ICodeableConcept;

	/**
	 * A classification of the type of consents found in the statement. This element supports indexing and retrieval of consent statements.
	 */
	category: ICodeableConcept[];

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
	 * Unique identifier for this copy of the Consent Statement.
	 */
	identifier?: IIdentifier[];

	/**
	 * Indicates the current state of this consent.
	 */
	status?: ConsentStatusKind;

	/**
	 * Extensions for status
	 */
	_status?: IElement;

	/**
	 * The patient/healthcare consumer to whom this consent applies.
	 */
	patient?: IReference;

	/**
	 * When this  Consent was issued / created / indexed.
	 */
	dateTime?: string;

	/**
	 * Extensions for dateTime
	 */
	_dateTime?: IElement;

	/**
	 * Either the Grantor, which is the entity responsible for granting the rights listed in a Consent Directive or the Grantee, which is the entity responsible for complying with the Consent Directive, including any obligations or limitations on authorizations and enforcement of prohibitions.
	 */
	performer?: IReference[];

	/**
	 * The organization that manages the consent, and the framework within which it is executed.
	 */
	organization?: IReference[];

	/**
	 * The source on which this consent statement is based. The source might be a scanned original paper form, or a reference to a consent that links back to such a source, a reference to a document repository (e.g. XDS) that stores the original consent document.
	 */
	sourceAttachment?: IAttachment;

	/**
	 * The source on which this consent statement is based. The source might be a scanned original paper form, or a reference to a consent that links back to such a source, a reference to a document repository (e.g. XDS) that stores the original consent document.
	 */
	sourceReference?: IReference;

	/**
	 * The references to the policies that are included in this consent scope. Policies may be organizational, but are often defined jurisdictionally, or in law.
	 */
	policy?: IConsent_Policy[];

	/**
	 * A reference to the specific base computable regulation or policy.
	 */
	policyRule?: ICodeableConcept;

	/**
	 * Whether a treatment instruction (e.g. artificial respiration yes or no) was verified with the patient, his/her family or another authorized person.
	 */
	verification?: IConsent_Verification[];

	/**
	 * An exception to the base policy of this consent. An exception can be an addition or removal of access permissions.
	 */
	provision?: IConsent_Provision;
}

export const RTTI_Consent: t.Type<IConsent> = t.recursion('IConsent', () =>
	t.intersection([
		t.type({
			resourceType: t.literal('Consent'),
			scope: RTTI_CodeableConcept,
			category: t.array(RTTI_CodeableConcept)
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
			status: createEnumType<ConsentStatusKind>(
				ConsentStatusKind,
				'ConsentStatusKind'
			),
			_status: RTTI_Element,
			patient: RTTI_Reference,
			dateTime: RTTI_dateTime,
			_dateTime: RTTI_Element,
			performer: t.array(RTTI_Reference),
			organization: t.array(RTTI_Reference),
			sourceAttachment: RTTI_Attachment,
			sourceReference: RTTI_Reference,
			policy: t.array(RTTI_Consent_Policy),
			policyRule: RTTI_CodeableConcept,
			verification: t.array(RTTI_Consent_Verification),
			provision: RTTI_Consent_Provision
		})
	])
);
