import * as t from 'io-ts';
import { RTTI_Extension, IExtension } from './RTTI_Extension';
import { RTTI_id } from '../Scalar/RTTI_id';
import { RTTI_Element, IElement } from './RTTI_Element';
import { RTTI_instant } from '../Scalar/RTTI_instant';
import { RTTI_uri } from '../Scalar/RTTI_uri';
import { RTTI_canonical } from '../Scalar/RTTI_canonical';
import { RTTI_Coding, ICoding } from './RTTI_Coding';

export interface IMeta {
	/**
	 * Unique id for the element within a resource (for internal references). This may be any string value that does not contain spaces.
	 */
	id?: string;

	/**
	 * May be used to represent additional information that is not part of the basic definition of the element. To make the use of extensions safe and manageable, there is a strict set of governance  applied to the definition and use of extensions. Though any implementer can define an extension, there is a set of requirements that SHALL be met as part of the definition of the extension.
	 */
	extension?: IExtension[];

	/**
	 * The version specific identifier, as it appears in the version portion of the URL. This value changes when the resource is created, updated, or deleted.
	 */
	versionId?: string;

	/**
	 * Extensions for versionId
	 */
	_versionId?: IElement;

	/**
	 * When the resource last changed - e.g. when the version changed.
	 */
	lastUpdated?: string;

	/**
	 * Extensions for lastUpdated
	 */
	_lastUpdated?: IElement;

	/**
	 * A uri that identifies the source system of the resource. This provides a minimal amount of [[[Provenance]]] information that can be used to track or differentiate the source of information in the resource. The source may identify another FHIR server, document, message, database, etc.
	 */
	source?: string;

	/**
	 * Extensions for source
	 */
	_source?: IElement;

	/**
	 * A list of profiles (references to [[[StructureDefinition]]] resources) that this resource claims to conform to. The URL is a reference to [[[StructureDefinition.url]]].
	 */
	profile?: string[];

	/**
	 * Security labels applied to this resource. These tags connect specific resources to the overall security policy and infrastructure.
	 */
	security?: ICoding[];

	/**
	 * Tags applied to this resource. Tags are intended to be used to identify and relate resources to process and workflow, and applications are not required to consider the tags when interpreting the meaning of a resource.
	 */
	tag?: ICoding[];
}

export const RTTI_Meta: t.Type<IMeta> = t.recursion('IMeta', () =>
	t.partial({
		id: t.string,
		extension: t.array(RTTI_Extension),
		versionId: RTTI_id,
		_versionId: RTTI_Element,
		lastUpdated: RTTI_instant,
		_lastUpdated: RTTI_Element,
		source: RTTI_uri,
		_source: RTTI_Element,
		profile: t.array(RTTI_canonical),
		security: t.array(RTTI_Coding),
		tag: t.array(RTTI_Coding)
	})
);
