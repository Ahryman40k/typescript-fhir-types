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

import { RTTI_CodeableConcept, ICodeableConcept } from './RTTI_CodeableConcept';
import { RTTI_ContactPoint, IContactPoint } from './RTTI_ContactPoint';
import { RTTI_Address, IAddress } from './RTTI_Address';
import {
	RTTI_Location_Position,
	ILocation_Position
} from './RTTI_Location_Position';
import { RTTI_Reference, IReference } from './RTTI_Reference';
import {
	RTTI_Location_HoursOfOperation,
	ILocation_HoursOfOperation
} from './RTTI_Location_HoursOfOperation';
export enum LocationStatusKind {
	_active = 'active',
	_suspended = 'suspended',
	_inactive = 'inactive'
}
export enum LocationModeKind {
	_instance = 'instance',
	_kind = 'kind'
}
import { createEnumType } from '../../EnumType';
import { IDomainResource } from './IDomainResource';

export interface ILocation extends IDomainResource {
	/**
	 * This is a Location resource
	 */
	resourceType: 'Location';

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
	 * Unique code or number identifying the location to its users.
	 */
	identifier?: IIdentifier[];

	/**
	 * The status property covers the general availability of the resource, not the current value which may be covered by the operationStatus, or by a schedule/slots if they are configured for the location.
	 */
	status?: LocationStatusKind;

	/**
	 * Extensions for status
	 */
	_status?: IElement;

	/**
	 * The operational status covers operation values most relevant to beds (but can also apply to rooms/units/chairs/etc. such as an isolation unit/dialysis chair). This typically covers concepts such as contamination, housekeeping, and other activities like maintenance.
	 */
	operationalStatus?: ICoding;

	/**
	 * Name of the location as used by humans. Does not need to be unique.
	 */
	name?: string;

	/**
	 * Extensions for name
	 */
	_name?: IElement;

	/**
	 * A list of alternate names that the location is known as, or was known as, in the past.
	 */
	alias?: string[];

	/**
	 * Extensions for alias
	 */
	_alias?: IElement[];

	/**
	 * Description of the Location, which helps in finding or referencing the place.
	 */
	description?: string;

	/**
	 * Extensions for description
	 */
	_description?: IElement;

	/**
	 * Indicates whether a resource instance represents a specific location or a class of locations.
	 */
	mode?: LocationModeKind;

	/**
	 * Extensions for mode
	 */
	_mode?: IElement;

	/**
	 * Indicates the type of function performed at the location.
	 */
	type?: ICodeableConcept[];

	/**
	 * The contact details of communication devices available at the location. This can include phone numbers, fax numbers, mobile numbers, email addresses and web sites.
	 */
	telecom?: IContactPoint[];

	/**
	 * Physical location.
	 */
	address?: IAddress;

	/**
	 * Physical form of the location, e.g. building, room, vehicle, road.
	 */
	physicalType?: ICodeableConcept;

	/**
	 * The absolute geographic location of the Location, expressed using the WGS84 datum (This is the same co-ordinate system used in KML).
	 */
	position?: ILocation_Position;

	/**
	 * The organization responsible for the provisioning and upkeep of the location.
	 */
	managingOrganization?: IReference;

	/**
	 * Another Location of which this Location is physically a part of.
	 */
	partOf?: IReference;

	/**
	 * What days/times during a week is this location usually open.
	 */
	hoursOfOperation?: ILocation_HoursOfOperation[];

	/**
	 * A description of when the locations opening ours are different to normal, e.g. public holiday availability. Succinctly describing all possible exceptions to normal site availability as detailed in the opening hours Times.
	 */
	availabilityExceptions?: string;

	/**
	 * Extensions for availabilityExceptions
	 */
	_availabilityExceptions?: IElement;

	/**
	 * Technical endpoints providing access to services operated for the location.
	 */
	endpoint?: IReference[];
}

export const RTTI_Location: t.Type<ILocation> = t.recursion('ILocation', () =>
	t.intersection([
		t.type({
			resourceType: t.literal('Location')
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
			status: createEnumType<LocationStatusKind>(
				LocationStatusKind,
				'LocationStatusKind'
			),
			_status: RTTI_Element,
			operationalStatus: RTTI_Coding,
			name: t.string,
			_name: RTTI_Element,
			alias: t.array(t.string),
			_alias: t.array(RTTI_Element),
			description: t.string,
			_description: RTTI_Element,
			mode: createEnumType<LocationModeKind>(
				LocationModeKind,
				'LocationModeKind'
			),
			_mode: RTTI_Element,
			type: t.array(RTTI_CodeableConcept),
			telecom: t.array(RTTI_ContactPoint),
			address: RTTI_Address,
			physicalType: RTTI_CodeableConcept,
			position: RTTI_Location_Position,
			managingOrganization: RTTI_Reference,
			partOf: RTTI_Reference,
			hoursOfOperation: t.array(RTTI_Location_HoursOfOperation),
			availabilityExceptions: t.string,
			_availabilityExceptions: RTTI_Element,
			endpoint: t.array(RTTI_Reference)
		})
	])
);
