import * as t from 'io-ts';
import {RTTI_Extension, IExtension} from './RTTI_Extension';
import {RTTI_positiveInt} from '../Scalar/RTTI_positiveInt';
import {RTTI_Element, IElement} from './RTTI_Element';
import {RTTI_Reference, IReference} from './RTTI_Reference';

export interface ICoverageEligibilityRequest_SupportingInfo {
  /**
   * Additional data or information such as resources, documents, images etc. including references to the data or the actual inclusion of the data.
   */
  information: IReference;

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
   * The supporting materials are applicable for all detail items, product/servce categories and specific billing codes.
   */
  appliesToAll?: boolean;

  /**
   * Extensions for appliesToAll
   */
  _appliesToAll?: IElement;
}

export const RTTI_CoverageEligibilityRequest_SupportingInfo: t.Type<ICoverageEligibilityRequest_SupportingInfo> =
  t.recursion('ICoverageEligibilityRequest_SupportingInfo', () =>
    t.intersection([
      t.type({
        information: RTTI_Reference,
      }),
      t.partial({
        id: t.string,
        extension: t.array(RTTI_Extension),
        modifierExtension: t.array(RTTI_Extension),
        sequence: RTTI_positiveInt,
        _sequence: RTTI_Element,
        appliesToAll: t.boolean,
        _appliesToAll: RTTI_Element,
      }),
    ]),
  );
