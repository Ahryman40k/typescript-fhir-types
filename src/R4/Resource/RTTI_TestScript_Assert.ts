import * as t from 'io-ts';
import { RTTI_Extension, IExtension } from './RTTI_Extension';
import { RTTI_Element, IElement } from './RTTI_Element';
import { RTTI_code } from '../Scalar/RTTI_code';
import { RTTI_id } from '../Scalar/RTTI_id';
export enum TestScript_AssertDirectionKind {
	_response = 'response',
	_request = 'request'
}
export enum TestScript_AssertOperatorKind {
	_equals = 'equals',
	_notEquals = 'notEquals',
	_in = 'in',
	_notIn = 'notIn',
	_greaterThan = 'greaterThan',
	_lessThan = 'lessThan',
	_empty = 'empty',
	_notEmpty = 'notEmpty',
	_contains = 'contains',
	_notContains = 'notContains',
	_eval = 'eval'
}
export enum TestScript_AssertRequestMethodKind {
	_delete = 'delete',
	_get = 'get',
	_options = 'options',
	_patch = 'patch',
	_post = 'post',
	_put = 'put',
	_head = 'head'
}
export enum TestScript_AssertResponseKind {
	_okay = 'okay',
	_created = 'created',
	_noContent = 'noContent',
	_notModified = 'notModified',
	_bad = 'bad',
	_forbidden = 'forbidden',
	_notFound = 'notFound',
	_methodNotAllowed = 'methodNotAllowed',
	_conflict = 'conflict',
	_gone = 'gone',
	_preconditionFailed = 'preconditionFailed',
	_unprocessable = 'unprocessable'
}
import { createEnumType } from '../../EnumType';

export interface ITestScript_Assert {
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
	 * The label would be used for tracking/logging purposes by test engines.
	 */
	label?: string;

	/**
	 * Extensions for label
	 */
	_label?: IElement;

	/**
	 * The description would be used by test engines for tracking and reporting purposes.
	 */
	description?: string;

	/**
	 * Extensions for description
	 */
	_description?: IElement;

	/**
	 * The direction to use for the assertion.
	 */
	direction?: TestScript_AssertDirectionKind;

	/**
	 * Extensions for direction
	 */
	_direction?: IElement;

	/**
	 * Id of the source fixture used as the contents to be evaluated by either the "source/expression" or "sourceId/path" definition.
	 */
	compareToSourceId?: string;

	/**
	 * Extensions for compareToSourceId
	 */
	_compareToSourceId?: IElement;

	/**
	 * The FHIRPath expression to evaluate against the source fixture. When compareToSourceId is defined, either compareToSourceExpression or compareToSourcePath must be defined, but not both.
	 */
	compareToSourceExpression?: string;

	/**
	 * Extensions for compareToSourceExpression
	 */
	_compareToSourceExpression?: IElement;

	/**
	 * XPath or JSONPath expression to evaluate against the source fixture. When compareToSourceId is defined, either compareToSourceExpression or compareToSourcePath must be defined, but not both.
	 */
	compareToSourcePath?: string;

	/**
	 * Extensions for compareToSourcePath
	 */
	_compareToSourcePath?: IElement;

	/**
	 * The mime-type contents to compare against the request or response message 'Content-Type' header.
	 */
	contentType?: string;

	/**
	 * Extensions for contentType
	 */
	_contentType?: IElement;

	/**
	 * The FHIRPath expression to be evaluated against the request or response message contents - HTTP headers and payload.
	 */
	expression?: string;

	/**
	 * Extensions for expression
	 */
	_expression?: IElement;

	/**
	 * The HTTP header field name e.g. 'Location'.
	 */
	headerField?: string;

	/**
	 * Extensions for headerField
	 */
	_headerField?: IElement;

	/**
	 * The ID of a fixture.  Asserts that the response contains at a minimum the fixture specified by minimumId.
	 */
	minimumId?: string;

	/**
	 * Extensions for minimumId
	 */
	_minimumId?: IElement;

	/**
	 * Whether or not the test execution performs validation on the bundle navigation links.
	 */
	navigationLinks?: boolean;

	/**
	 * Extensions for navigationLinks
	 */
	_navigationLinks?: IElement;

	/**
	 * The operator type defines the conditional behavior of the assert. If not defined, the default is equals.
	 */
	operator?: TestScript_AssertOperatorKind;

	/**
	 * Extensions for operator
	 */
	_operator?: IElement;

