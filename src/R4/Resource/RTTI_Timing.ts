import * as t from 'io-ts';
import { RTTI_Extension, IExtension } from './RTTI_Extension';
import { RTTI_dateTime } from '../Scalar/RTTI_dateTime';
import { RTTI_Element, IElement } from './RTTI_Element';
import { RTTI_Timing_Repeat, ITiming_Repeat } from './RTTI_Timing_Repeat';
import { RTTI_CodeableConcept, ICodeableConcept } from './RTTI_CodeableConcept';

export interface ITiming {
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
	 * Identifies specific times when the event occurs.
	 */
	event?: string[];

	/**
	 * Extensions for event
	 */
	_event?: IElement[];

	/**
	 * A set of rules that describe when the event is scheduled.
	 */
	repeat?: ITiming_Repeat;

	/**
	 * A code for the timing schedule (or just text in code.text). Some codes such as BID are ubiquitous, but many institutions define their own additional codes. If a code is provided, the code is understood to be a complete statement of whatever is specified in the structured timing data, and either the code or the data may be used to interpret the Timing, with the exception that .repeat.bounds still applies over the code (and is not contained in the code).
	 */
	code?: ICodeableConcept;
}

export const RTTI_Timing: t.Type<ITiming> = t.recursion('ITiming', () =>
	t.partial({
		id: t.string,
		extension: t.array(RTTI_Extension),
		modifierExtension: t.array(RTTI_Extension),
		event: t.array(RTTI_dateTime),
		_event: t.array(RTTI_Element),
		repeat: RTTI_Timing_Repeat,
		code: RTTI_CodeableConcept
	})
);
