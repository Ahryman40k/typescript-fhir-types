import * as t from 'io-ts';
import { RTTI_Extension, IExtension } from './RTTI_Extension';
import { RTTI_Element, IElement } from './RTTI_Element';
import { RTTI_uri } from '../Scalar/RTTI_uri';
import { RTTI_instant } from '../Scalar/RTTI_instant';
import { RTTI_ResourceList, IResourceList } from '../Union/RTTI_ResourceList';

export interface IBundle_Response {
	/**
	 * Unique id for the element within a resource (for internal references). This may be any string value that does not contain spaces.
	 */
	id?: string;

	/**
	 * May be used to represent additional information that is not part of the basic definition of the element. To make the use of extensions safe and manageable, there is a strict set of governance  applied to the definition and use of extensions. Though any implementer can define an extension, there is a set of requirements that SHALL be met as part of the definition of the extension.
	 */
	extension?: IExtension[];

	/**
                     * May be used to represent additional information that is not part of the basic definition of the element and that modifies the understanding of the element in which it is contained and/or the understanding of the containing element's descendants. Usually modifier elements provide negation or qualification. To make the use of extensions safe and manageable, there is a strict set of governance applied to the definition and use of extensions. Though any implementer can define an extension, there is a set of requirements that SHALL be met as part of the definition of the extension. Applications processing a resource are required to check for modifier extensions.

Modifier extensions SHALL NOT change the meaning of any elements on Resource or DomainResource (including cannot change the meaning of modifierExtension itself).
                     */
	modifierExtension?: IExtension[];

	/**
	 * The status code returned by processing this entry. The status SHALL start with a 3 digit HTTP code (e.g. 404) and may contain the standard HTTP description associated with the status code.
	 */
	status?: string;

	/**
	 * Extensions for status
	 */
	_status?: IElement;

	/**
	 * The location header created by processing this operation, populated if the operation returns a location.
	 */
	location?: string;

	/**
	 * Extensions for location
	 */
	_location?: IElement;

	/**
	 * The Etag for the resource, if the operation for the entry produced a versioned resource (see [Resource Metadata and Versioning](http.html#versioning) and [Managing Resource Contention](http.html#concurrency)).
	 */
	etag?: string;

	/**
	 * Extensions for etag
	 */
	_etag?: IElement;

	/**
	 * The date/time that the resource was modified on the server.
	 */
	lastModified?: string;

	/**
	 * Extensions for lastModified
	 */
	_lastModified?: IElement;

	/**
	 * An OperationOutcome containing hints and warnings produced as part of processing this entry in a batch or transaction.
	 */
	outcome?: IResourceList;
}

export const RTTI_Bundle_Response: t.Type<IBundle_Response> = t.recursion(
	'IBundle_Response',
	() =>
		t.partial({
			id: t.string,
			extension: t.array(RTTI_Extension),
			modifierExtension: t.array(RTTI_Extension),
			status: t.string,
			_status: RTTI_Element,
			location: RTTI_uri,
			_location: RTTI_Element,
			etag: t.string,
			_etag: RTTI_Element,
			lastModified: RTTI_instant,
			_lastModified: RTTI_Element,
			outcome: RTTI_ResourceList
		})
);
