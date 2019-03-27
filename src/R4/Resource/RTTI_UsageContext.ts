import * as t from 'io-ts';
import { RTTI_Extension, IExtension } from './RTTI_Extension';
import { RTTI_Coding, ICoding } from './RTTI_Coding';
import { RTTI_CodeableConcept, ICodeableConcept } from './RTTI_CodeableConcept';
import { RTTI_Quantity, IQuantity } from './RTTI_Quantity';
import { RTTI_Range, IRange } from './RTTI_Range';
import { RTTI_Reference, IReference } from './RTTI_Reference';

export interface IUsageContext {
	/**
	 * A code that identifies the type of context being specified by this usage context.
	 */
	code: ICoding;

	/**
	 * Unique id for the element within a resource (for internal references). This may be any string value that does not contain spaces.
	 */
	id?: string;

	/**
	 * May be used to represent additional information that is not part of the basic definition of the element. To make the use of extensions safe and manageable, there is a strict set of governance  applied to the definition and use of extensions. Though any implementer can define an extension, there is a set of requirements that SHALL be met as part of the definition of the extension.
	 */
	extension?: IExtension[];

	/**
	 * A value that defines the context specified in this context of use. The interpretation of the value is defined by the code.
	 */
	valueCodeableConcept?: ICodeableConcept;

	/**
	 * A value that defines the context specified in this context of use. The interpretation of the value is defined by the code.
	 */
	valueQuantity?: IQuantity;

	/**
	 * A value that defines the context specified in this context of use. The interpretation of the value is defined by the code.
	 */
	valueRange?: IRange;

	/**
	 * A value that defines the context specified in this context of use. The interpretation of the value is defined by the code.
	 */
	valueReference?: IReference;
}

export const RTTI_UsageContext: t.Type<IUsageContext> = t.recursion(
	'IUsageContext',
	() =>
		t.intersection([
			t.type({
				code: RTTI_Coding
			}),
			t.partial({
				id: t.string,
				extension: t.array(RTTI_Extension),
				valueCodeableConcept: RTTI_CodeableConcept,
				valueQuantity: RTTI_Quantity,
				valueRange: RTTI_Range,
				valueReference: RTTI_Reference
			})
		])
);
