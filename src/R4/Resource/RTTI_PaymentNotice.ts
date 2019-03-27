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
import { RTTI_dateTime } from '../Scalar/RTTI_dateTime';
import { RTTI_date } from '../Scalar/RTTI_date';
import { RTTI_Money, IMoney } from './RTTI_Money';
import { RTTI_CodeableConcept, ICodeableConcept } from './RTTI_CodeableConcept';

export interface IPaymentNotice {
	/**
	 * This is a PaymentNotice resource
	 */
	resourceType: 'PaymentNotice';

	/**
	 * A reference to the payment which is the subject of this notice.
	 */
	payment: IReference;

	/**
	 * The party who is notified of the payment status.
	 */
	recipient: IReference;

	/**
	 * The amount sent to the payee.
	 */
	amount: IMoney;

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
	 * A unique identifier assigned to this payment notice.
	 */
	identifier?: IIdentifier[];

	/**
	 * The status of the resource instance.
	 */
	status?: string;

	/**
	 * Extensions for status
	 */
	_status?: IElement;

	/**
	 * Reference of resource for which payment is being made.
	 */
	request?: IReference;

	/**
	 * Reference of response to resource for which payment is being made.
	 */
	response?: IReference;

	/**
	 * The date when this resource was created.
	 */
	created?: string;

	/**
	 * Extensions for created
	 */
	_created?: IElement;

	/**
	 * The practitioner who is responsible for the services rendered to the patient.
	 */
	provider?: IReference;

	/**
	 * The date when the above payment action occurred.
	 */
	paymentDate?: string;

	/**
	 * Extensions for paymentDate
	 */
	_paymentDate?: IElement;

	/**
	 * The party who will receive or has received payment that is the subject of this notification.
	 */
	payee?: IReference;

	/**
	 * A code indicating whether payment has been sent or cleared.
	 */
	paymentStatus?: ICodeableConcept;
}

export const RTTI_PaymentNotice: t.Type<IPaymentNotice> = t.recursion(
	'IPaymentNotice',
	() =>
		t.intersection([
			t.type({
				resourceType: t.literal('PaymentNotice'),
				payment: RTTI_Reference,
				recipient: RTTI_Reference,
				amount: RTTI_Money
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
				request: RTTI_Reference,
				response: RTTI_Reference,
				created: RTTI_dateTime,
				_created: RTTI_Element,
				provider: RTTI_Reference,
				paymentDate: RTTI_date,
				_paymentDate: RTTI_Element,
				payee: RTTI_Reference,
				paymentStatus: RTTI_CodeableConcept
			})
		])
);
