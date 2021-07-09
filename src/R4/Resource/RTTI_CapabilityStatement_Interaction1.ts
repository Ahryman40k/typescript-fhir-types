import * as t from 'io-ts';
import {RTTI_Extension, IExtension} from './RTTI_Extension';
import {RTTI_Element, IElement} from './RTTI_Element';
import {RTTI_markdown} from '../Scalar/RTTI_markdown';
export enum CapabilityStatement_Interaction1CodeKind {
  _transaction = 'transaction',
  _batch = 'batch',
  _searchSystem = 'search-system',
  _historySystem = 'history-system',
}
import {createEnumType} from '../../EnumType';

export interface ICapabilityStatement_Interaction1 {
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
   * A coded identifier of the operation, supported by the system.
   */
  code?: CapabilityStatement_Interaction1CodeKind;

  /**
   * Extensions for code
   */
  _code?: IElement;

  /**
   * Guidance specific to the implementation of this operation, such as limitations on the kind of transactions allowed, or information about system wide search is implemented.
   */
  documentation?: string;

  /**
   * Extensions for documentation
   */
  _documentation?: IElement;
}

export const RTTI_CapabilityStatement_Interaction1: t.Type<ICapabilityStatement_Interaction1> =
  t.recursion('ICapabilityStatement_Interaction1', () =>
    t.partial({
      id: t.string,
      extension: t.array(RTTI_Extension),
      modifierExtension: t.array(RTTI_Extension),
      code: createEnumType<CapabilityStatement_Interaction1CodeKind>(
        CapabilityStatement_Interaction1CodeKind,
        'CapabilityStatement_Interaction1CodeKind',
      ),
      _code: RTTI_Element,
      documentation: RTTI_markdown,
      _documentation: RTTI_Element,
    }),
  );
