import * as t from 'io-ts';
import { RTTI_Extension, IExtension } from './RTTI_Extension';
import { RTTI_positiveInt } from '../Scalar/RTTI_positiveInt';
import { RTTI_Element, IElement } from './RTTI_Element';
import { RTTI_Reference, IReference } from './RTTI_Reference';
import { RTTI_CodeableConcept, ICodeableConcept } from './RTTI_CodeableConcept';
import {
	RTTI_Invoice_PriceComponent,
	IInvoice_PriceComponent
} from './RTTI_Invoice_PriceComponent';

export interface IInvoice_LineItem {
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
	 * Sequence in which the items appear on the invoice.
	 */
	sequence?: number;

	/**
	 * Extensions for sequence
	 */
	_sequence?: IElement;

	/**
	 * The ChargeItem contains information such as the billing code, date, amount etc. If no further details are required for the lineItem, inline billing codes can be added using the CodeableConcept data type instead of the Reference.
	 */
	chargeItemReference?: IReference;

	/**
	 * The ChargeItem contains information such as the billing code, date, amount etc. If no further details are required for the lineItem, inline billing codes can be added using the CodeableConcept data type instead of the Reference.
	 */
	chargeItemCodeableConcept?: ICodeableConcept;

	/**
	 * The price for a ChargeItem may be calculated as a base price with surcharges/deductions that apply in certain conditions. A ChargeItemDefinition resource that defines the prices, factors and conditions that apply to a billing code is currently under development. The priceComponent element can be used to offer transparency to the recipient of the Invoice as to how the prices have been calculated.
	 */
	priceComponent?: IInvoice_PriceComponent[];
}

export const RTTI_Invoice_LineItem: t.Type<IInvoice_LineItem> = t.recursion(
	'IInvoice_LineItem',
	() =>
		t.partial({
			id: t.string,
			extension: t.array(RTTI_Extension),
			modifierExtension: t.array(RTTI_Extension),
			sequence: RTTI_positiveInt,
			_sequence: RTTI_Element,
			chargeItemReference: RTTI_Reference,
			chargeItemCodeableConcept: RTTI_CodeableConcept,
			priceComponent: t.array(RTTI_Invoice_PriceComponent)
		})
);
