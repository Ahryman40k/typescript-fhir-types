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
	RTTI_Account_Coverage,
	IAccount_Coverage
} from './RTTI_Account_Coverage';
import {
	RTTI_Account_Guarantor,
	IAccount_Guarantor
} from './RTTI_Account_Guarantor';
export enum AccountStatusKind {
	_active = 'active',
	_inactive = 'inactive',
	_enteredInError = 'entered-in-error',
	_onHold = 'on-hold',
	_unknown = 'unknown'
}
import { createEnumType } from '../../EnumType';
import { IDomainResource } from './IDomainResource';


export interface IAccount extends IDomainResource {
	/**
	 * This is a Account resource
	 */
	resourceType: 'Account';

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
	 * Unique identifier used to reference the account.  Might or might not be intended for human use (e.g. credit card number).
	 */
	identifier?: IIdentifier[];

	/**
	 * Indicates whether the account is presently used/usable or not.
	 */
	status?: AccountStatusKind;

	/**
	 * Extensions for status
	 */
	_status?: IElement;

	/**
	 * Categorizes the account for reporting and searching purposes.
	 */
	type?: ICodeableConcept;

	/**
	 * Name used for the account when displaying it to humans in reports, etc.
	 */
	name?: string;

	/**
	 * Extensions for name
	 */
	_name?: IElement;

	/**
	 * Identifies the entity which incurs the expenses. While the immediate recipients of services or goods might be entities related to the subject, the expenses were ultimately incurred by the subject of the Account.
	 */
	subject?: IReference[];

	/**
	 * The date range of services associated with this account.
	 */
	servicePeriod?: IPeriod;

	/**
	 * The party(s) that are responsible for covering the payment of this account, and what order should they be applied to the account.
	 */
	coverage?: IAccount_Coverage[];

	/**
	 * Indicates the service area, hospital, department, etc. with responsibility for managing the Account.
	 */
	owner?: IReference;

	/**
	 * Provides additional information about what the account tracks and how it is used.
	 */
	description?: string;

	/**
	 * Extensions for description
	 */
	_description?: IElement;

	/**
	 * The parties responsible for balancing the account if other payment options fall short.
	 */
	guarantor?: IAccount_Guarantor[];

	/**
	 * Reference to a parent Account.
	 */
	partOf?: IReference;
}

export const RTTI_Account: t.Type<IAccount> = t.recursion('IAccount', () =>
	t.intersection([
		t.type({
			resourceType: t.literal('Account')
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
			status: createEnumType<AccountStatusKind>(
				AccountStatusKind,
				'AccountStatusKind'
			),
			_status: RTTI_Element,
			type: RTTI_CodeableConcept,
			name: t.string,
			_name: RTTI_Element,
			subject: t.array(RTTI_Reference),
			servicePeriod: RTTI_Period,
			coverage: t.array(RTTI_Account_Coverage),
			owner: RTTI_Reference,
			description: t.string,
			_description: RTTI_Element,
			guarantor: t.array(RTTI_Account_Guarantor),
			partOf: RTTI_Reference
		})
	])
);
