import * as t from 'io-ts';
import { RTTI_Extension, IExtension } from './RTTI_Extension';
import { RTTI_Element, IElement } from './RTTI_Element';

export interface IValueSet_Parameter {
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
	 * Name of the input parameter to the $expand operation; may be a server-assigned name for additional default or other server-supplied parameters used to control the expansion process.
	 */
	name?: string;

	/**
	 * Extensions for name
	 */
	_name?: IElement;

	/**
	 * The value of the parameter.
	 */
	valueString?: string;

	/**
	 * Extensions for valueString
	 */
	_valueString?: IElement;

	/**
	 * The value of the parameter.
	 */
	valueBoolean?: boolean;

	/**
	 * Extensions for valueBoolean
	 */
	_valueBoolean?: IElement;

	/**
	 * The value of the parameter.
	 */
	valueInteger?: number;

	/**
	 * Extensions for valueInteger
	 */
	_valueInteger?: IElement;

	/**
	 * The value of the parameter.
	 */
	valueDecimal?: number;

	/**
	 * Extensions for valueDecimal
	 */
	_valueDecimal?: IElement;

	/**
	 * The value of the parameter.
	 */
	valueUri?: string;

	/**
	 * Extensions for valueUri
	 */
	_valueUri?: IElement;

	/**
	 * The value of the parameter.
	 */
	valueCode?: string;

	/**
	 * Extensions for valueCode
	 */
	_valueCode?: IElement;

	/**
	 * The value of the parameter.
	 */
	valueDateTime?: string;

	/**
	 * Extensions for valueDateTime
	 */
	_valueDateTime?: IElement;
}

export const RTTI_ValueSet_Parameter: t.Type<IValueSet_Parameter> = t.recursion(
	'IValueSet_Parameter',
	() =>
		t.partial({
			id: t.string,
			extension: t.array(RTTI_Extension),
			modifierExtension: t.array(RTTI_Extension),
			name: t.string,
			_name: RTTI_Element,
			valueString: t.string,
			_valueString: RTTI_Element,
			valueBoolean: t.boolean,
			_valueBoolean: RTTI_Element,
			valueInteger: t.number,
			_valueInteger: RTTI_Element,
			valueDecimal: t.number,
			_valueDecimal: RTTI_Element,
			valueUri: t.string,
			_valueUri: RTTI_Element,
			valueCode: t.string,
			_valueCode: RTTI_Element,
			valueDateTime: t.string,
			_valueDateTime: RTTI_Element
		})
);
