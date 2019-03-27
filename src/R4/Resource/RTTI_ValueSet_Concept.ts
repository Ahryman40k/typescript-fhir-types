import * as t from 'io-ts';
import { RTTI_Extension, IExtension } from './RTTI_Extension';
import { RTTI_code } from '../Scalar/RTTI_code';
import { RTTI_Element, IElement } from './RTTI_Element';
import {
	RTTI_ValueSet_Designation,
	IValueSet_Designation
} from './RTTI_ValueSet_Designation';

export interface IValueSet_Concept {
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
	 * Specifies a code for the concept to be included or excluded.
	 */
	code?: string;

	/**
	 * Extensions for code
	 */
	_code?: IElement;

	/**
	 * The text to display to the user for this concept in the context of this valueset. If no display is provided, then applications using the value set use the display specified for the code by the system.
	 */
	display?: string;

	/**
	 * Extensions for display
	 */
	_display?: IElement;

	/**
	 * Additional representations for this concept when used in this value set - other languages, aliases, specialized purposes, used for particular purposes, etc.
	 */
	designation?: IValueSet_Designation[];
}

export const RTTI_ValueSet_Concept: t.Type<IValueSet_Concept> = t.recursion(
	'IValueSet_Concept',
	() =>
		t.partial({
			id: t.string,
			extension: t.array(RTTI_Extension),
			modifierExtension: t.array(RTTI_Extension),
			code: RTTI_code,
			_code: RTTI_Element,
			display: t.string,
			_display: RTTI_Element,
			designation: t.array(RTTI_ValueSet_Designation)
		})
);
