import * as t from 'io-ts';
import { RTTI_Extension, IExtension } from './RTTI_Extension';
import { RTTI_Element, IElement } from './RTTI_Element';
import { RTTI_id } from '../Scalar/RTTI_id';
import { RTTI_uri } from '../Scalar/RTTI_uri';
export enum ExpressionLanguageKind {
	_textCql = 'text/cql',
	_textFhirpath = 'text/fhirpath',
	_applicationXFhirQuery = 'application/x-fhir-query'
}
import { createEnumType } from '../../EnumType';

export interface IExpression {
	/**
	 * Unique id for the element within a resource (for internal references). This may be any string value that does not contain spaces.
	 */
	id?: string;

	/**
	 * May be used to represent additional information that is not part of the basic definition of the element. To make the use of extensions safe and manageable, there is a strict set of governance  applied to the definition and use of extensions. Though any implementer can define an extension, there is a set of requirements that SHALL be met as part of the definition of the extension.
	 */
	extension?: IExtension[];

	/**
	 * A brief, natural language description of the condition that effectively communicates the intended semantics.
	 */
	description?: string;

	/**
	 * Extensions for description
	 */
	_description?: IElement;

	/**
	 * A short name assigned to the expression to allow for multiple reuse of the expression in the context where it is defined.
	 */
	name?: string;

	/**
	 * Extensions for name
	 */
	_name?: IElement;

	/**
	 * The media type of the language for the expression.
	 */
	language?: ExpressionLanguageKind;

	/**
	 * Extensions for language
	 */
	_language?: IElement;

	/**
	 * An expression in the specified language that returns a value.
	 */
	expression?: string;

	/**
	 * Extensions for expression
	 */
	_expression?: IElement;

	/**
	 * A URI that defines where the expression is found.
	 */
	reference?: string;

	/**
	 * Extensions for reference
	 */
	_reference?: IElement;
}

export const RTTI_Expression: t.Type<IExpression> = t.recursion(
	'IExpression',
	() =>
		t.partial({
			id: t.string,
			extension: t.array(RTTI_Extension),
			description: t.string,
			_description: RTTI_Element,
			name: RTTI_id,
			_name: RTTI_Element,
			language: createEnumType<ExpressionLanguageKind>(
				ExpressionLanguageKind,
				'ExpressionLanguageKind'
			),
			_language: RTTI_Element,
			expression: t.string,
			_expression: RTTI_Element,
			reference: RTTI_uri,
			_reference: RTTI_Element
		})
);
