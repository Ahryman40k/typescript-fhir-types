import * as t from 'io-ts';
import { RTTI_Extension, IExtension } from './RTTI_Extension';
import { RTTI_Element, IElement } from './RTTI_Element';
import { RTTI_uri } from '../Scalar/RTTI_uri';
import { RTTI_base64Binary } from '../Scalar/RTTI_base64Binary';
export enum Device_UdiCarrierEntryTypeKind {
	_barcode = 'barcode',
	_rfid = 'rfid',
	_manual = 'manual',
	_card = 'card',
	_selfReported = 'self-reported',
	_unknown = 'unknown'
}
import { createEnumType } from '../../EnumType';

export interface IDevice_UdiCarrier {
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
	 * The device identifier (DI) is a mandatory, fixed portion of a UDI that identifies the labeler and the specific version or model of a device.
	 */
	deviceIdentifier?: string;

	/**
	 * Extensions for deviceIdentifier
	 */
	_deviceIdentifier?: IElement;

	/**
                     * Organization that is charged with issuing UDIs for devices.  For example, the US FDA issuers include :
1) GS1: 
http://hl7.org/fhir/NamingSystem/gs1-di, 
2) HIBCC:
http://hl7.org/fhir/NamingSystem/hibcc-dI, 
3) ICCBBA for blood containers:
http://hl7.org/fhir/NamingSystem/iccbba-blood-di, 
4) ICCBA for other devices:
http://hl7.org/fhir/NamingSystem/iccbba-other-di.
                     */
	issuer?: string;

	/**
	 * Extensions for issuer
	 */
	_issuer?: IElement;

	/**
	 * The identity of the authoritative source for UDI generation within a  jurisdiction.  All UDIs are globally unique within a single namespace with the appropriate repository uri as the system.  For example,  UDIs of devices managed in the U.S. by the FDA, the value is  http://hl7.org/fhir/NamingSystem/fda-udi.
	 */
	jurisdiction?: string;

	/**
	 * Extensions for jurisdiction
	 */
	_jurisdiction?: IElement;

	/**
	 * The full UDI carrier of the Automatic Identification and Data Capture (AIDC) technology representation of the barcode string as printed on the packaging of the device - e.g., a barcode or RFID.   Because of limitations on character sets in XML and the need to round-trip JSON data through XML, AIDC Formats *SHALL* be base64 encoded.
	 */
	carrierAIDC?: string;

	/**
	 * Extensions for carrierAIDC
	 */
	_carrierAIDC?: IElement;

	/**
	 * The full UDI carrier as the human readable form (HRF) representation of the barcode string as printed on the packaging of the device.
	 */
	carrierHRF?: string;

	/**
	 * Extensions for carrierHRF
	 */
	_carrierHRF?: IElement;

	/**
	 * A coded entry to indicate how the data was entered.
	 */
	entryType?: Device_UdiCarrierEntryTypeKind;

	/**
	 * Extensions for entryType
	 */
	_entryType?: IElement;
}

export const RTTI_Device_UdiCarrier: t.Type<IDevice_UdiCarrier> = t.recursion(
	'IDevice_UdiCarrier',
	() =>
		t.partial({
			id: t.string,
			extension: t.array(RTTI_Extension),
			modifierExtension: t.array(RTTI_Extension),
			deviceIdentifier: t.string,
			_deviceIdentifier: RTTI_Element,
			issuer: RTTI_uri,
			_issuer: RTTI_Element,
			jurisdiction: RTTI_uri,
			_jurisdiction: RTTI_Element,
			carrierAIDC: RTTI_base64Binary,
			_carrierAIDC: RTTI_Element,
			carrierHRF: t.string,
			_carrierHRF: RTTI_Element,
			entryType: createEnumType<Device_UdiCarrierEntryTypeKind>(
				Device_UdiCarrierEntryTypeKind,
				'Device_UdiCarrierEntryTypeKind'
			),
			_entryType: RTTI_Element
		})
);
