import * as t from 'io-ts';
import { RTTI_Extension, IExtension } from './RTTI_Extension';
import { RTTI_uri } from '../Scalar/RTTI_uri';
import { RTTI_Element, IElement } from './RTTI_Element';
import { RTTI_code } from '../Scalar/RTTI_code';
import {
	RTTI_ValueSet_Designation,
	IValueSet_Designation
} from './RTTI_ValueSet_Designation';

export interface IValueSet_Contains {
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
	 * An absolute URI which is the code system in which the code for this item in the expansion is defined.
	 */
	system?: string;

	/**
	 * Extensions for system
	 */
	_system?: IElement;

	/**
	 * If true, this entry is included in the expansion for navigational purposes, and the user cannot select the code directly as a proper value.
	 */
	abstract?: boolean;

	/**
	 * Extensions for abstract
	 */
	_abstract?: IElement;

	/**
	 * If the concept is inactive in the code system that defines it. Inactive codes are those that are no longer to be used, but are maintained by the code system for understanding legacy data. It might not be known or specified whether an concept is inactive (and it may depend on the context of use).
	 */
	inactive?: boolean;

	/**
	 * Extensions for inactive
	 */
	_inactive?: IElement;

	/**
	 * The version of the code system from this code was taken. Note that a well-maintained code system does not need the version reported, because the meaning of codes is consistent across versions. However this cannot consistently be assured, and when the meaning is not guaranteed to be consistent, the version SHOULD be exchanged.
	 */
	version?: string;

	/**
	 * Extensions for version
	 */
	_version?: IElement;

	/**
	 * The code for this item in the expansion hierarchy. If this code is missing the entry in the hierarchy is a place holder (abstract) and does not represent a valid code in the value set.
	 */
	code?: string;

	/**
	 * Extensions for code
	 */
	_code?: IElement;

	/**
	 * The recommended display for this item in the expansion.
	 */
	display?: string;

	/**
	 * Extensions for display
	 */
	_display?: IElement;

	/**
	 * Additional representations for this item - other languages, aliases, specialized purposes, used for particular purposes, etc. These are relevant when the conditions of the expansion do not fix to a single correct representation.
	 */
	designation?: IValueSet_Designation[];

	/**
	 * Other codes and entries contained under this entry in the hierarchy.
	 */
	contains?: IValueSet_Contains[];
}

export const RTTI_ValueSet_Contains: t.Type<IValueSet_Contains> = t.recursion(
	'IValueSet_Contains',
	() =>
		t.partial({
			id: t.string,
			extension: t.array(RTTI_Extension),
			modifierExtension: t.array(RTTI_Extension),
			system: RTTI_uri,
			_system: RTTI_Element,
			abstract: t.boolean,
			_abstract: RTTI_Element,
			inactive: t.boolean,
			_inactive: RTTI_Element,
			version: t.string,
			_version: RTTI_Element,
			code: RTTI_code,
			_code: RTTI_Element,
			display: t.string,
			_display: RTTI_Element,
			designation: t.array(RTTI_ValueSet_Designation),
			contains: t.array(RTTI_ValueSet_Contains)
		})
);
