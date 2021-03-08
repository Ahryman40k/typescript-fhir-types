import * as t from 'io-ts';
import {RTTI_Extension, IExtension} from './RTTI_Extension';
import {RTTI_Reference, IReference} from './RTTI_Reference';
import {RTTI_positiveInt} from '../Scalar/RTTI_positiveInt';
import {RTTI_Element, IElement} from './RTTI_Element';

export interface IAccount_Coverage {
  /**
                     * The party(s) that contribute to payment (or part of) of the charges applied to this account (including self-pay).

A coverage may only be responsible for specific types of charges, and the sequence of the coverages in the account could be important when processing billing.
                     */
  coverage: IReference;

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
   * The priority of the coverage in the context of this account.
   */
  priority?: number;

  /**
   * Extensions for priority
   */
  _priority?: IElement;
}

export const RTTI_Account_Coverage: t.Type<IAccount_Coverage> = t.recursion(
  'IAccount_Coverage',
  () =>
    t.intersection([
      t.type({
        coverage: RTTI_Reference,
      }),
      t.partial({
        id: t.string,
        extension: t.array(RTTI_Extension),
        modifierExtension: t.array(RTTI_Extension),
        priority: RTTI_positiveInt,
        _priority: RTTI_Element,
      }),
    ]),
);
