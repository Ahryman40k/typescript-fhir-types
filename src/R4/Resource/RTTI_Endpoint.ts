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
import { RTTI_Coding, ICoding } from './RTTI_Coding';
import { RTTI_Reference, IReference } from './RTTI_Reference';
import { RTTI_ContactPoint, IContactPoint } from './RTTI_ContactPoint';
import { RTTI_Period, IPeriod } from './RTTI_Period';
import { RTTI_CodeableConcept, ICodeableConcept } from './RTTI_CodeableConcept';
import { RTTI_url } from '../Scalar/RTTI_url';

export enum EndpointStatusKind {
	_active = 'active',
	_suspended = 'suspended',
	_error = 'error',
	_off = 'off',
	_enteredInError = 'entered-in-error',
	_test = 'test'
}
import { createEnumType } from '../../EnumType';

export interface IEndpoint {
	/**
	 * This is a Endpoint resource
	 */
	resourceType: 'Endpoint';

	/**
	 * A coded value that represents the technical details of the usage of this endpoint, such as what WSDLs should be used in what way. (e.g. XDS.b/DICOM/cds-hook).
	 */
	connectionType: ICoding;

	/**
	 * The payload type describes the acceptable content that can be communicated on the endpoint.
	 */
	payloadType: ICodeableConcept[];

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
	 * Identifier for the organization that is used to identify the endpoint across multiple disparate systems.
	 */
	identifier?: IIdentifier[];

	/**
	 * active | suspended | error | off | test.
	 */
	status?: EndpointStatusKind;

	/**
	 * Extensions for status
	 */
	_status?: IElement;

	/**
	 * A friendly name that this endpoint can be referred to with.
	 */
	name?: string;

	/**
	 * Extensions for name
	 */
	_name?: IElement;

	/**
	 * The organization that manages this endpoint (even if technically another organization is hosting this in the cloud, it is the organization associated with the data).
	 */
	managingOrganization?: IReference;

	/**
	 * Contact details for a human to contact about the subscription. The primary use of this for system administrator troubleshooting.
	 */
	contact?: IContactPoint[];

	/**
	 * The interval during which the endpoint is expected to be operational.
	 */
	period?: IPeriod;

	/**
	 * The mime type to send the payload in - e.g. application/fhir+xml, application/fhir+json. If the mime type is not specified, then the sender could send any content (including no content depending on the connectionType).
	 */
	payloadMimeType?: string[];

	/**
	 * Extensions for payloadMimeType
	 */
	_payloadMimeType?: IElement[];

	/**
	 * The uri that describes the actual end-point to connect to.
	 */
	address?: string;

	/**
	 * Extensions for address
	 */
	_address?: IElement;

	/**
	 * Additional headers / information to send as part of the notification.
	 */
	header?: string[];

	/**
	 * Extensions for header
	 */
	_header?: IElement[];
}

export const RTTI_Endpoint: t.Type<IEndpoint> = t.recursion('IEndpoint', () =>
	t.intersection([
		t.type({
			resourceType: t.literal('Endpoint'),
			connectionType: RTTI_Coding,
			payloadType: t.array(RTTI_CodeableConcept)
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
			status: createEnumType<EndpointStatusKind>(
				EndpointStatusKind,
				'EndpointStatusKind'
			),
			_status: RTTI_Element,
			name: t.string,
			_name: RTTI_Element,
			managingOrganization: RTTI_Reference,
			contact: t.array(RTTI_ContactPoint),
			period: RTTI_Period,
			payloadMimeType: t.array(RTTI_code),
			_payloadMimeType: t.array(RTTI_Element),
			address: RTTI_url,
			_address: RTTI_Element,
			header: t.array(t.string),
			_header: t.array(RTTI_Element)
		})
	])
);
