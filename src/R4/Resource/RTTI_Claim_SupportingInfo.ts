import * as t from 'io-ts';
import {RTTI_Extension, IExtension} from './RTTI_Extension';
import {RTTI_positiveInt} from '../Scalar/RTTI_positiveInt';
import {RTTI_Element, IElement} from './RTTI_Element';
import {RTTI_CodeableConcept, ICodeableConcept} from './RTTI_CodeableConcept';
import {RTTI_Period, IPeriod} from './RTTI_Period';
import {RTTI_Quantity, IQuantity} from './RTTI_Quantity';
import {RTTI_Attachment, IAttachment} from './RTTI_Attachment';
import {RTTI_Reference, IReference} from './RTTI_Reference';

export interface IClaim_SupportingInfo {
  /**
   * The general class of the information supplied: information; exception; accident, employment; onset, etc.
   */
  category: ICodeableConcept;

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
   * A number to uniquely identify supporting information entries.
   */
  sequence?: number;

  /**
   * Extensions for sequence
   */
  _sequence?: IElement;

  /**
   * System and code pertaining to the specific information regarding special conditions relating to the setting, treatment or patient  for which care is sought.
   */
  code?: ICodeableConcept;

  /**
   * The date when or period to which this information refers.
   */
  timingDate?: string;

  /**
   * Extensions for timingDate
   */
  _timingDate?: IElement;

  /**
   * The date when or period to which this information refers.
   */
  timingPeriod?: IPeriod;

  /**
   * Additional data or information such as resources, documents, images etc. including references to the data or the actual inclusion of the data.
   */
  valueBoolean?: boolean;

  /**
   * Extensions for valueBoolean
   */
  _valueBoolean?: IElement;

  /**
   * Additional data or information such as resources, documents, images etc. including references to the data or the actual inclusion of the data.
   */
  valueString?: string;

  /**
   * Extensions for valueString
   */
  _valueString?: IElement;

  /**
   * Additional data or information such as resources, documents, images etc. including references to the data or the actual inclusion of the data.
   */
  valueQuantity?: IQuantity;

  /**
   * Additional data or information such as resources, documents, images etc. including references to the data or the actual inclusion of the data.
   */
  valueAttachment?: IAttachment;

  /**
   * Additional data or information such as resources, documents, images etc. including references to the data or the actual inclusion of the data.
   */
  valueReference?: IReference;

  /**
   * Provides the reason in the situation where a reason code is required in addition to the content.
   */
  reason?: ICodeableConcept;
}

export const RTTI_Claim_SupportingInfo: t.Type<IClaim_SupportingInfo> =
  t.recursion('IClaim_SupportingInfo', () =>
    t.intersection([
      t.type({
        category: RTTI_CodeableConcept,
      }),
      t.partial({
        id: t.string,
        extension: t.array(RTTI_Extension),
        modifierExtension: t.array(RTTI_Extension),
        sequence: RTTI_positiveInt,
        _sequence: RTTI_Element,
        code: RTTI_CodeableConcept,
        timingDate: t.string,
        _timingDate: RTTI_Element,
        timingPeriod: RTTI_Period,
        valueBoolean: t.boolean,
        _valueBoolean: RTTI_Element,
        valueString: t.string,
        _valueString: RTTI_Element,
        valueQuantity: RTTI_Quantity,
        valueAttachment: RTTI_Attachment,
        valueReference: RTTI_Reference,
        reason: RTTI_CodeableConcept,
      }),
    ]),
  );
