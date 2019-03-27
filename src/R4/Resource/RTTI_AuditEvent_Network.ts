import * as t from 'io-ts';
import { RTTI_Extension, IExtension } from './RTTI_Extension';
import { RTTI_Element, IElement } from './RTTI_Element';
export enum AuditEvent_NetworkTypeKind {
	_machineName = 'MachineName',
	_ipAddress = 'IPAddress',
	_telephoneNumber = 'TelephoneNumber',
	_emailAddress = 'EmailAddress',
	_uri = 'Uri'
}
import { createEnumType } from '../../EnumType';

export interface IAuditEvent_Network {
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
	 * An identifier for the network access point of the user device for the audit event.
	 */
	address?: string;

	/**
	 * Extensions for address
	 */
	_address?: IElement;

	/**
	 * An identifier for the type of network access point that originated the audit event.
	 */
	type?: AuditEvent_NetworkTypeKind;

	/**
	 * Extensions for type
	 */
	_type?: IElement;
}

export const RTTI_AuditEvent_Network: t.Type<IAuditEvent_Network> = t.recursion(
	'IAuditEvent_Network',
	() =>
		t.partial({
			id: t.string,
			extension: t.array(RTTI_Extension),
			modifierExtension: t.array(RTTI_Extension),
			address: t.string,
			_address: RTTI_Element,
			type: createEnumType<AuditEvent_NetworkTypeKind>(
				AuditEvent_NetworkTypeKind,
				'AuditEvent_NetworkTypeKind'
			),
			_type: RTTI_Element
		})
);
