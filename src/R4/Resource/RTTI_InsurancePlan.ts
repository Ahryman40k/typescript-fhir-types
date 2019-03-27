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

import { RTTI_Period, IPeriod } from './RTTI_Period';
import { RTTI_Reference, IReference } from './RTTI_Reference';
import {
	RTTI_InsurancePlan_Contact,
	IInsurancePlan_Contact
} from './RTTI_InsurancePlan_Contact';
import {
	RTTI_InsurancePlan_Coverage,
	IInsurancePlan_Coverage
} from './RTTI_InsurancePlan_Coverage';
import {
	RTTI_InsurancePlan_Plan,
	IInsurancePlan_Plan
} from './RTTI_InsurancePlan_Plan';
export enum InsurancePlanStatusKind {
	_draft = 'draft',
	_active = 'active',
	_retired = 'retired',
	_unknown = 'unknown'
}
import { createEnumType } from '../../EnumType';

export interface IInsurancePlan {
	/**
	 * This is a InsurancePlan resource
	 */
	resourceType: 'InsurancePlan';

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
	 * Business identifiers assigned to this health insurance product which remain constant as the resource is updated and propagates from server to server.
	 */
	identifier?: IIdentifier[];

	/**
	 * The current state of the health insurance product.
	 */
	status?: InsurancePlanStatusKind;

	/**
	 * Extensions for status
	 */
	_status?: IElement;

	/**
	 * The kind of health insurance product.
	 */
	type?: ICodeableConcept[];

	/**
	 * Official name of the health insurance product as designated by the owner.
	 */
	name?: string;

	/**
	 * Extensions for name
	 */
	_name?: IElement;

	/**
	 * A list of alternate names that the product is known as, or was known as in the past.
	 */
	alias?: string[];

	/**
	 * Extensions for alias
	 */
	_alias?: IElement[];

	/**
	 * The period of time that the health insurance product is available.
	 */
	period?: IPeriod;

	/**
	 * The entity that is providing  the health insurance product and underwriting the risk.  This is typically an insurance carriers, other third-party payers, or health plan sponsors comonly referred to as 'payers'.
	 */
	ownedBy?: IReference;

	/**
	 * An organization which administer other services such as underwriting, customer service and/or claims processing on behalf of the health insurance product owner.
	 */
	administeredBy?: IReference;

	/**
	 * The geographic region in which a health insurance product's benefits apply.
	 */
	coverageArea?: IReference[];

	/**
	 * The contact for the health insurance product for a certain purpose.
	 */
	contact?: IInsurancePlan_Contact[];

	/**
	 * The technical endpoints providing access to services operated for the health insurance product.
	 */
	endpoint?: IReference[];

	/**
	 * Reference to the network included in the health insurance product.
	 */
	network?: IReference[];

	/**
	 * Details about the coverage offered by the insurance product.
	 */
	coverage?: IInsurancePlan_Coverage[];

	/**
	 * Details about an insurance plan.
	 */
	plan?: IInsurancePlan_Plan[];
}

export const RTTI_InsurancePlan: t.Type<IInsurancePlan> = t.recursion(
	'IInsurancePlan',
	() =>
		t.intersection([
			t.type({
				resourceType: t.literal('InsurancePlan')
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
				status: createEnumType<InsurancePlanStatusKind>(
					InsurancePlanStatusKind,
					'InsurancePlanStatusKind'
				),
				_status: RTTI_Element,
				type: t.array(RTTI_CodeableConcept),
				name: t.string,
				_name: RTTI_Element,
				alias: t.array(t.string),
				_alias: t.array(RTTI_Element),
				period: RTTI_Period,
				ownedBy: RTTI_Reference,
				administeredBy: RTTI_Reference,
				coverageArea: t.array(RTTI_Reference),
				contact: t.array(RTTI_InsurancePlan_Contact),
				endpoint: t.array(RTTI_Reference),
				network: t.array(RTTI_Reference),
				coverage: t.array(RTTI_InsurancePlan_Coverage),
				plan: t.array(RTTI_InsurancePlan_Plan)
			})
		])
);