	/**
	 * The XPath or JSONPath expression to be evaluated against the fixture representing the response received from server.
	 */
	path?: string;

	/**
	 * Extensions for path
	 */
	_path?: IElement;

	/**
	 * The request method or HTTP operation code to compare against that used by the client system under test.
	 */
	requestMethod?: TestScript_AssertRequestMethodKind;

	/**
	 * Extensions for requestMethod
	 */
	_requestMethod?: IElement;

	/**
	 * The value to use in a comparison against the request URL path string.
	 */
	requestURL?: string;

	/**
	 * Extensions for requestURL
	 */
	_requestURL?: IElement;

	/**
	 * The type of the resource.  See http://build.fhir.org/resourcelist.html.
	 */
	resource?: string;

	/**
	 * Extensions for resource
	 */
	_resource?: IElement;

	/**
	 * okay | created | noContent | notModified | bad | forbidden | notFound | methodNotAllowed | conflict | gone | preconditionFailed | unprocessable.
	 */
	response?: TestScript_AssertResponseKind;

	/**
	 * Extensions for response
	 */
	_response?: IElement;

	/**
	 * The value of the HTTP response code to be tested.
	 */
	responseCode?: string;

	/**
	 * Extensions for responseCode
	 */
	_responseCode?: IElement;

	/**
	 * Fixture to evaluate the XPath/JSONPath expression or the headerField  against.
	 */
	sourceId?: string;

	/**
	 * Extensions for sourceId
	 */
	_sourceId?: IElement;

	/**
	 * The ID of the Profile to validate against.
	 */
	validateProfileId?: string;

	/**
	 * Extensions for validateProfileId
	 */
	_validateProfileId?: IElement;

	/**
	 * The value to compare to.
	 */
	value?: string;

	/**
	 * Extensions for value
	 */
	_value?: IElement;

	/**
	 * Whether or not the test execution will produce a warning only on error for this assert.
	 */
	warningOnly?: boolean;

	/**
	 * Extensions for warningOnly
	 */
	_warningOnly?: IElement;
}

export const RTTI_TestScript_Assert: t.Type<ITestScript_Assert> = t.recursion(
	'ITestScript_Assert',
	() =>
		t.partial({
			id: t.string,
			extension: t.array(RTTI_Extension),
			modifierExtension: t.array(RTTI_Extension),
			label: t.string,
			_label: RTTI_Element,
			description: t.string,
			_description: RTTI_Element,
			direction: createEnumType<TestScript_AssertDirectionKind>(
				TestScript_AssertDirectionKind,
				'TestScript_AssertDirectionKind'
			),
			_direction: RTTI_Element,
			compareToSourceId: t.string,
			_compareToSourceId: RTTI_Element,
			compareToSourceExpression: t.string,
			_compareToSourceExpression: RTTI_Element,
			compareToSourcePath: t.string,
			_compareToSourcePath: RTTI_Element,
			contentType: RTTI_code,
			_contentType: RTTI_Element,
			expression: t.string,
			_expression: RTTI_Element,
			headerField: t.string,
			_headerField: RTTI_Element,
			minimumId: t.string,
			_minimumId: RTTI_Element,
			navigationLinks: t.boolean,
			_navigationLinks: RTTI_Element,
			operator: createEnumType<TestScript_AssertOperatorKind>(
				TestScript_AssertOperatorKind,
				'TestScript_AssertOperatorKind'
			),
			_operator: RTTI_Element,
			path: t.string,
			_path: RTTI_Element,
			requestMethod: createEnumType<TestScript_AssertRequestMethodKind>(
				TestScript_AssertRequestMethodKind,
				'TestScript_AssertRequestMethodKind'
			),
			_requestMethod: RTTI_Element,
			requestURL: t.string,
			_requestURL: RTTI_Element,
			resource: RTTI_code,
			_resource: RTTI_Element,
			response: createEnumType<TestScript_AssertResponseKind>(
				TestScript_AssertResponseKind,
				'TestScript_AssertResponseKind'
			),
			_response: RTTI_Element,
			responseCode: t.string,
			_responseCode: RTTI_Element,
			sourceId: RTTI_id,
			_sourceId: RTTI_Element,
			validateProfileId: RTTI_id,
			_validateProfileId: RTTI_Element,
			value: t.string,
			_value: RTTI_Element,
			warningOnly: t.boolean,
			_warningOnly: RTTI_Element
		})
);
